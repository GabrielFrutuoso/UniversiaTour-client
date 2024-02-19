import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Option, Select, Textarea, Typography } from "@material-tailwind/react"
import { useCallback, useContext, useState } from "react";
import ActivityCard from "./ActivityCard";
import { appContext } from "../../context/AppContext";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/UniversiaApi";
import { Touristic } from "../../types/Touristic";
import { Activity } from "../../types/Activity";


const ActivietiesDialog = ({handleOpen, open}: {handleOpen: () => void, open: boolean}) => {

    const { user } = useContext(appContext)
    const [touristicId, setTouristicId] = useState<number|undefined>()

    const getDestinies = useCallback(async () => {
        const res = await api.get("/touristics")
        return res.data
      }, [])
    
      const { data } = useQuery({
        queryKey: ["touristics"],
        queryFn: getDestinies
      })
    

      const handleSubmit = async (e: any) => {
        e.preventDefault();
        const activity = {
            userId: e.target?.[0].value,
            touristicId: touristicId,
            description: e.target?.[2].value
        }

        const { data } = await api.post("activities", activity)
        console.log(data);
        
      }
      

    return (
        <Dialog open={open} handler={handleOpen} placeholder={"logo"}>
            <DialogHeader placeholder={"logo"}>
                <Typography placeholder={"logo"} variant="h3">Criar novo Itinerário</Typography>
            </DialogHeader>
            <DialogBody placeholder={"logo"}>
                <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
                   <input type="hidden" name="userId" value={user?.id} />
                    <Select name="touristicId" label="escolha um ponto turístico" placeholder={"escolha um ponto turístico"}>
                        {data?.map((touristic: Touristic) => (
                            <Option defaultValue={touristic?.id} key={`${touristic?.id}`} className="text-black" onClick={() => setTouristicId(touristic?.id)}>
                                {touristic?.location} - <span className="text-gray-500">{touristic?.destinies?.state}</span>
                            </Option>
                        ))}
                        
                    </Select>
                    <Textarea name="description" label="Descricão" maxLength={200} />

                    <div className="flex justify-end gap-2">
                       <Button color="green" type="submit" placeholder={"logo"}>Salvar</Button> 
                       <Button color="red" onClick={handleOpen} placeholder={"logo"}>Cancelar</Button> 
                    </div>
                
                                        
                </form>
            </DialogBody>
        </Dialog>
    )
}



export const UserActivities = () => {

    const [open, setOpen] = useState<boolean>(false);
    const { user } = useContext(appContext)
    const handleOpen = () => setOpen(!open);

  return (
    <>
        <ActivietiesDialog handleOpen={handleOpen} open={open} />
        <div className="bg-white shadow-md p-4">
        <Typography placeholder={"logo"} variant="h3" className="text-center">
            Itinerários
            <Button placeholder={"open modal"} color="white" onClick={handleOpen} className='text-2xl py-0 shadow-none'>+</Button>
        </Typography>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {user?.activities?.map((activity: Activity) => (
                <ActivityCard id={activity?.id as number} />
            ))}
            
        </div>
    </div>
    </>

  )
}
