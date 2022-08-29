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

  button {
    cursor: pointer;
  }

  header {
    padding: 16px 0;

    font-size: 0.9rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .author {
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
    }

    button {
      font-weight: bold;
      border: none;
      font-size: 18px;

      .dots {
        display: flex;
        gap: 2px;

        cursor: pointer;

        span {
          height: 5px;
          width: 5px;

          border-radius: 50%;
          background-color: ${props => props.theme.TEXT};
        }
      }
    }
  }

  .feed-title {
    margin: 8px 0;
    font-size: 1.3rem;
  }

  .feed-photo {
    max-height: 380px;

    border-radius: 16px;

    /* background-color: #326bab; */

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 22px;

    overflow: hidden;

    img {
      width: 100%;
      border-radius: 22px;
    }
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    padding: 8px;

    button {
      border: none;
    }

    .liked,
    .comments {
      display: flex;
      align-items: center;

      gap: 0 4px;
      font-weight: bold;

      color: ${props => props.theme.TEXT};
    }

    .liked {
      margin-right: 16px;
    }
  }

  footer {
    padding: 0 8px;
  }

  .publish-comment {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0 4px;
    margin: 16px 0;

    .btn-emojis {
      border: 0;

      width: 25px;
      height: 25px;

      border-radius: 50%;
      margin-right: 4px;

      svg {
        transition: all 0.5s;
      }
      &:hover {
        svg {
          color: #e0d857;
        }
      }
    }

    .comment-input {
      height: 30px;

      border: none;
      border-bottom: 1px solid ${props => props.theme.TEXT};

      /* border-radius: 4px; */
      flex: 1;

      padding: 8px;
      outline: none;

      resize: none;

      &::scroll-snap-type {
        background: transparent;
      }
    }

    .btn-publish {
      padding: 8px 16px;
      border: none;
      color: #326bab;

      border-radius: 4px;
      opacity: 0.7;

      transition: all 0.7s;

      &:hover {
        background-color: #e1f1f1;
      }
    }
  }
`;
