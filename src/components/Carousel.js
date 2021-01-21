import React, { useEffect, useRef, useState } from "react";
import arrow from "../arrow.svg";
import { useWindowSize } from "../hooks";

const defaultOptions = {
  transition: 200,
  easing: "ease-in-out",
  gap: 20,
  numberOfItems: 3,
  infinite: false,
  tabletNumberOfItems: 2,
  mobileNumberOfItems: 1,
};

const Carousel = ({ config = defaultOptions, children }) => {
  const [slideWidth, setSlideWidth] = useState(null);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const carousel = useRef(null);
  const windowSize = useWindowSize();

  const options = Object.assign({}, defaultOptions, config);
  const {
    gap,
    easing,
    transition,
    numberOfItems,
    infinite,
    mobileNumberOfItems,
    tabletNumberOfItems,
  } = options;

  const [numberOfDisplayedItems, setDisplayedItems] = useState(numberOfItems);

  useEffect(() => {
    const carouselParent = carousel.current;
    setWrapperWidth(carouselParent.getBoundingClientRect().width);
    setSlideWidth(
      (wrapperWidth - gap * (numberOfDisplayedItems - 1)) /
        numberOfDisplayedItems
    );
  }, [slideWidth, windowSize.width]);

  // Reset slider position
  useEffect(() => {
    if (sliderPosition < slideWidth) {
      setSliderPosition(0);
    }
  }, [sliderPosition]);

  useEffect(() => {
    setSliderPosition(0);
  }, [windowSize.width]);

  useEffect(() => {
    if (windowSize.width < 1024 && windowSize.width > 768) {
      return setDisplayedItems(tabletNumberOfItems);
    }
    if (windowSize.width < 768) {
      return setDisplayedItems(mobileNumberOfItems);
    }
    return setDisplayedItems(numberOfItems);
  }, [windowSize.width]);

  const moveToNextSlide = () => {
    if (
      sliderPosition <=
      (children.length - numberOfDisplayedItems) * slideWidth
    ) {
      setSliderPosition((prev) => prev + slideWidth + gap);
    } else if (infinite) {
      setSliderPosition(0);
    }
  };

  const moveToPrevSlide = () => {
    if (sliderPosition > 0) {
      setSliderPosition((prev) => Math.round(prev - slideWidth - gap));
    } else if (infinite) {
      setSliderPosition(
        (children.length - numberOfDisplayedItems) * slideWidth +
          gap * numberOfDisplayedItems
      );
    }
  };

  const wrapperStyles = {
    transform: `translateX(-${sliderPosition}px)`,
    transition: `${transition / 1000}s ${easing}`,
    gridAutoColumns: `${slideWidth}px `,
    gap: `${gap / 10}rem`,
  };

  return (
    <div className="carousel">
      <button
        onClick={moveToPrevSlide}
        className="carousel__arrow carousel__arrow--left"
      >
        <img src={arrow} className="carousel__arrow-icon" alt="" />
      </button>
      <div className="carousel__container">
        <div ref={carousel} style={wrapperStyles} className="carousel__wrapper">
          {children}
        </div>
      </div>
      <button
        onClick={moveToNextSlide}
        className="carousel__arrow carousel__arrow--right"
      >
        <img src={arrow} className="carousel__arrow-icon" alt="" />
      </button>
    </div>
  );
};

export default Carousel;
