import { Button, Typography } from "@material-tailwind/react"
import { useContext, useState } from "react";
import ActivityCard from "./ActivityCard";
import { appContext } from "../../context/AppContext";

import { Activity } from "../../types/Activity";
import { ActivietiesDialog } from "./ActivietiesDialog";
import ActivitiesEditDialog from "./ActivitiesEditDialog";


export const UserActivities = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [openEdit, setOpenEdit] = useState<boolean>(false);
    const [activity, setActivity] = useState<Activity| null>();
    const { user } = useContext(appContext)
    const handleOpen = () => setOpen(!open);

    console.log(user);
    

  return (
    <>
        <ActivietiesDialog handleOpen={handleOpen} open={open} />
        <ActivitiesEditDialog handleOpen={() => setOpenEdit(!openEdit)} open={openEdit} activity={activity as Activity} />
        <div className="bg-white shadow-md p-4">
        <Typography placeholder={"logo"} variant="h3" className="text-center">
            Itinerários
            <Button placeholder={"open modal"} color="white" onClick={handleOpen} className='text-2xl py-0 shadow-none'>+</Button>
        </Typography>
        
        {user?.activities?.length === 0 && (
            <Typography placeholder={"logo"} variant="h3" className="text-center w-full h-64 bg-gray-100 flex items-center justify-center">
                Aqui vão os seus itinerários
            </Typography>
        )}
        {user?.activities?.map((activity: Activity) => (
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4"> 
                <ActivityCard id={activity?.id as number}  key={activity?.id} setOpenEdit={setOpenEdit} setActivity={setActivity} />
            </div>
        ))}
    </div>
    </>

  )
}
