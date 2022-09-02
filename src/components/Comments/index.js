import React from 'react';

import commentsList from '../../data/comments.json';

import {
  CommentsContainer,
  CommentContainer,
  CommentAuthor,
  Comment,
} from './styles';

function Comments() {
  const { comments } = commentsList;
  return (
    <CommentsContainer>
      {comments.length > 0 &&
        comments.map(commentObj => {
          const { id, user, text } = commentObj;

          return (
            <CommentContainer key={id}>
              <CommentAuthor>
                <a href="/" alt=" profile">
                  <img src={user.profileImageUrl} alt="user profile" />
                </a>
                <a href="/" alt="profile">
                  <strong>{user.login}</strong>
                </a>
              </CommentAuthor>
              <Comment>{text}</Comment>
            </CommentContainer>
          );
        })}
    </CommentsContainer>
  );
}

export default Comments;
