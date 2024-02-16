import { QueryClientProvider, useQuery } from "@tanstack/react-query"
import { queryClient } from "./api/QueryClient"
import { ThemeProvider } from "@material-tailwind/react"
import { AppContext } from "./context/AppContext"
import { DrawerMobile } from "./components/Drawer.mobile"
import { AppRoutes } from "./routes/AppRoutes"
import { useAuth } from "./hooks/useAuth"

function App() {


  return (
    <AppContext>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <DrawerMobile/>
        <AppRoutes />
      </ThemeProvider>
    </QueryClientProvider>
    </AppContext>
  )
}

export default App
