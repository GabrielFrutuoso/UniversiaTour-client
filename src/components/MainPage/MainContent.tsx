import { useCallback } from "react"
import { api } from "../../api/UniversiaApi"
import DestinyCard from "./DestinyCard"
import { Destiny } from "../../types/Destiny"
import { useQuery } from "@tanstack/react-query"
import { SkelletonsPlaceholder } from "./SkelletonsPlaceholder"

export const MainContent = () => {

  

  const getDestinies = useCallback(async () => {
    const res = await api.get("/destiny")
    return res.data
  }, [])

  const { data, isLoading } = useQuery({
    queryKey: ["destinies"],
    queryFn: getDestinies
  })

console.log(data);

  

  return (
    <main className="min-h-screen bg-white">
      <h1 className="text-center text-6xl my-8">Destinos</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-4 max-w-screen-2xl mx-auto">
          {isLoading ? <SkelletonsPlaceholder /> : data?.map((destiny: Destiny) => (
            <DestinyCard destiny={destiny} key={destiny.id}  />
          ))}
      </div>
    </main>
  )
}
