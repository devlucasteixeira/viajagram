// import commentsList from '../../data/comments.json';

import {
  CommentsContainer,
  CommentContainer,
  CommentAuthor,
  Comment,
} from './styles';

function Comments({ commentsList }) {
  // const { comments } = commentsList;
  return (
    <CommentsContainer>
      {commentsList
        ? commentsList.map(comment => {
            const { id, user, text } = comment;
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
          })
        : null}
    </CommentsContainer>
  );
}

export default Comments;
