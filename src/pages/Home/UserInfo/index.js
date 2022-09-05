import React, { useEffect, useState } from 'react';
import ListSuggestions from './ListSuggest';
import {
  Container,
  ContainerSide,
  ContainerText,
  ContainerSuggest,
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
          {users && <ListSuggestions users={users} />}
        </div>
      </div>
    </>
  );
}
