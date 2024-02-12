import { useCallback } from "react"
import { Banner } from "../components/DestinyPage/Banner"
import { Infos } from "../components/DestinyPage/Infos"
import { api } from "../api/UniversiaApi"
import { useQuery } from "@tanstack/react-query"
import { Destiny } from "../types/Destiny"
import { TouristicsSection } from "../components/DestinyPage/Touristics.section"
import { Touristic } from "../types/Touristic"
import { Footer } from "../components/Footer"

export const DestinyPage = () => {

  const getTouristics = useCallback(async () => {
    const res = await api.get("/destiny/2")
    return res.data
  }, [])

  const { data, isLoading } = useQuery({
    queryKey: ["touristic"],
    queryFn: getTouristics
  })

  return (
    <>
    <Banner state={data?.state} imageUrl={data?.imageUrl} />
    <Infos  destiny={data as Destiny} isLoading={isLoading as Boolean}/>
    {data?.touristics && data?.touristics.map((touristic: Touristic) => (
      <TouristicsSection key={touristic.id} touristicId={touristic.id} />
    ))}
    <Footer />
    </>
    
  )
}
