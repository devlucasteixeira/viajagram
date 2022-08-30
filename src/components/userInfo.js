import React from 'react';
import {
  Container,
  ContainerSide,
  ContainerText,
  ContainerSuggest,
  ListContainer,
  ContainerButtons,
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
              <span>programadorzao</span>
              <span>Joabson Souza</span>
            </ContainerText>
          </ContainerSide>
          <ContainerButtons>Mudar</ContainerButtons>
        </Container>
        <div>
          <ContainerSuggest>
            <span>Sugestões para você</span>
            <span>Ver Tudo</span>
          </ContainerSuggest>
          <ListContainer>
            {usersSuggest.map(user => {
              return (
                <li>
                  <Container>
                    <ContainerSide>
                      <div className="profile-image">Image</div>
                      <ContainerText>
                        <span>{user.name}</span>
                        <span>{user.suggest}</span>
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
