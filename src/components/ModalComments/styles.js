import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: .5; transform: scale(1.05); }
  to { opacity: 1; transform: scale(1);  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: 100;
`;

export const ModalWrapper = styled.div`
  width: 700px;
  height: 450px;

  display: flex;

  background-color: white;

  position: relative;

  animation: ${fadeUp} 300ms ease-out;
`;

export const CloseButton = styled.button`
  width: 25px;
  height: 25px;

  border-radius: 50%;

  border: none;
  background-color: rgba(0, 0, 0, 0.6);

  color: white;

  position: absolute;
  right: -30px;
  top: -30px;

  svg {
    opacity: 0.5;

    transition: opacity 300ms;
    pointer-events: none;
    &:hover {
      opacity: 0.6;
    }
  }
`;

export const PostMidia = styled.div`
  flex: 0.5;
  min-width: 350px;

  background-color: black;

  img {
    width: 100%;
    height: 100%;

    object-fit: contain;
  }
`;

export const CommentsContainer = styled.div`
  padding: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CommentList = styled.div`
  display: flex;
  gap: 8px;

  overflow-y: auto;
`;
