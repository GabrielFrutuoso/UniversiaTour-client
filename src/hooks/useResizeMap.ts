import { useCallback, useState } from 'react'

const useResizeMap = () => {

    const [mapHeight, setMapHeight] = useState("");
    const [mapWidth, setMapWidth] = useState("");
    const [isVisible, setIsVisible] = useState<"" | "hidden">("");

    const toggleSizeMap = useCallback(() => {
        if (isVisible === "hidden") {
            setIsVisible("");
            setMapHeight("");
            setMapWidth("");
        } else {
            setIsVisible("hidden");
            setMapHeight("95vh");
            setMapWidth("95vw");
        }
    }, [isVisible])

    const toggleVisible = useCallback(() => {
        if (isVisible === "hidden") {
            setIsVisible("");
        } else {
            setIsVisible("hidden");
        }
    }, [isVisible])


    return { mapHeight, mapWidth, isVisible, toggleVisible, toggleSizeMap }
}

export default useResizeMap