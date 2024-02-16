import { Typography } from "@material-tailwind/react"
import { useContext } from "react"
import { appContext } from "../../context/AppContext"

export const UserBio = () => {

  const { user } = useContext(appContext)

  console.log(user);
  


  return (
    <div className="bg-white shadow-md p-4">
        <Typography placeholder={"logo"} variant="h3">BIO</Typography>
        <p className="text-gray-700">{user?.bio}</p>
    </div>
  )
}
