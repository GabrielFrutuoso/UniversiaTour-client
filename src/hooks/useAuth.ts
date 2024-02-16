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

        const handleLogin = async () => {
            const { data } = await api.post("/login", loginOBJ)
            localStorage.setItem("@Auth:token", JSON.stringify(data.access_token))            
        }
        handleLogin()
        
    }

    const findUserByEmail = async (email: string) => {
        
        const { data } = await api.get(`/user/${email}`, {headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("@Auth:token") as string)}`
        }})
        setUser(data)
    }

    const signOut = () => {
        window.location.reload()
        localStorage.removeItem("@Auth:token")
        setUser(null)
    }

  return {
    signIn,
    signOut,
    findUserByEmail
  }
}
