import { Aside, Container, Header, MainContainer, MainContent } from './styles';
import UserInfoComponent from '../../components/userInfo';

function Home() {
  return (
    <>
      <Container>
        <Header>
          <h1>Header</h1>
        </Header>
        <MainContainer>
          <MainContent>
            <h1>CONTAINER 1</h1>
          </MainContent>
          <Aside>
            <UserInfoComponent />
          </Aside>
        </MainContainer>
      </Container>
    </>
  );
}

export default Home;
