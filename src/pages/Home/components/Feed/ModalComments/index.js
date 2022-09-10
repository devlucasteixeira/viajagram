import { useEffect, useCallback } from 'react';

import Comment from '../Comments';
import FormPublishComment from '../FormPublishComment';
import ProfileHeader from '../../../../../components/ProfileHeader';
import Slider from '../../../../../components/Slider';
import {
  CloseButton,
  CommentList,
  CommentsContainer,
  ModalWrapper,
  Overlay,
  PostMidia,
} from './styles';

import { FiXCircle } from 'react-icons/fi';

function ModalComments({
  onToggleModal,
  setOpenModalComments,
  postId,
  card,
  commentsList,
  setComments,
  user,
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

  const { imagesUrl } = card;

  return (
    <Overlay onClick={onToggleModal}>
      <ModalWrapper>
        <PostMidia>
          <Slider images={imagesUrl} />
        </PostMidia>

        <CommentsContainer>
          <ProfileHeader user={user} />
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
