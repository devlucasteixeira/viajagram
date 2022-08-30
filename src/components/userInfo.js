import React from 'react';
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

export default function userInfo() {
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
          <ListContainer>
            {usersSuggest.map(user => {
              return (
                <li>
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
              );
            })}
          </ListContainer>
        </div>
      </div>
    </>
  );
}
