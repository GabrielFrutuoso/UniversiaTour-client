import { QueryClientProvider } from "@tanstack/react-query"
import { MainPage } from "./pages/Main.page"
import { queryClient } from "./api/QueryClient"

function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
    </>
  )
}

export default App
