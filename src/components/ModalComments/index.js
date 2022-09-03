import Comment from '../Comments';
import {
  CloseButton,
  CommentList,
  CommentsContainer,
  ModalWrapper,
  Overlay,
  PostMidia,
} from './styles';

function ModalComments({ onToggleModal, postId, card, commentsList }) {
  const { imageUrl } = card;
  return (
    <Overlay>
      <ModalWrapper>
        <PostMidia>
          <img src={imageUrl} alt="card content" />
        </PostMidia>

        <CommentsContainer>
          <CommentList>
            <Comment postId={postId} commentsList={commentsList} />
          </CommentList>
        </CommentsContainer>
        <CloseButton onClick={onToggleModal}> X </CloseButton>
      </ModalWrapper>
    </Overlay>
  );
}

export default ModalComments;
