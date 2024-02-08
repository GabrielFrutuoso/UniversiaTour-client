import DestinyCard from "./DestinyCard"
import { SkelletonDestiny } from "./Skelleton.Destiny"

export const MainContent = () => {
  return (
    <main className="min-h-screen">
      <h1 className="text-center text-6xl my-16">Destinos</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 max-w-screen-xl mx-auto">
        <DestinyCard />
        <DestinyCard />
        <DestinyCard />
        <DestinyCard />
        <SkelletonDestiny />
        <SkelletonDestiny />
        <SkelletonDestiny />
        <SkelletonDestiny />
      </div>
    </main>
  )
}
