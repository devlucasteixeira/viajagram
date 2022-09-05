import { Container } from './styles';

function CardPhotos({ imageUrl }) {
  return (
    <Container>
      <img src={imageUrl} alt="description" />
    </Container>
  );
}

export default CardPhotos;
