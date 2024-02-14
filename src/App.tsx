import { QueryClientProvider } from "@tanstack/react-query"
import { MainPage } from "./pages/Main.page"
import { queryClient } from "./api/QueryClient"
import { DestinyPage } from "./pages/Destiny.page"
import { ThemeProvider } from "@material-tailwind/react"
import { Login } from "./pages/Login.page"
import { RegisterPage } from "./pages/Register.page"
import { ProfilePage } from "./pages/Profile.page"

function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ProfilePage/>
      </ThemeProvider>
    </QueryClientProvider>
    </>
  )
}

export default App
