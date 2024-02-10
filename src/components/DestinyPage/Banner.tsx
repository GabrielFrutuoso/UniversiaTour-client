export const Banner = () => {
  return (
    <div className="flex justify-start items-end relative w-full h-96 after:block after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/40">
        <img src="https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744_1280.jpg" className="absolute top-0 left-0 w-full h-full object-cover blur-[1px]" alt="" />

        <h1 className="z-30 text-white text-6xl">Rio de Janeiro</h1>
    </div>
  )
}
