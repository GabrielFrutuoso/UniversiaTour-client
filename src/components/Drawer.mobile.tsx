import { Avatar, Button, Drawer, List, ListItem, Typography } from '@material-tailwind/react'
import { useContext } from 'react'
import { BsBackpack2Fill } from 'react-icons/bs'
import { appContext } from '../context/AppContext'
import { useAuth } from '../hooks/useAuth'
import { BiLogOut } from 'react-icons/bi'

export const DrawerMobile = () => {

  const {open , closeDrawer, user} = useContext(appContext)
  const { signOut } = useAuth()

  return (
    <Drawer open={open} onClose={closeDrawer} placeholder={undefined} placement="left" className='p-2 flex flex-col gap-2'>
      <div className="flex items-center w-full gap-2">
        <span className="text-3xl text-black"><BsBackpack2Fill /></span>
        <h1 className="text-3xl text-black">UniversiaTour</h1>
      </div>

      <List className='justify-self-end' placeholder={"List"}>
        <a href="#" className="text-initial">
          <ListItem placeholder={"list item"}>Home</ListItem>
        </a>
        <a href="#" className="text-initial">
          <ListItem placeholder={"list item"}>Trash</ListItem>
        </a>
        <a href="#" className="text-initial">
          <ListItem placeholder={"list item"}>Settings</ListItem>
        </a>
      </List>

      <div className='flex justify-between'>
        <div className='flex items-center gap-1'>
          {user ? 
          <>
          <Avatar placeholder={"user avatar"} src={user?.avatar} size="md" />
          <Typography placeholder={"user name"}>{user?.username}</Typography>
          <Button placeholder={"Entrar"} ripple={false} color='white' type='submit' onClick={() =>{closeDrawer(), signOut()}} className='shadow-none hover:shadow-none'><BiLogOut size={20} color="red" /></Button>          
          </>
          :
          <a href="/login">
            <Button placeholder={"login"} ripple={false} type='submit' className='shadow-none hover:shadow-none'>Login</Button>
          </a>
          }
          
        </div>
        

      </div>
    </Drawer>
  )
  
}
