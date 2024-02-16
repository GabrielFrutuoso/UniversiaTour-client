import { createContext, useState } from 'react'
import { User } from '../types/User';

const appContext = createContext<any>({});

 const AppContext = ({ children }: any) => {
    const [open, setOpen] = useState<boolean>(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const [user, setUser] = useState<User>();
  

  return (
    <appContext.Provider value={{ open, openDrawer, closeDrawer, user, setUser }}>
        {children}
    </appContext.Provider>
  )
}

export { AppContext, appContext }