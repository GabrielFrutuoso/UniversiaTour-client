export const Banner = ({state, imageUrl}: {state:string, imageUrl: string}) => {
  return (
    <div className="flex justify-start items-end relative w-full h-96 after:block after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/0">
        <img src={imageUrl} className="absolute top-0 left-0 w-full h-full object-cover" alt="" />
        <h1 className="z-30 text-white text-6xl m-4">{state}</h1>
    </div>
  )
}
