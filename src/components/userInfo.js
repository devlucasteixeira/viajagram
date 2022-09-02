import React, { useEffect, useMemo, useState } from 'react';
import {
  Container,
  ContainerSide,
  ContainerText,
  ContainerSuggest,
  ListContainer,
  ContainerButtons,
  ProfileText,
  ProfileDescription,
  SuggestText,
} from './style';

const usersSuggest = [
  {
    name: 'spicyeconomy',
    suggest: 'Sugestões para você',
  },
  {
    name: 'thiagoviannaed',
    suggest: 'Seguido(a) por adilsonbuenog',
  },
  {
    name: 'dhashsf',
    suggest: 'Sugestões para você',
  },
  {
    name: 'hange.cdn',
    suggest: 'Segue você',
  },
  {
    name: 'wescley0101',
    suggest: 'Segue você',
  },
];

export default function UserInfo() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(usersSuggest);
  }, []);

  const ListSuggest = useMemo(() => {
    console.log(users.length);
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
  }, [users]);

  return (
    <>
      <div>
        <Container>
          <ContainerSide>
            <div className="profile-image">Image</div>
            <ContainerText>
              <ProfileText>programadorzao</ProfileText>
              <ProfileDescription>Joabson Souza</ProfileDescription>
            </ContainerText>
          </ContainerSide>
          <ContainerButtons>Mudar</ContainerButtons>
        </Container>
        <div>
          <ContainerSuggest>
            <SuggestText>Sugestões para você</SuggestText>
            <span>Ver tudo</span>
          </ContainerSuggest>
          {ListSuggest}
        </div>
      </div>
    </>
  );
}
