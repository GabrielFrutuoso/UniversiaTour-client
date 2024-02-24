import { Avatar, Button, Navbar, Typography } from '@material-tailwind/react'
import { useContext } from 'react'
import { appContext } from '../context/AppContext'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { BsBackpack2Fill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'
import { TfiMenu } from 'react-icons/tfi'

export const Nav = () => {

    const { openDrawer, openNav, user } = useContext(appContext)
    const { signOut } = useAuth()
    const navigate = useNavigate()

  return (
    <Navbar placeholder={true} fullWidth className='flex justify-between items-center sticky top-0 z-10 mx-auto px-6 py-3' style={{display: openNav ? "flex" : "none"}}>
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
        <i className="text-3xl text-black"><BsBackpack2Fill /></i>
        <Typography placeholder={'logo'} className="text-3xl text-black">UniversiaTour</Typography>
      </div>

        
<nav className='items-center gap-10 hidden md:flex'>
         <ul className='flex gap-5 text-black'>  
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>          
        </ul> 

        {user ? 
        <>
        <div className="flex cursor-pointer">
          <Avatar placeholder={"user avatar"} src={user.avatar} size="md" onClick={() => navigate("/profile")} />
          <Button placeholder={"Logout"} ripple={false} className="bg-transparent shadow-none hover:shadow-none" onClick={signOut}>
            <BiLogOut size={20} color="red" />
          </Button>
        </div>    
        </>
        : 
        <Link to="/login">
          <Button placeholder={"Login"} ripple={false} className="hover:shadow-none">Login</Button>
        </Link>
        }
        </nav>
        <Button placeholder={"Entrar"} ripple={false} type='submit' variant='text' onClick={openDrawer} className="md:hidden shadow-none">
        <TfiMenu size={20} />
      </Button>
    </Navbar> 
  )
}
