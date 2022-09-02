import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 8px;
  box-shadow: 0 0 0 1px #b6b8ba;

  background-color: ${props => props.theme.CARD};
  color: ${props => props.theme.BLACK};
  overflow: hidden;

  min-height: 300px;

  margin-bottom: 20px;

  padding: 0 8px;
`;

export const CardHeader = styled.header`
  padding: 16px 0;

  font-size: 0.9rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const CardButtonMenu = styled.button`
  font-weight: bold;
  border: none;
  font-size: 18px;

  svg {
    color: #a7a7a4;

    transition: all 0.4s;

    &:hover {
      color: #868684;
    }
  }
`;

export const CardTitle = styled.p`
  margin: 8px 0;
  font-size: 1.3rem;

  word-break: break-all;
`;

export const CardPhoto = styled.div`
  min-height: 300px;
  max-height: 380px;

  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 22px;

  overflow: hidden;

  img {
    width: 100%;
    border-radius: 22px;
  }
`;

export const CardActions = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 8px;
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
`;

export const FormPublishComment = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 16px 0;

  .react-input-emoji--input {
    height: 40px;
    max-width: 300px;
    border: none;
    border-bottom: 1px solid transparent;

    flex: 1;

    padding: 8px;
    outline: none;

    transition: border-bottom 0.4s;
    &:focus {
      border-bottom: 1px solid ${props => props.theme.TEXT_BLUE};
    }
  }
  .react-input-emoji--button {
    padding: 0 4px;
  }
`;

export const PublishButton = styled.button`
  color: #326bab;

  border-radius: 4px;
  opacity: 0.7;
  padding: 8px;

  border: 1px solid transparent;

  transition: border 0.4s;
  font-weight: bold;

  &:hover {
    border: 1px solid #326bab;
  }
`;
