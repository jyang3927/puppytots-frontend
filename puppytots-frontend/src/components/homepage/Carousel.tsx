// src/Carousel.js
import React, { useState } from 'react';
import '../../styles/carousel.css'
interface PictureCarousel{
    images:string[];
}

const Carousel = ({images}: PictureCarousel) => {


  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const nextSlidePreview = (indexCurrent: number) => {
    let previewIndex: number; 
    indexCurrent === images.length - 1 ? previewIndex = 0 : previewIndex = indexCurrent + 1; 
    return previewIndex;
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const prevSlidePreview = (indexCurrent: number) => {
    let previewIndex:number; 

    indexCurrent === 0 ? previewIndex = images.length - 1 : previewIndex = indexCurrent - 1; 

    return previewIndex;
  };
  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <img
        src={images[prevSlidePreview(activeIndex)]}
        alt={`Slide ${activeIndex}`}
        className="carousel__preview"
      />
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"
      />
      <img
        src={images[nextSlidePreview(activeIndex)]}
        alt={`Slide ${activeIndex}`}
        className="carousel__preview"
      />
      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
    </div>
  );
};
export default Carousel;

