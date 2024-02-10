import { QueryClientProvider } from "@tanstack/react-query"
import { MainPage } from "./pages/Main.page"
import { queryClient } from "./api/QueryClient"
import { DestinyPage } from "./pages/Destiny.page"

function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <DestinyPage />
    </QueryClientProvider>
    </>
  )
}

export default App
