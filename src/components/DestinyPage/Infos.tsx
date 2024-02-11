import { IoResize } from "react-icons/io5";
import  useResizeMap  from "../../hooks/useResizeMap";
import { Destiny } from "../../types/Destiny";
export const Infos = ({ destiny, isLoading }: { destiny: Destiny, isLoading: Boolean }) => {

    const { mapHeight, mapWidth, isVisible, toggleSizeMap} = useResizeMap();
    
  return (
    <section className="p-7 flex justify-around items-center flex-col md:flex-row w-full">
        <div className={`${isVisible} max-w-lg p-5 flex flex-col gap-4`}>
            <div>
                <h1 className="text-3xl font-bold">Sobre</h1>
                <p className="text-neutral-600 text-xl">{destiny?.description}</p>
            </div>
            <div>
                <h2 className="text-3xl font-bold">melhor época para visitar</h2>
                <p className="text-neutral-600 text-xl">{destiny?.bestSeason}</p>
            </div>
            <div>
                <h2 className="text-3xl font-bold">clima</h2>
                <p className="text-neutral-600 text-xl">{destiny?.weather}</p>
            </div>
        </div> 
        <div className="transition-all duration-500 relative w-80 h-80 md:w-[650px] md:h-[400px]" style={{ height: mapHeight, width: mapWidth }}>
            <button className="absolute top-2 right-2 bg-white p-0.5 text-2xl shadow-md cursor-pointer" onClick={toggleSizeMap}><IoResize /></button>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940804.1718932282!2d-44.105434308878834!3d-22.912769753886522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1707586824267!5m2!1spt-BR!2sbr" loading="lazy" frameBorder="0" className="w-full h-full shadow-lg transition-all duration-500"></iframe>
        </div>
        
    </section>
  )
}
