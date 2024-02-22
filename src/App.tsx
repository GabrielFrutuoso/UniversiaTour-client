import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./api/QueryClient"
import { ThemeProvider } from "@material-tailwind/react"
import { AppContext } from "./context/AppContext"
import { DrawerMobile } from "./components/Drawer.mobile"
import { AppRoutes } from "./routes/AppRoutes"
import { BrowserRouter } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { AlertDialog } from "./components/AlertDialog"

function App() {


  return (
    <AppContext>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
        <DrawerMobile/>
        <NavBar />
        <AlertDialog />
        <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
    </AppContext>
  )
}

export default App
