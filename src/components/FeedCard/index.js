import { useEffect, useState } from 'react';

import InputEmoji from 'react-input-emoji';

import {
  Container,
  CardHeader,
  CardAuthor,
  CardButtonMenu,
  CardTitle,
  CardPhoto,
  CardActions,
  LikedButton,
  CommentsButton,
  FormPublishComment,
  PublishButton,
} from './styles';

import Spinner from '../Spinner';

import { BsFillHeartFill } from 'react-icons/bs';
import { FaComment } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';

import { BsFillClockFill } from 'react-icons/bs';
import { HiDotsHorizontal } from 'react-icons/hi';
import Comments from '../Comments';

function FeedCard({ post, commentsList }) {
  const [isPhotoLoading, setIsPhotoLoading] = useState(true);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setIsPhotoLoading(false);
    }, 1000);
  }, []);

  const { id, user, card, likes, comments, createAt } = post;

  return (
    <Container key={id}>
      <CardHeader>
        <CardAuthor>
          <img src={user.profileImageUrl} alt="user profile" />
          <div>
            <a href="/">
              <strong>{user.name}</strong>
            </a>

            <div className="details">
              <div className="location">
                <ImLocation color="#E77F76" />
                <span>{user.city}</span>
              </div>

              <div className="times-ago">
                <BsFillClockFill color="#E77F76" />
                <span>{createAt}</span>
              </div>
            </div>
          </div>
        </CardAuthor>
        <CardButtonMenu>
          <HiDotsHorizontal />
        </CardButtonMenu>
      </CardHeader>

      <CardTitle>{card.title}</CardTitle>

      <CardPhoto>
        {isPhotoLoading ? (
          <Spinner size={20} />
        ) : (
          <img src={card.imageUrl} alt="card alt" />
        )}
      </CardPhoto>

      <CardActions>
        <LikedButton>
          <BsFillHeartFill size={18} color="#E77F76" />
          <span>{likes}</span>
        </LikedButton>
        <CommentsButton>
          <FaComment size={18} />
          <span>{comments}</span>
        </CommentsButton>
      </CardActions>

      <Comments postId={id} commentsList={commentsList} />

      <FormPublishComment>
        <InputEmoji
          placeholder="Adicione um comentário..."
          value={commentText}
          onChange={setCommentText}
          height={40}
          borderRadius={0}
          borderColor="#ffffff"
          cleanOnEnter
        />
        <PublishButton>Publicar</PublishButton>
      </FormPublishComment>
    </Container>
  );
}

export default FeedCard;
