import { Footer } from "../components/Footer"
import { Hero } from "../components/MainPage/Hero"
import { MainContent } from "../components/MainPage/MainContent"
import { TripTips } from "../components/MainPage/TripTips"
import { NavBar } from "../components/NavBar"

export const MainPage = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <MainContent />
    <TripTips />
    <Footer />
    </>
    

  )
}
