import { QueryClientProvider } from "@tanstack/react-query"
import { MainPage } from "./pages/Main.page"
import { queryClient } from "./api/QueryClient"
import { DestinyPage } from "./pages/Destiny.page"
import { ThemeProvider } from "@material-tailwind/react"

function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <DestinyPage />
      </ThemeProvider>
    </QueryClientProvider>
    </>
  )
}

export default App
