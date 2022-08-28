import { Container } from './styles';

import heartIcon from '../../assets/icons/heart.png';
import commentIcon from '../../assets/icons/comments.png';
import locationIcon from '../../assets/icons/location.png';
import clockIcon from '../../assets/icons/clock.png';

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
        'https://images.unsplash.com/photo-1661151578816-44d2691eb8bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    likes: '14.5k Likes',
    comments: '1.2k comments',
    createAt: '13 hrs atrás',
  },
  {
    id: 2,
    user: {
      name: 'Joe Doe',
      city: 'New York',
      profileImageUrl:
        'https://cdn.icon-icons.com/icons2/11/PNG/128/customer_person_people_man_user_client_1629.png',
    },
    card: {
      title: 'here we go, other post for development feed.',
      imageUrl:
        'https://images.unsplash.com/photo-1660840389576-f49c99366fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
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
        'https://cdn.icon-icons.com/icons2/39/PNG/128/userkdmfemale_person_woman_5920.png',
    },
    card: {
      title: 'Diretamente de Natal, imagem de drone, uma maravilha de lugar.',
      imageUrl:
        'https://images.unsplash.com/photo-1660600204859-2ce52d70e5d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
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
                        <img src={locationIcon} alt="location icon" />
                        <span>{user.city}</span>
                      </div>

                      <div className="times-ago">
                        <img src={clockIcon} alt="clock icon" />
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
                  <img src={commentIcon} alt=" icon comments" />
                  <span>{comments}</span>
                </button>
              </section>

              <form className="publish-comment">
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
