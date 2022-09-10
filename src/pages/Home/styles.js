import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  background: ${props => props.theme.BACKGROUND};
  color: ${props => props.theme.BLACK};
`;

export const Header = styled.header`
  display: flex;
  background: blue;
  height: 7%;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.main`
  /* height: 100vh; */
  width: 70%;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.BACKGROUND};
  color: ${props => props.theme.BLACK};
`;

export const MainContent = styled.div`
  flex: 1.3;
  width: 60%;
  max-width: 550px;
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.7;
  padding: 15px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
