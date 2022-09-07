import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;

  overflow: hidden;
`;

export const SliderWrapper = styled.div`
  height: 100%;
  width: ${({ slidesLength, containerWidth }) =>
    slidesLength * containerWidth}px;

  display: flex;
  /* gap: 0 4px; */

  transform: translateX(${({ translateX }) => translateX}px);

  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  transition: transform 500ms ease-in-out;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Image = styled.img`
  width: ${({ width }) => width}px;

  object-fit: cover;
`;

export const ButtonsSliderContainer = styled.div`
  width: 100%;
  height: 25px;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  button {
    width: 20px;
    height: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    background-color: #e9e9e5;
    color: rgb(38, 38, 38);

    position: absolute;

    transition: opacity 0.3s;
    z-index: 10;

    &:hover {
      opacity: 0.9;
    }
  }

  button.next {
    right: 8px;
  }
  button.previous {
    left: 8px;
  }
`;
