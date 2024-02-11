import { IoResize } from "react-icons/io5";
import useResizeMap from "../../hooks/useResizeMap";
import { Carousel } from "@material-tailwind/react";

export const TouristicsSection = () => {

    const { mapHeight, mapWidth, isVisible, toggleSizeMap} = useResizeMap();

  return (
    <section className="min-h-screen p-5 flex flex-col items-center">
        <div className={`${isVisible} p-5 flex flex-col gap-4`}>
            <h1 className="text-center text-3xl">Cristo Redentor</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni perferendis iste accusantium omnis quia laudantium ipsum, dolor excepturi asperiores est nihil modi repellendus dolorum fugit esse quam eligendi facilis quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga eveniet repellat exercitationem.</p>
        </div>

        <div className="flex flex-wrap justify-evenly items-center w-full even:flex-row-reverse">
            <aside>
                <div className="transition-all duration-500 relative w-80 h-80 md:w-[450px] md:h-[400px]" style={{ height: mapHeight, width: mapWidth }}>
                    <button className="absolute top-2 right-2 bg-white p-0.5 text-2xl shadow-md cursor-pointer" onClick={toggleSizeMap}><IoResize /></button>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940804.1718932282!2d-44.105434308878834!3d-22.912769753886522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1707586824267!5m2!1spt-BR!2sbr" loading="lazy" frameBorder="0" className="w-full h-full shadow-lg transition-all duration-500"></iframe>
                </div>
            </aside>

            <aside className={`${isVisible}`}>
            <Carousel className=" h-80 w-80" placeholder="Loading...">
                <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
                </Carousel>
            </aside>
        </div>
    </section>
  )
}
