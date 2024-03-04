import { Button, Dialog, DialogBody, DialogHeader, Option, Select, Textarea } from '@material-tailwind/react'
import { Activity } from '../../types/Activity'
import { useCallback, useState} from 'react'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../api/UniversiaApi'
import { Touristic } from '../../types/Touristic'

const ActivitiesEditDialog = ({handleOpen, open, activity}: {handleOpen: () => void, open: boolean, activity: Activity}) => {

  const [touristicId, setTouristicId] = useState<number | undefined>()


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
    const editedActivity = {
      touristic_id: touristicId,
      description: e.target?.[1].value
    }

    await api.patch(`activities/${activity.id}`, editedActivity, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("@Auth:token") as string)}`
      }
    })

    window.location.reload()
  }

  return (
    <Dialog placeholder={"dialog body"} open={open} handler={handleOpen}>
      <DialogHeader placeholder={"dialog header"}>Editar Atividades</DialogHeader>
      <DialogBody placeholder={"dialog body"}>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <Select placeholder={"Destino"} label="Destino" name='touristicId' defaultValue={activity?.id} onSubmit={handleSubmit}>
          {data?.map((touristic: Touristic) => (
            <Option key={touristic.id} defaultValue={touristic.id} className='text-black' onClick={() => setTouristicId(touristic.id)}>{touristic.location} - <span className='text-gray-500'>{touristic.city}</span></Option>
          ))}
        </Select>
        <Textarea placeholder="Descrição" label="Descrição" name='description' defaultValue={activity?.description} />
        <div className="flex justify-end gap-2">
          <Button color="green" type="submit" placeholder={"logo"}>Salvar</Button> 
          <Button color="red" onClick={handleOpen} placeholder={"logo"}>Cancelar</Button> 
        </div>         
      </form>
      </DialogBody>
    </Dialog>
  )
}

export default ActivitiesEditDialog