import { Avatar, Button } from "@material-tailwind/react"
import { useContext } from "react";
import { BsBackpack2Fill } from "react-icons/bs"
import { TfiMenu } from "react-icons/tfi"
import { appContext } from "../context/AppContext";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const { user } = useContext(appContext)
  const { openDrawer } = useContext(appContext)
  const { signOut } = useAuth()

  return (
    <>
    <header className="flex justify-between items-center bg-white dark:bg-gray-950 w-full shadow-md p-5 z-40 fixed top-0 left-0">
      <div className="flex items-center gap-2">
        <span className="text-3xl text-black"><BsBackpack2Fill /></span>
        <h1 className="text-3xl text-black">UniversiaTour</h1>
      </div>

      <div className="items-center gap-10 hidden md:flex">
        <ul className="flex gap-5">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>    
        {user ? 
        <div className="flex gap-2">
          <Avatar placeholder={"user avatar"} src={user.avatar} size="md" />
          <Button placeholder={"Logout"} ripple={false} className="bg-transparent shadow-none" onClick={signOut}>
            <BiLogOut size={20} color="red" />
          </Button>
        </div> : 
        <Link to="/login">
          <Button placeholder={"Login"} ripple={false}>Login</Button>
        </Link>
        }
        
      </div>

      <Button placeholder={"Entrar"} ripple={false} color='white' type='submit' onClick={openDrawer} className="md:hidden">
        <TfiMenu size={20} />
      </Button>
    </header>    
    </>

  )
}
