import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"
import { UserActivities } from "../components/ProfilePage/UserActivities"
import { UserBio } from "../components/ProfilePage/UserBio"
import { UserInfos } from "../components/ProfilePage/UserInfos"
import UserTripInterests from "../components/ProfilePage/UserTripInterests"

export const ProfilePage = () => {
  return (
    <>
    <NavBar />
    <div className="w-full min-h-screen bg-gray-200 mt-20">
        <main className="flex flex-col gap-2 mx-auto max-w-screen-xl">
            <UserInfos />
            <UserBio />
            <UserTripInterests />
            <UserActivities />
        </main>
        <Footer />
    </div>
    </>
  )
}
