import { Avatar, Button, Typography } from "@material-tailwind/react"
import { useContext } from "react"
import { appContext } from "../../context/AppContext"

export const UserInfos = ({ setOpen }: { setOpen: any }) => {

  const { user } = useContext(appContext)

  return (
    <div className="bg-white shadow-md">
        <div className="h-60">
            <img src="https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover" />
        </div>
        <div className="p-4 flex items-center gap-2">
            <Avatar placeholder={true} src={user?.avatar} size="xxl" />
            <div>
                <Typography placeholder={"logo"} variant="h4">{user?.username}</Typography>
                <Button placeholder={"open modal"} color="blue" ripple={false} onClick={() => setOpen(true)} className='p-1 shadow-none'>editar perfil</Button>
            </div>
        </div>
    </div>
  )
}
