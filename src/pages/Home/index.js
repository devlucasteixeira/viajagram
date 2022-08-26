import { Aside, Container, Header, MainContainer, MainContent } from './styles';

function Home() {
  return (
    <Container>
      <Header>
        <h1>Header</h1>
      </Header>
      <MainContainer>
        <MainContent>
          <h1>CONTAINER 1</h1>
        </MainContent>
        <Aside>
          <h1>CONTAINER 2</h1>
        </Aside>
      </MainContainer>
    </Container>
  );
}

export default Home;
