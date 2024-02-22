import { createContext, useState } from 'react'
import { User } from '../types/User';

const appContext = createContext<any>({});

 const AppContext = ({ children }: any) => {
    const [open, setOpen] = useState<boolean>(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const [openNav, setOpenNav] = useState<boolean>(true);

    const [openAlert, setOpenAlert] = useState<boolean>(false);
    const [alertText, setAlertText] = useState<string>("");

    const [user, setUser] = useState<User>();
  

  return (
    <appContext.Provider value={{ open, openDrawer, closeDrawer, user, setUser, openAlert, setOpenAlert, alertText, setAlertText, openNav, setOpenNav }}>
        {children}
    </appContext.Provider>
  )
}

export { AppContext, appContext }