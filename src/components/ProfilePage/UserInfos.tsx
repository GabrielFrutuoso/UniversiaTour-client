import { Avatar, Typography } from "@material-tailwind/react"

export const UserInfos = () => {
  return (
    <div className="bg-white shadow-md">
        <div className="h-60">
            <img src="https://source.unsplash.com/random" className="w-full h-full object-cover" />
        </div>
        <div className="p-4 flex items-center gap-2">
            <Avatar placeholder={true} src="https://i.pravatar.cc/300?u=brielz" size="xxl" />
            <div>
                <Typography placeholder={"logo"} variant="h4">Briel</Typography>
                <Typography placeholder={"logo"} variant="h6" className="text-gray-700">11/08/1990</Typography>
            </div>
        </div>
    </div>
  )
}
