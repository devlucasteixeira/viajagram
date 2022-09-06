import { useEffect, useLayoutEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { ButtonsSliderContainer, Container, SliderWrapper } from './styles';

function Slider({ images }) {
  const [translateX, setTranslateX] = useState(0);
  const [slides, setSlides] = useState({});

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

  function handleClickNext() {
    setTranslateX(prevState => prevState - 504);
    setSlides({
      ...slides,
      currentSlide: slides.currentSlide + 1,
    });
  }

  function handleClickPrevious() {
    if (translateX === 0) {
      return;
    }
    setTranslateX(prevState => prevState + 504);
    setSlides({
      ...slides,
      currentSlide: slides.currentSlide - 1,
    });
  }

  return (
    <Container>
      <SliderWrapper width={slides.slidesLength} translateX={translateX}>
        {slides.slidesLength > 0 ? (
          slides.images.map(image => (
            <img key={image} src={image} alt="description" />
          ))
        ) : (
          <img src={images} alt="description" />
        )}
      </SliderWrapper>
      {slides.slidesLength && (
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
      )}
    </Container>
  );
}

export default Slider;
