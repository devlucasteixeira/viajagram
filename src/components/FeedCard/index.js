import { useCallback, useEffect, useState } from 'react';

import { formatCount } from '../../helpers/formatCount';

import {
  Container,
  CardHeader,
  CardTitle,
  CardPhoto,
  CardActions,
  LikedButton,
  CommentsButton,
} from './styles';

import Spinner from '../Spinner';

import { BsFillHeartFill } from 'react-icons/bs';
import { FaComment } from 'react-icons/fa';

import ModalComments from '../ModalComments';
import FormPublishComment from '../FormPublishComment';
import ProfileHeader from '../ProfileHeader';

function FeedCard({ post, commentsList }) {
  const [isCardLoading, setIsCardLoading] = useState(true);
  const [openModalComments, setOpenModalComments] = useState(false);
  const [comments, setComments] = useState(commentsList);

  const { id, user, card, likesCount, commentsCount, createAt } = post;

  useEffect(() => {
    setTimeout(() => {
      setIsCardLoading(false);
    }, 1500);
  }, []);

  const toggleModalComments = useCallback(event => {
    event.stopPropagation();
    if (event.target === event.currentTarget) {
      setOpenModalComments(prevState => !prevState);
    }
  }, []);

  if (isCardLoading) {
    return (
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Spinner />;
      </Container>
    );
  }

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
        <img src={card.imageUrl} alt="card alt" />
      </CardPhoto>

      <CardActions>
        <LikedButton>
          <BsFillHeartFill size={18} color="#E77F76" />
          <span>{formatCount(likesCount)} likes</span>
        </LikedButton>
        <CommentsButton onClick={toggleModalComments}>
          <FaComment size={18} />
          <span>{formatCount(commentsCount)} comentários</span>
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
