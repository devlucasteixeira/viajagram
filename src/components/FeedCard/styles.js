import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 8px;
  box-shadow: 0 0 0 1px #b6b8ba;

  background-color: ${props => props.theme.CARD};
  color: ${props => props.theme.BLACK};

  min-height: 300px;

  margin-bottom: 20px;

  padding: 0 8px;
`;

export const CardHeader = styled.header`
  padding: 16px 0;

  font-size: 0.9rem;
`;

export const CardTitle = styled.p`
  margin: 8px 0;
  font-size: 1.3rem;

  word-break: break-all;
`;

export const CardActions = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 8px;

  button {
    font-size: 12px;
  }
`;

export const LikedButton = styled.button`
  display: flex;
  align-items: center;

  gap: 0 4px;
  font-weight: bold;

  color: ${props => props.theme.TEXT};
  margin-right: 16px;
`;

export const CommentsButton = styled.button`
  display: flex;
  align-items: center;

  gap: 0 4px;
  font-weight: bold;

  color: ${props => props.theme.TEXT};

  span,
  svg {
    pointer-events: none;
  }
`;
