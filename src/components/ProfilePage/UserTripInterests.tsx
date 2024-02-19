import { Typography } from "@material-tailwind/react"
import { useContext } from "react"
import { appContext } from "../../context/AppContext"

const UserTripInterests = () => {

  const { user } = useContext(appContext)


  return (
    <div className="bg-white shadow-md p-4">
        <Typography placeholder={"logo"} variant="h3">Interesses de viagens</Typography>
        <p className="text-gray-700">{user?.tripInterests}</p>
    </div>
  )
}

export default UserTripInterests