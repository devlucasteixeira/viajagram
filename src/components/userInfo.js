import React from 'react';
import {
  Container,
  ContainerSide,
  ContainerText,
  ContainerSugestoes,
  ListContainer,
  ContainerButtons,
} from './style';

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
          <ContainerSugestoes>
            <span>Sugestões para você</span>
            <span>Ver Tudo</span>
          </ContainerSugestoes>
          <ListContainer>
            <li>
              <Container>
                <ContainerSide>
                  <div className="profile-image">Image</div>
                  <ContainerText>
                    <span>programadorzao</span>
                    <span>Sugestões para você</span>
                  </ContainerText>
                </ContainerSide>
                <ContainerButtons>Seguir</ContainerButtons>
              </Container>
            </li>
            <li>
              <Container>
                <ContainerSide>
                  <div className="profile-image">Image</div>
                  <ContainerText>
                    <span>programadorzao</span>
                    <span>Seguido(a) por adilsonhuenog</span>
                  </ContainerText>
                </ContainerSide>
                <ContainerButtons>Seguir</ContainerButtons>
              </Container>
            </li>
            <li>
              <Container>
                <ContainerSide>
                  <div className="profile-image">Image</div>
                  <ContainerText>
                    <span>programadorzao</span>
                    <span>Sugestões para você</span>
                  </ContainerText>
                </ContainerSide>
                <ContainerButtons>Seguir</ContainerButtons>
              </Container>
            </li>
            <li>
              <Container>
                <ContainerSide>
                  <div className="profile-image">Image</div>
                  <ContainerText>
                    <span>programadorzao</span>
                    <span>Segue você</span>
                  </ContainerText>
                </ContainerSide>
                <ContainerButtons>Seguir</ContainerButtons>
              </Container>
            </li>
            <li>
              <Container>
                <ContainerSide>
                  <div className="profile-image">Image</div>
                  <ContainerText>
                    <span>programadorzao</span>
                    <span>Segue você</span>
                  </ContainerText>
                </ContainerSide>
                <ContainerButtons>Seguir</ContainerButtons>
              </Container>
            </li>
          </ListContainer>
        </div>
      </div>
    </>
  );
}
