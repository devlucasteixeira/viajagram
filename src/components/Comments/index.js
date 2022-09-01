import React from 'react';

import {
  CommentsContainer,
  CommentContainer,
  CommentAuthor,
  Comment,
} from './styles';

const commentsList = [
  {
    id: 1,
    postId: 2549,
    user: {
      name: 'Jorge Nascimento',
      city: 'São Paulo',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/62806739?v=4',
      login: 'nascimento_',
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere sapiente distinctio consequuntur adipisci ipsum non sint delectus Reprehenderit ducimus aliquam consequuntur',
  },
];

function Comments() {
  return (
    <CommentsContainer>
      {commentsList.length > 0 &&
        commentsList.map(commentObj => {
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
