import { useEffect, useLayoutEffect, useState, useRef, useMemo } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import {
  ButtonsSliderContainer,
  Container,
  SliderWrapper,
  Image,
  NavDots,
  Dot,
} from './styles';

function Slider({ images }) {
  const [translateX, setTranslateX] = useState(0);
  const [slides, setSlides] = useState({});
  const [widthContainerSlider, setWidthContainerSlider] = useState(0);

  const containerSliderRef = useRef(null);

  useEffect(() => {
    setWidthContainerSlider(
      containerSliderRef.current.getBoundingClientRect().width,
    );
  }, []);

  useEffect(() => {
    if (images instanceof Array) {
      setSlides({
        images,
        slidesLength: images.length,
        currentSlide: 0,
      });
    } else {
      setSlides(images);
    }
  }, [images]);

  useLayoutEffect(() => {
    if (slides.currentSlide >= slides.slidesLength) {
      setTranslateX(0);
      setSlides({
        ...slides,
        currentSlide: 0,
      });
    }
  }, [slides.currentSlide, slides.slidesLength, slides]);

  const slideTranslateByIndex = useMemo(() => {
    return (
      slides.slidesLength > 0 &&
      Array.from(
        { length: slides.slidesLength },
        (_, index) => widthContainerSlider * index,
      )
    );
  }, [slides.slidesLength, widthContainerSlider]);

  function handleClickNext() {
    setTranslateX(prevState => prevState - widthContainerSlider);
    setSlides({
      ...slides,
      currentSlide: slides.currentSlide + 1,
    });
  }

  function handleClickPrevious() {
    if (translateX === 0) {
      return;
    }
    setTranslateX(prevState => prevState + widthContainerSlider);
    setSlides({
      ...slides,
      currentSlide: slides.currentSlide - 1,
    });
  }

  function handleChangeSlide(dotIndex) {
    setSlides({
      ...slides,
      currentSlide: dotIndex,
    });

    setTranslateX(() => -slideTranslateByIndex[dotIndex]);
  }

  return (
    <Container ref={containerSliderRef}>
      <SliderWrapper
        slidesLength={slides.slidesLength}
        containerWidth={widthContainerSlider}
        translateX={translateX}>
        {slides.slidesLength > 0 ? (
          slides.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`slide ${index}`}
              width={widthContainerSlider}
            />
          ))
        ) : (
          <Image src={images} alt="description" width={widthContainerSlider} />
        )}
      </SliderWrapper>
      {slides.slidesLength && (
        <>
          <ButtonsSliderContainer>
            {translateX < 0 && (
              <button className="previous" onClick={handleClickPrevious}>
                <FaArrowLeft size={10} />
              </button>
            )}
            <button className="next" onClick={handleClickNext}>
              <FaArrowRight size={10} />{' '}
            </button>
          </ButtonsSliderContainer>
          <NavDots>
            {slides.images.map((_, index) => (
              <Dot
                key={index}
                dotIndex={index}
                currentSlide={slides.currentSlide}
                onClick={() => handleChangeSlide(index)}></Dot>
            ))}
          </NavDots>
        </>
      )}
    </Container>
  );
}

export default Slider;
