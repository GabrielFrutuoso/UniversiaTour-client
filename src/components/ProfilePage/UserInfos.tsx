import { Avatar, Button, Typography } from "@material-tailwind/react"
import { useContext } from "react"
import { appContext } from "../../context/AppContext"

export const UserInfos = ({ setOpen }: { setOpen: any }) => {

  const { user } = useContext(appContext)

  return (
    <div className="bg-white shadow-md">
        <div className="h-60">
            <img src="https://source.unsplash.com/1200x800/?backpacking" className="w-full h-full object-cover" />
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
