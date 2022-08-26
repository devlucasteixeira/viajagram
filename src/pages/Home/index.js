import { Parent, Header, Container, Container1, Container2 } from './styles';

function Home() {
  return (
    <div style={Parent}>
      <div style={Header}>
        <h1>Header</h1>
      </div>
      <div style={Container}>
        <div style={Container1}>
          <h1>CONTAINER 1</h1>
        </div>
        <div style={Container2}>
          <h1>CONTAINER 2</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
