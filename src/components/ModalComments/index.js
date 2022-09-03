import Comment from '../Comments';
import {
  CloseButton,
  CommentList,
  CommentsContainer,
  ModalWrapper,
  Overlay,
  PostMidia,
  ContentWrapper,
} from './styles';

import { FiXCircle } from 'react-icons/fi';
import { useEffect } from 'react';
import { useCallback } from 'react';
import FormPublishComment from '../FormPublishComment';

function ModalComments({
  onToggleModal,
  setOpenModalComments,
  postId,
  card,
  commentsList,
  setComments,
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
          <FormPublishComment
            commentsList={commentsList}
            setComments={setComments}
            postId={postId}
          />
        </CommentsContainer>

        <CloseButton onClick={onToggleModal}>
          <FiXCircle size={25} />
        </CloseButton>
      </ModalWrapper>
    </Overlay>
  );
}

export default ModalComments;
