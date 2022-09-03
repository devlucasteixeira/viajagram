import Comment from '../Comments';
import {
  CloseButton,
  CommentList,
  CommentsContainer,
  ModalWrapper,
  Overlay,
  PostMidia,
} from './styles';

import { FiXCircle } from 'react-icons/fi';

function ModalComments({ onToggleModal, postId, card, commentsList }) {
  console.log('Modal Comments');
  const { imageUrl } = card;
  return (
    <Overlay onClick={onToggleModal}>
      <ModalWrapper>
        <PostMidia>
          <img src={imageUrl} alt="card content" />
        </PostMidia>

        <CommentsContainer>
          <CommentList>
            <Comment postId={postId} commentsList={commentsList} />
          </CommentList>
        </CommentsContainer>
        <CloseButton onClick={onToggleModal}>
          <FiXCircle size={25} />
        </CloseButton>
      </ModalWrapper>
    </Overlay>
  );
}

export default ModalComments;
