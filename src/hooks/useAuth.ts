import { useContext } from "react"
import { api } from "../api/UniversiaApi"
import { appContext } from "../context/AppContext"

export const useAuth = () => {

    const { setUser } = useContext(appContext)

    const signIn = async (email: string, password: string) => {

        const loginOBJ = {
            email,
            password
        }

        handleLogin(loginOBJ, email).then(() => {
            findUserByEmail(email)
        })

    }

    const signOut = () => {
        window.location.reload()
        localStorage.removeItem("@Auth:token")
        localStorage.removeItem("@Auth:user")
        setUser(null)
    }    

    const findUserByEmail = async (email: string) => {
        const { data } = await api.get(`/user/${email}`, {headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("@Auth:token") as string)}`
        }})
        setUser(data)
    }



    const handleLogin = async (loginOBJ: any, email: string) => {
        const { data } = await api.post("/login", loginOBJ)
        localStorage.setItem("@Auth:token", JSON.stringify(data.access_token)) 
        localStorage.setItem("@Auth:user", JSON.stringify(email))           
    }

  return {
    signIn,
    signOut,
    findUserByEmail
  }
}
