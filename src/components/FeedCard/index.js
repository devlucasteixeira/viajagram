import { useCallback, useState } from 'react';

import { formatTotalCommentsAndLikes } from '../../helpers/formatTotalCommentsAndLikes';

import {
  Container,
  CardHeader,
  CardTitle,
  CardPhoto,
  CardActions,
  LikedButton,
  CommentsButton,
} from './styles';

import { BsFillHeartFill } from 'react-icons/bs';
import { FaComment } from 'react-icons/fa';

import ModalComments from '../ModalComments';
import FormPublishComment from '../FormPublishComment';
import ProfileHeader from '../ProfileHeader';
import Slider from '../Slider';

function FeedCard({ post, commentsList }) {
  const [openModalComments, setOpenModalComments] = useState(false);
  const [comments, setComments] = useState(commentsList);

  const { id, user, card, likesCount, commentsCount, createAt } = post;

  const toggleModalComments = useCallback(event => {
    event.stopPropagation();
    if (event.target === event.currentTarget) {
      setOpenModalComments(prevState => !prevState);
    }
  }, []);

  return (
    <Container key={id}>
      {openModalComments && (
        <ModalComments
          onToggleModal={toggleModalComments}
          setOpenModalComments={setOpenModalComments}
          card={card}
          postId={id}
          commentsList={comments}
          setComments={setComments}
          user={user}
        />
      )}
      <CardHeader>
        <ProfileHeader user={user} createAt={createAt} />
      </CardHeader>

      <CardTitle>{card.title}</CardTitle>

      <CardPhoto>
        <Slider images={card.imagesUrl} />
      </CardPhoto>

      <CardActions>
        <LikedButton>
          <BsFillHeartFill size={18} color="#E77F76" />
          <span>{formatTotalCommentsAndLikes(likesCount)} likes</span>
        </LikedButton>
        <CommentsButton onClick={toggleModalComments}>
          <FaComment size={18} />
          <span>{formatTotalCommentsAndLikes(commentsCount)} comentários</span>
        </CommentsButton>
      </CardActions>

      <FormPublishComment
        setComments={setComments}
        commentsList={comments}
        postId={id}
      />
    </Container>
  );
}

export default FeedCard;
