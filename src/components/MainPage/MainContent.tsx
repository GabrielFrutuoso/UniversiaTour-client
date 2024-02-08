import DestinyCard from "./DestinyCard"

export const MainContent = () => {
  return (
    <main className="min-h-screen">
      <h1 className="text-center text-6xl my-16">Destinos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-9/12 mx-auto">
        <DestinyCard />
        <DestinyCard />
        <DestinyCard />
        <DestinyCard />
        <DestinyCard />
        <DestinyCard />
        <DestinyCard />
        <DestinyCard />
        <DestinyCard />
        <DestinyCard />
      </div>
    </main>
  )
}
