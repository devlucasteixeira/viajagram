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
import { useEffect } from 'react';
import { useCallback } from 'react';

function ModalComments({
  onToggleModal,
  setOpenModalComments,
  postId,
  card,
  commentsList,
}) {
  const handleKeyEsc = useCallback(
    event => {
      if (event.key === 'Escape') {
        setOpenModalComments(false);
      }
    },
    [setOpenModalComments],
  );

  useEffect(() => {
    const keyDownEvent = window.addEventListener('keydown', handleKeyEsc);

    return () => window.removeEventListener('keydown', keyDownEvent);
  }, [handleKeyEsc]);

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
