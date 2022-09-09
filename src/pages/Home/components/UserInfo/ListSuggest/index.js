import React, { memo } from 'react';
import {
  Container,
  ContainerSide,
  ContainerText,
  ListContainer,
  ContainerButtons,
  ProfileText,
  ProfileDescription,
} from './style';

const ListSuggest = ({ users }) => {
  return (
    <ListContainer>
      {users.map((user, index) => (
        <li key={index}>
          <Container>
            <ContainerSide>
              <div className="profile-image">Image</div>
              <ContainerText>
                <ProfileText>{user.name}</ProfileText>
                <ProfileDescription>{user.suggest}</ProfileDescription>
              </ContainerText>
            </ContainerSide>
            <ContainerButtons>Seguir</ContainerButtons>
          </Container>
        </li>
      ))}
    </ListContainer>
  );
};

export default memo(ListSuggest);
