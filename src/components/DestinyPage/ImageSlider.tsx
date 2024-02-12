import { Carousel } from '@material-tailwind/react'
import { Image } from '../../types/Image'

export const ImageSlider = ({images}: {images: Image[]}) => {
  return (
    <Carousel 
    placeholder={true}
    className='w-80 h-80 md:h-[400px] md:w-[800px]'>
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
