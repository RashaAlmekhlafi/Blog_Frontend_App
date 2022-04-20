
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import slider1 from '../slider1.png'
import slider2 from '../slider2.jpg'

 const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

  
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><img src={slider1} alt="..." /></div>

        <div className="embla__slide"><img src={slider2} alt="..." /></div>
      </div>
    </div>
  )
}
export default EmblaCarousel