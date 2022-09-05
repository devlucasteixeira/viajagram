import styled from 'styled-components';

export const CommentsContainer = styled.div`
  width: 100%;

  margin: 8px 0;
`;

export const CommentContainer = styled.div`
  padding: 4px;

  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CommentAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  img {
    width: 25px;
    height: 25px;

    border-radius: 50%;

    overflow: hidden;
  }

  a {
    text-decoration: none;
    font-size: 0.8rem;
    color: black;
  }
`;

export const Comment = styled.p`
  word-break: keep-all;

  font-size: 14px;

  flex: 1;

  position: relative;

  padding: 12px;
  border-radius: 6px;
  border: 1px solid #326bab;

  &::before {
    content: '';

    width: 0;
    height: 0;

    border-left: 4px solid #326bab;
    border-bottom: 4px solid #326bab;
    border-top: 4px solid transparent;
    border-right: 4px solid transparent;

    position: absolute;
    left: 0;
    top: 50%;

    transform: translate(-50%, -50%) rotate(45deg);
  }
`;
