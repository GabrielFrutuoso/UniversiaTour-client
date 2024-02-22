import { useContext } from "react"
import { api } from "../api/UniversiaApi"
import { appContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom"


export const useAuth = () => {
    const navigate = useNavigate()
    const { setUser, setOpenAlert, setAlertText } = useContext(appContext)

    const signIn = async (email: string, password: string) => {

        const loginOBJ = {
            email,
            password
        }

        await handleLogin(loginOBJ, email)

    }

    const signOut = () => {
        window.location.reload()
        localStorage.removeItem("@Auth:token")
        localStorage.removeItem("@Auth:user")
        setUser(null)
    }    

    const findUserByEmail = async (userEmail: string) => {

        await api.get(`/user/${userEmail}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("@Auth:token") as string)}`
            }})
            .then((res) => {               
                setUser(res.data)
                navigate("/")
            })
    }



    const handleLogin = async (loginOBJ: any, email: string) => {
        try {
            await api.post("/login", loginOBJ).then((res) => {
                console.log("handleLogin", res);
                
                localStorage.setItem("@Auth:token", JSON.stringify(res.data?.access_token)) 
                localStorage.setItem("@Auth:user", JSON.stringify(email)) 
            }).then(() => {
                findUserByEmail(email)
            })
        } catch (error) {
            setOpenAlert(true)
            setAlertText("Email ou senha inválidos")
        }         
    }

  return {
    signIn,
    signOut,
    findUserByEmail
  }
}
