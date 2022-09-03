import { useCallback, useEffect, useState } from 'react';

import InputEmoji from 'react-input-emoji';

import {
  Container,
  CardHeader,
  CardAuthor,
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
import ButtonDotsHorizontalMenu from '../ButtonDotsHorizontalMenu';
import ModalComments from '../ModalComments';

function FeedCard({ post, commentsList }) {
  const [isCardLoading, setIsCardLoading] = useState(true);
  const [openModalComments, setOpenModalComments] = useState(false);
  const [commentText, setCommentText] = useState('');

  const [comments, setComments] = useState(commentsList);

  const { id, user, card, likes, commentsCount, createAt } = post;

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

  function handleAddComment(id) {
    const newComment = {
      id: Math.floor(Math.random() * 100),
      postId: id,
      user: {
        name: '{user}',
        city: '{city}',
        profileImageUrl:
          'https://cdn-icons-png.flaticon.com/128/1814/1814291.png',
        login: '{login}',
      },
      text: commentText,
    };

    setComments([...comments, newComment]);
    setCommentText('');
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

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
          card={card}
          postId={id}
          commentsList={comments}
        />
      )}
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
                <span>{createAt}</span> atrás
              </div>
            </div>
          </div>
        </CardAuthor>
        <ButtonDotsHorizontalMenu />
      </CardHeader>

      <CardTitle>{card.title}</CardTitle>

      <CardPhoto>
        <img src={card.imageUrl} alt="card alt" />
      </CardPhoto>

      <CardActions>
        <LikedButton>
          <BsFillHeartFill size={18} color="#E77F76" />
          <span>{likes} likes</span>
        </LikedButton>
        <CommentsButton onClick={toggleModalComments}>
          <FaComment size={18} />
          <span>{commentsCount} comentários</span>
        </CommentsButton>
      </CardActions>

      <FormPublishComment onSubmit={handleSubmit}>
        <InputEmoji
          placeholder="Adicione um comentário..."
          value={commentText}
          onChange={setCommentText}
          height={40}
          borderRadius={0}
          borderColor="#ffffff"
        />
        <PublishButton
          onClick={() => {
            handleAddComment(id);
          }}>
          Publicar
        </PublishButton>
      </FormPublishComment>
    </Container>
  );
}

export default FeedCard;
