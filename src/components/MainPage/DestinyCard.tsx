import { useNavigate } from "react-router-dom"
import { Destiny } from "../../types/Destiny"

const DestinyCard = ({ destiny }: { destiny: Destiny}) => {

  const navigate = useNavigate()

  return (
    <div className="group relative h-24 w-36 md:h-64 md:w-64 rounded-md shadow-sm overflow-hidden cursor-pointer after:w-full after:h-full after:bg-black/20 after:top-0 after:left-0 after:absolute after:hover:bg-black/50 after:transition-all after:duration-500 after:delay-100"
    onClick={() => navigate(`/destiny?id=${destiny?.id}`)}
    >
        <img src={destiny?.image_url} className="absolute top-0 left-0 w-full h-full group-hover:scale-110 group-hover:blur-[1px] transition-all duration-500 delay-100" />
        <h1 className="text-lg md:text-2xl text-white font-semibold absolute bottom-0 left-0 w-full h-full flex justify-start items-end p-1 z-30">{destiny?.state}</h1>
    </div>
  )
}

export default DestinyCard