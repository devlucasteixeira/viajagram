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

const postList = [
  {
    id: 1,
    user: {
      name: 'Jorge Nascimento',
      city: 'São Paulo',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/62806739?v=4',
      login: 'nascimento_',
    },
    card: {
      title: 'Este é um post teste de criação e estilização.',
      imageUrl:
        'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    likes: '14.5k Likes',
    comments: '1.2k comments',
    createAt: '13 hrs atrás',
  },
  {
    id: 2,
    user: {
      name: 'Lucas Teixeira',
      city: 'New York',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/81398225?v=4',
      login: 'lucas',
    },
    card: {
      title: 'here we go, other post for development feed.',
      imageUrl:
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    likes: '30.5k Likes',
    comments: '5.2k comments',
    createAt: '10 hrs atrás',
  },
  {
    id: 3,
    user: {
      name: 'Jane Doe',
      city: 'Natal',
      profileImageUrl:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      login: 'jane_doe',
    },
    card: {
      title: 'Diretamente de Natal, imagem de drone, uma maravilha de lugar.',
      imageUrl:
        'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    likes: '50.5k Likes',
    comments: '30.2k comments',
    createAt: '5 hrs atrás',
  },
];

function FeedCard() {
  const [isPhotoLoading, setIsPhotoLoading] = useState(true);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setIsPhotoLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {postList.length > 0 &&
        postList.map(post => {
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
                        <ImLocation color="#E77F76" /> {/* icon location */}
                        <span>{user.city}</span>
                      </div>

                      <div className="times-ago">
                        <BsFillClockFill color="#E77F76" /> {/* icon clock */}
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
                  <FaComment size={18} /> {/* icon comments */}
                  <span>{comments}</span>
                </CommentsButton>
              </CardActions>
              <Comments />
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
        })}
    </>
  );
}

export default FeedCard;
