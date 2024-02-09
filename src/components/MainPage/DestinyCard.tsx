import { Destiny } from "../../types/Destiny"

const DestinyCard = ({ destiny }: { destiny: Destiny}) => {
  return (
    <div className="group relative h-36 w-36 md:h-72 md:w-72 rounded-md overflow-hidden cursor-pointer after:w-full after:h-full after:bg-black/30 after:top-0 after:left-0 after:absolute after:hover:bg-black/50 after:transition-all after:duration-500 after:delay-100">
        <img src={destiny?.imageUrl} className="absolute top-0 left-0 w-full h-full group-hover:scale-110 transition-all duration-500 delay-100" />
        <h1 className="text-lg md:text-2xl text-white font-semibold absolute bottom-0 left-0 w-full h-full flex justify-start items-end p-1 z-30">{destiny?.state}</h1>
    </div>
  )
}

export default DestinyCard