import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Option, Select, Textarea, Typography } from "@material-tailwind/react"
import { useState } from "react";
import ActivityCard from "./ActivityCard";


const ActivietiesDialog = ({handleOpen, open}: {handleOpen: () => void, open: boolean}) => {

    return (
        <Dialog open={open} handler={handleOpen} placeholder={"logo"}>
            <DialogHeader placeholder={"logo"}>
                <Typography placeholder={"logo"} variant="h3">Criar novo Itinerário</Typography>
            </DialogHeader>
            <DialogBody placeholder={"logo"}>
                <form className="flex flex-col gap-4">
                   <input type="hidden" name="id" />
                    <Select name="touristicId" label="escolha um ponto turístico" placeholder={"escolha um ponto turístico"}>
                        <Option value="option 1">option 1</Option>
                    </Select>
                    <Textarea name="description" label="Descricão" />
                </form>
            </DialogBody>
            <DialogFooter className="flex gap-2" placeholder={"logo"}>
                <Button color="green" placeholder={"logo"}>Salvar</Button>
                <Button color="red" onClick={handleOpen} placeholder={"logo"}>Cancelar</Button>               
            </DialogFooter>
        </Dialog>
    )
}



export const UserActivities = () => {

    const [open, setOpen] = useState<boolean>(false);
 
    const handleOpen = () => setOpen(!open);

  return (
    <>
        <ActivietiesDialog handleOpen={handleOpen} open={open} />
        <div className="bg-white shadow-md p-4">
        <Typography placeholder={"logo"} variant="h3" className="text-center">
            Itinerários
            <Button color="white" onClick={handleOpen} className='text-2xl py-0 shadow-none'>+</Button>
        </Typography>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
        </div>
    </div>
    </>

  )
}
