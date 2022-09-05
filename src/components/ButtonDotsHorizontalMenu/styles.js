import styled from 'styled-components';

export const Container = styled.button`
  font-weight: bold;
  border: none;
  font-size: 18px;

  cursor: pointer;
  svg {
    color: #a7a7a4;

    transition: all 0.4s;

    &:hover {
      color: #868684;
    }
  }
`;
