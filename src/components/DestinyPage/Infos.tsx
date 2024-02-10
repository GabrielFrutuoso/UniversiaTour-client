import { IoResize } from "react-icons/io5";
import  useResizeMap  from "../../hooks/useResizeMap";
export const Infos = () => {

    const { mapHeight, mapWidth, isVisible, toggleSizeMap} = useResizeMap();

  return (
    <section className="p-7 flex justify-around items-center flex-col md:flex-row w-full">
        <div className={`${isVisible}`}>
            <p className="max-w-md p-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure nam placeat, itaque officia doloribus accusamus, cum totam natus quis id facere voluptatibus magni vero suscipit maiores inventore, eaque aut dicta! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure nam placeat, itaque officia doloribus accusamus, cum totam natus quis id facere voluptatibus magni vero suscipit maiores inventore, eaque aut dicta!</p>
        </div> 
        <div className="transition-all duration-500 relative w-80 h-80 md:w-[650px] md:h-[400px]" style={{ height: mapHeight, width: mapWidth }}>
            <button className="absolute top-2 right-2 bg-white p-0.5 text-2xl shadow-md cursor-pointer" onClick={toggleSizeMap}><IoResize /></button>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940804.1718932282!2d-44.105434308878834!3d-22.912769753886522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1707586824267!5m2!1spt-BR!2sbr" frameBorder="0" className="w-full h-full shadow-lg transition-all duration-500"></iframe>
        </div>
        
    </section>
  )
}
