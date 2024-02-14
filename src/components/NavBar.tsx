import { BsBackpack2Fill } from "react-icons/bs"

export const NavBar = () => {
  return (
    <header className="bg-white/75 dark:bg-gray-950 w-full shadow-md p-5 z-40 fixed top-0 left-0">
      <div className="flex items-center gap-2">
        <span className="text-3xl text-black"><BsBackpack2Fill /></span>
        <h1 className="text-3xl text-black">UniversiaTour</h1>
      </div>
    </header>
  )
}
