import React from 'react'
import img from "../../assets/images/bir.jpg";
import imgg from "../../assets/images/ikki.webp";
import baner from "../../assets/images/uch.webp";

import useEmblaCarousel from 'embla-carousel-react'

export function Carousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla h-[250px] img" ref={emblaRef}>
      <div className="embla__container h-full">
        <div className="embla__slide h-full">
  <img
                  className=" h-full "
                  src={img}
                  alt="foto"
                />
        </div>
        <div className="embla__slide h-full">
        <img
                  className=" h-full"
                  src={imgg}
                  alt="foto"
                />
        </div>
        <div className="embla__slide h-full">
        <img
                  className="h-full"
                  src={baner}
                  alt="foto"
                />
        </div>
      </div>
    </div>
  )
}
export default Carousel
