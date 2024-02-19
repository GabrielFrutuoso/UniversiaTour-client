import { Button, Dialog, DialogBody, DialogHeader, Input, Textarea } from '@material-tailwind/react'
import { api } from '../../api/UniversiaApi'
import { useContext } from 'react'
import { appContext } from '../../context/AppContext'

export const ProfileDialog = ({handleOpen, open}: {handleOpen: () => void, open: boolean}) => {


    const { user } = useContext(appContext)
    const updateProfile = async (e: any) => {
        e.preventDefault()

        const profile = {
            username: e.target[0].value,
            bio: e.target[1].value,
            tripInterests: e.target[2].value
        }

        await api.patch(`/user/${user?.id}`,JSON.stringify(profile), {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("@Auth:token") as string)}`
            }
        }) 
        window.location.reload()       
    }

  return (
    <Dialog placeholder={"dialog body"} open={open} handler={handleOpen}>
      <DialogHeader placeholder={"dialog header"}>Editar Perfil</DialogHeader>
      <DialogBody placeholder={"dialog body"}>
        <form className='flex flex-col gap-4' onSubmit={updateProfile}>
            <Input placeholder="Nome de perfil" label="Nome de perfil" name='username' defaultValue={user?.username} crossOrigin={"user"} autoComplete='off' />
            <Textarea placeholder="bio" label="bio" name='bio' defaultValue={user?.bio} />
            <Textarea placeholder="Interesses de viagem" label="Interesses de viagem" name='tripInterests' defaultValue={user?.tripInterests} />

            <div className="flex justify-end gap-2">
                <Button color="green" type="submit" placeholder={"logo"}>Salvar</Button> 
                <Button color="red" onClick={handleOpen} placeholder={"logo"}>Cancelar</Button> 
            </div>  
        </form>
      </DialogBody>
    </Dialog>
  )
}
