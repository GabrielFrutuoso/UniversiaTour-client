const DestinyCard = () => {
  return (
    <div className="group relative h-64 w-64 rounded-md overflow-hidden cursor-pointer after:w-full after:h-full after:bg-black/40 after:top-0 after:left-0 after:absolute after:hover:bg-black/60 after:transition-all after:duration-500 after:delay-100">
        <img src="https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744_1280.jpg" className="absolute top-0 left-0 w-full h-full group-hover:scale-110 transition-all duration-500 delay-100" />
        <h1 className="text-2xl text-white font-semibold absolute bottom-0 left-0 w-full h-full flex justify-start items-end p-1 z-40">Rio de janeiro</h1>
    </div>
  )
}

export default DestinyCard