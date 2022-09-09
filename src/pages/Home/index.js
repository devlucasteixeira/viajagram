import { Aside, Container, Header, MainContainer, MainContent } from './styles';
import UserInfoComponent from './components/UserInfo';
import Feed from './components/Feed';

const Home = () => {
  return (
    <>
      <Container>
        <Header>
          <h1>Header</h1>
        </Header>
        <MainContainer>
          <MainContent>
            <Feed />
          </MainContent>
          <Aside>
            <UserInfoComponent />
          </Aside>
        </MainContainer>
      </Container>
    </>
  );
};

export default Home;
