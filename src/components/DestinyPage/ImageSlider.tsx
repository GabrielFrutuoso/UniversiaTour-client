import { Carousel } from '@material-tailwind/react'
import { Image } from '../../types/Image'
import { IoIosArrowBack } from 'react-icons/io'

export const ImageSlider = ({images}: {images: Image[]}) => {

  const Arrow = ({ action, side }: { action: () => void, side: string }) => {
    if (side === 'left') {
     return (
      <button onClick={action} className='flex items-center justify-center absolute top-0 left-0 h-full p-3 arrow group'>
        <IoIosArrowBack size={40} className='text-white opacity-70 group-hover:opacity-100 transition-all duration-300' />
      </button>
     ) 
    } else {
      return(
      <button onClick={action} className='flex items-center justify-center absolute top-0 right-0 h-full p-3 arrow rotate-180 group'>
      <IoIosArrowBack size={40} className='text-white opacity-70 group-hover:opacity-100 transition-all duration-300' />
      </button>
      )
    }
  }

  return (
    <Carousel 
    className='w-80 h-80 md:h-[400px] md:w-[800px]'
    placeholder={true}
    prevArrow={({ handlePrev }) => (
      <Arrow action={handlePrev} side="left" />
    )}

    nextArrow={({ handleNext }) => (
      <Arrow action={handleNext} side='right' />
    )}

    navigation={({ setActiveIndex, activeIndex, length }) => (
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {new Array(length).fill("").map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
              activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    )}>
        {images?.map((image) => (
            <img
            key={image?.id}
            src={image?.url}
            className="w-full h-full object-cover"
            />
        ))}
    </Carousel>
  )
}
