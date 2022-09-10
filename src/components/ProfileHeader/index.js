import { BsFillClockFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import ButtonDotsHorizontalMenu from '../ButtonDotsHorizontalMenu';

import { Container, CardAuthor } from './styles';

function ProfileHeader({ user, createAt }) {
  return (
    <Container>
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

            {createAt && (
              <div className="times-ago">
                <BsFillClockFill color="#E77F76" />
                <span>{createAt}</span> atrás
              </div>
            )}
          </div>
        </div>
      </CardAuthor>
      <ButtonDotsHorizontalMenu />
    </Container>
  );
}

export default ProfileHeader;
