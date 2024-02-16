import { Avatar, Typography } from "@material-tailwind/react"
import { useContext } from "react"
import { appContext } from "../../context/AppContext"

export const UserInfos = () => {

  const { user } = useContext(appContext)

  return (
    <div className="bg-white shadow-md">
        <div className="h-60">
            <img src="https://source.unsplash.com/random" className="w-full h-full object-cover" />
        </div>
        <div className="p-4 flex items-center gap-2">
            <Avatar placeholder={true} src={user?.avatar} size="xxl" />
            <div>
                <Typography placeholder={"logo"} variant="h4">{user?.username}</Typography>
                <Typography placeholder={"logo"} variant="h6" className="text-gray-700">{user?.email}</Typography>
            </div>
        </div>
    </div>
  )
}
