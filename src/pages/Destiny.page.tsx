import { useCallback } from "react"
import { Banner } from "../components/DestinyPage/Banner"
import { Infos } from "../components/DestinyPage/Infos"
import { api } from "../api/UniversiaApi"
import { useQuery } from "@tanstack/react-query"
import { Destiny } from "../types/Destiny"
import { TouristicsSection } from "../components/DestinyPage/Touristics.section"
import { Touristic } from "../types/Touristic"
import { Footer } from "../components/Footer"
import { useNavigate } from "react-router-dom"

export const DestinyPage = () => {

  const urlSearch = new URLSearchParams(window.location.search)
  const id = urlSearch.get("id")
  const navigate = useNavigate()

  const getTouristics = useCallback(async () => {
    const res = await api.get(`/destiny/${id}`)
    return res.data
  }, [])

  const { data, isLoading, isError } = useQuery({
    queryKey: ["touristic"],
    queryFn: getTouristics
  })

  if (isError) {
    navigate("/error")
  }

  return (
    <>
    <Banner state={data?.state} image_url={data?.image_url} />
    <Infos  destiny={data as Destiny} isLoading={isLoading as Boolean}/>
    {data?.touristics && data?.touristics.map((touristic: Touristic) => (
      <TouristicsSection key={touristic.id} touristicId={touristic.id} />
    ))}
    <Footer />
    </>
    
  )
}
