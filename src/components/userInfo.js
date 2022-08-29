import React from 'react';
import { Container, ContainerSide, ContainerText } from './style';

export default function userInfo() {
  return (
    <Container>
      <ContainerSide>
        <div className="profile-image">Image</div>
        <ContainerText>
          <span>programadorzao</span>
          <span>Joabson Souza</span>
        </ContainerText>
      </ContainerSide>
      <div className="button-modal">Mudar</div>
    </Container>
  );
}
