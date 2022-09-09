import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  align-items: center;

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

    svg {
      transition: fill 300ms;
    }
    &:hover svg {
      fill: #a7982a;
    }
  }
`;

export const PublishButton = styled.button`
  color: #326bab;

  border-radius: 4px;
  opacity: 0.7;
  padding: 8px;

  border: 1px solid transparent;

  margin-left: 4px;

  transition: border 0.4s;
  font-weight: bold;

  &:hover {
    border: 1px solid #326bab;
  }

  &:disabled {
    color: #acadad;
    border: 1px solid #acadad;
  }
`;
