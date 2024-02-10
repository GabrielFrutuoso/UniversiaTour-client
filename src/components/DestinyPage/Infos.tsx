import { useState } from "react";

export const Infos = () => {

    const [mapHeight, setMapHeight] = useState("550px");
    const [mapWidth, setMapWidth] = useState("650px");
    const [isVisible, setIsVisible] = useState<"" | "hidden">("");
    const resizeMap = () => {
        if (isVisible === "hidden") {
            setIsVisible("");
            setMapHeight("550px");
            setMapWidth("650px");
        } else {
            setIsVisible("hidden");
            setMapHeight("90vh");
            setMapWidth("95vw");
        }
    }

  return (
    <section className="p-7 flex justify-around items-center flex-row w-full">
        <div className={`${isVisible}`}>
            <p className="max-w-md ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure nam placeat, itaque officia doloribus accusamus, cum totam natus quis id facere voluptatibus magni vero suscipit maiores inventore, eaque aut dicta! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure nam placeat, itaque officia doloribus accusamus, cum totam natus quis id facere voluptatibus magni vero suscipit maiores inventore, eaque aut dicta!</p>
        </div> 
        <div className={`h-[${mapHeight}] w-[${mapWidth}] bg-slate-500 transition-all duration-500`}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940804.1718932282!2d-44.105434308878834!3d-22.912769753886522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1707586824267!5m2!1spt-BR!2sbr" frameBorder="0" className="w-full h-full shadow-lg transition-all duration-500"></iframe>
            <button onClick={resizeMap}>Ver Mapa</button>
        </div>
    </section>
  )
}
