
export const TouristicsSkelleton = ({alternate}: {alternate: string}) => {
  return (
    <>
    <div className="p-5 flex flex-col gap-4 items-center">
        <div className="animate-pulse bg-gray-400 rounded-md h-6 w-56"></div>
        <div className="animate-pulse bg-gray-400 rounded-md h-4 w-72"></div>
    </div>  

    <div className={`flex flex-wrap justify-evenly items-center w-full ${alternate} gap-4`}>
      <div className="animate-pulse bg-gray-400 rounded-md w-80 h-80 md:w-[450px] md:h-[400px]"></div>
      <div className="animate-pulse bg-gray-400 rounded-md w-80 h-80 md:w-[800px] md:h-[400px]"></div>
    </div>  
    </>

  )
}
