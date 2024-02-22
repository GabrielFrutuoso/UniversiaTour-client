import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react'
import { useContext } from 'react'
import { appContext } from '../context/AppContext'
import { RiAlertFill } from 'react-icons/ri'

export const AlertDialog = () => {

    const { alertText, openAlert, setOpenAlert } = useContext(appContext)

  return (
    <Dialog placeholder={"dialog body"} open={openAlert} handler={() => setOpenAlert(!openAlert)}>
        <DialogHeader placeholder={"dialog header"} className='flex items-start'>
        <RiAlertFill color='red' size={30} />
            <Typography placeholder={"logo"} variant="h4">
                Erro ao fazer o Login!
            </Typography>
        </DialogHeader>
        <DialogBody placeholder={"dialog body"}>{alertText}</DialogBody>
        <DialogFooter placeholder={"dialog footer"}>
            <Button placeholder={"close button"} variant="text" color="red" onClick={() => setOpenAlert(!openAlert)}>Fechar</Button>
        </DialogFooter>
    </Dialog>
  )
}
