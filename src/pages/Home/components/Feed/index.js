import FeedCard from './FeedCard';

import postList from '../../../../data/posts.json';
import commentsList from '../../../../data/comments.json';

import { Container } from './styles';
import FallbackMessage from '../../../../components/FallbackMessage';

const { posts } = postList;
// const posts = [];
const { comments } = commentsList;

function Feed() {
  return (
    <Container>
      {posts.length > 0 ? (
        posts.map(post => (
          <FeedCard key={post.id} post={post} commentsList={comments} />
        ))
      ) : (
        <FallbackMessage>Nenhum post disponível</FallbackMessage>
      )}
    </Container>
  );
}

export default Feed;
