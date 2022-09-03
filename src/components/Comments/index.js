import Message from '../Message';
import {
  CommentsContainer,
  CommentContainer,
  CommentAuthor,
  Comment,
} from './styles';

function Comments({ postId, commentsList }) {
  const commentsForThisPost = commentsList.filter(
    comment => comment.postId === postId,
  );

  return (
    <CommentsContainer>
      {commentsForThisPost.length > 0 ? (
        commentsForThisPost.map(comment => {
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
      ) : (
        <Message>Nenhum comentário para o post.</Message>
      )}
    </CommentsContainer>
  );
}

export default Comments;
