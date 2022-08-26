import React from 'react';
import { Container } from './styles';

import heartIcon from '../../assets/icons/heart.png';
import commentIcon from '../../assets/icons/comments.png';
import locationIcon from '../../assets/icons/location.png';
import clockIcon from '../../assets/icons/clock.png';

function FeedCard() {
  return (
    <Container>
      <header>
        <div className="author">
          <img
            src="https://w7.pngwing.com/pngs/400/768/png-transparent-laptop-computer-icons-user-drawing-computer-user-miscellaneous-blue-rectangle-thumbnail.png"
            alt="user"
          />
          <div>
            <a href="/">
              <strong>Jorge Nascimento</strong>
            </a>

            <div className="details">
              <div className="location">
                <img src={locationIcon} alt="location icon" />
                <span>São Paulo</span>
              </div>

              <div className="times-ago">
                <img src={clockIcon} alt="clock icon" />
                <span>13 hrs atrás</span>
              </div>
            </div>
          </div>
        </div>
        <button>...</button>
      </header>
      <p className="feed-title ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint tenetur
        excepturi!
      </p>
      <div className="content">
        <img
          src="https://w7.pngwing.com/pngs/861/608/png-transparent-natural-landscape-nature-horseshoe-bay-landscape-miscellaneous-photography-landscape-thumbnail.png"
          alt="feed with person"
        />
      </div>
      <section className="actions">
        <button className="loved">
          <img src={heartIcon} alt="loved" />
          <span>14.5k Likes</span>
        </button>
        <button className="comments">
          <img src={commentIcon} alt=" icon comments" />
          <span>1.2k comments</span>
        </button>
      </section>

      <form className="publish">
        <textarea
          type="text"
          className="comment-input"
          placeholder="Adicione um comentário"
        />{' '}
        <button className="btn-publish" disabled>
          Publicar
        </button>
      </form>
    </Container>
  );
}

export default FeedCard;
