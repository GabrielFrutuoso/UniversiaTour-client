import { useContext, useEffect } from "react"
import { Footer } from "../components/Footer"
import { Hero } from "../components/MainPage/Hero"
import { MainContent } from "../components/MainPage/MainContent"
import { TripTips } from "../components/MainPage/TripTips"
import { appContext } from "../context/AppContext"


export const MainPage = () => {

  const { setOpenNav } = useContext(appContext)

  useEffect(() => {
    setOpenNav(true)
  }, [])

  return (
    <>
    <Hero />
    <MainContent />
    <TripTips />
    <Footer />
    </>
    

  )
}
