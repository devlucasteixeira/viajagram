import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px;
`;

export const CardAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  img {
    width: 35px;
    height: 35px;

    border-radius: 50%;

    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .details {
    display: flex;

    gap: 10px;

    margin-top: 8px;

    .location,
    .times-ago {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 0.7rem;
      color: ${props => props.theme.TEXT};
    }
  }
`;
