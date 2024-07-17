import { useState } from "react";
import './ImageSlider.scss'
import backIcon from "../../assets/arrow-ios-back.svg"

function ImageSlider({ slides }) {
    const [imageIndex, setImageIndex] = useState(0)
    console.log(slides);

    const sliderStyles = {
        width: '100%'
    }

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "100px",
        backgroundPosition: "bottom",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        objectFit: "contain",
        backgroundImage: `url(${slides[imageIndex].image_url})`
    }

    const handlePrev = () => {
        const isFirstSlide = imageIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : imageIndex - 1;
        setImageIndex(newIndex)
    }

    const handleNext = () => {
        const isLastSlide = imageIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : imageIndex + 1
        setImageIndex(newIndex)
    }

    const handleSlideChange = (index) => {
        setImageIndex(index)
    }


  return (
      <div className="image-slider">
          <div className="image-slider__left-arrow" onClick={handlePrev}><img src={backIcon} alt="back arrow"/></div>
          <div className="image-slider__right-arrow" onClick={handleNext}><img src={backIcon} alt="next arrow"/></div>
          <div className="image-slider__image" style={slideStyles}></div>
          <div className="image-slider__marker-container">
              {slides.map((slide, index) => (
                  <div key={index} className="image-slider__marker" onClick={() => handleSlideChange(index)}>•</div>
              ))}
          </div>
      </div>
  )
}

export default ImageSlider