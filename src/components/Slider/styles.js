import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 350px;

  border-radius: 22px;

  position: relative;

  overflow: hidden;
`;

export const SliderWrapper = styled.div`
  height: 100%;
  width: ${({ width }) => width * 500}px;

  display: flex;
  gap: 0 4px;

  transform: translateX(${({ translateX }) => translateX}px);

  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  transition: transform 500ms;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  img {
    width: 100%;
    max-width: 500px;
    /* height: 100%; */
    border-radius: 16px;
    border-radius: 22px;

    box-shadow: rgba(0px 0px 18px -3px #000000);

    object-fit: cover;
  }
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

    background-color: #a8a8a8;
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
