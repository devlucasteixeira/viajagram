import { Aside, Container, Header, MainContainer, MainContent } from './styles';

import Feed from '../../components/Feed';

function Home() {
  return (
    <Container>
      <Header>
        <h1>Header</h1>
      </Header>
      <MainContainer>
        <MainContent>
          <Feed />
        </MainContent>
        <Aside>
          <h1>CONTAINER 2</h1>
        </Aside>
      </MainContainer>
    </Container>
  );
}

export default Home;
