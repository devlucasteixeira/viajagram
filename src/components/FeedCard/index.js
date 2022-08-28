import { Container } from './styles';

import heartIcon from '../../assets/icons/heart.png';
import {FaComment} from 'react-icons/fa';
import {ImLocation} from 'react-icons/im';
import {BsFillClockFill, BsEmojiSmile} from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';

const postList = [
  {
    id: 1,
    user: {
      name: 'Jorge Nascimento',
      city: 'São Paulo',
      profileImageUrl:
        'https://w7.pngwing.com/pngs/400/768/png-transparent-laptop-computer-icons-user-drawing-computer-user-miscellaneous-blue-rectangle-thumbnail.png',
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
      profileImageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
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
  console.log(postList);
  return (
    <Container>
      {postList.length > 0 &&
        postList.map(post => {
          const { id, user, card, likes, comments, createAt } = post;
          return (
            <div key={id}>
              <header>
                <div className="author">
                  <img src={user.profileImageUrl} alt="user profile" />
                  <div>
                    <a href="/">
                      <strong>{user.name}</strong>
                    </a>

                    <div className="details">
                      <div className="location">
                        <IconContext.Provider value={{color: '#E77F76'}}>
                       <ImLocation/> {/* incon location */}
                       </IconContext.Provider> 
                        <span>{user.city}</span>
                      </div>

                      <div className="times-ago">
                      <IconContext.Provider value={{color: '#E77F76'}}>
                      <BsFillClockFill/>  {/* incon clock */}
                      </IconContext.Provider>
                        <span>{createAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button>...</button>
              </header>
              <p className="feed-title ">{card.title}</p>
              <div className="feed-photo">
                <img src={card.imageUrl} alt="card alt" />
              </div>
              <section className="actions">
                <button className="liked">
                  <img src={heartIcon} alt="loved" />
                  <span>{likes}</span>
                </button>
                <button className="comments">
                <FaComment/> {/* incon comments */}
                  <span>{comments}</span>
                </button>
              </section>

              <form className="publish-comment">
                <IconContext.Provider value={{size: '25px'}}>
              <BsEmojiSmile/>
              </IconContext.Provider>
                <textarea
                  type="text"
                  className="comment-input"
                  placeholder="Adicione um comentário"
                />{' '}
                <button className="btn-publish" disabled>
                  Publicar
                </button>
              </form>
            </div>
          );
        })}
    </Container>
  );
}

export default FeedCard;
