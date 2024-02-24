import { IoResize } from "react-icons/io5";
import useResizeMap from "../../hooks/useResizeMap";
import { ImageSlider } from "./ImageSlider";
import { useCallback } from "react";
import { api } from "../../api/UniversiaApi";
import { useQuery } from "@tanstack/react-query";
import { Image } from "../../types/Image";
import { TouristicsSkelleton } from "./TouristicsSkelleton";

export const TouristicsSection = ({ touristicId }: { touristicId: number}) => {

    const getTouristic = useCallback(async () => {
        const res = await api.get(`/touristics/${touristicId}`)
        return res.data
    }, [])

    const { data, isLoading} = useQuery({
        queryKey: [`touristic ${touristicId}`],
        queryFn: getTouristic
    })

    const { mapHeight, mapWidth, isVisible, toggleSizeMap} = useResizeMap();    
    const alternate = (touristicId % 2 == 0 ? "" : "flex-row-reverse")


  return (
    <section className="min-h-screen p-5 flex flex-col items-center">
        {isLoading ? <TouristicsSkelleton alternate={alternate} /> :
        <>
        <div className={`${isVisible} p-5 flex flex-col gap-4`}>
            <h1 className="text-center text-3xl">{data?.location}</h1>
            <p>{data?.description}</p>
        </div>

        <div className={`flex flex-wrap justify-evenly items-center w-full gap-4 ${alternate}`}>
            <aside>
                <div className="transition-all duration-500 relative w-80 h-80 md:w-[450px] md:h-[400px]" style={{ height: mapHeight, width: mapWidth }}>
                    <button className="absolute top-2 right-2 bg-white p-0.5 text-2xl shadow-md cursor-pointer" onClick={toggleSizeMap}><IoResize /></button>
                    <iframe src={data?.localMaps}  loading="lazy" frameBorder="0" className="w-full h-full shadow-lg transition-all duration-500"></iframe>
                </div>
            </aside>

            <aside className={`${isVisible}`}>
                <ImageSlider images={data?.images as Image[]} />
            </aside>
        </div>        
        </>
        }
    </section>
  )
}
