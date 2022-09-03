import FeedCard from '../FeedCard';

import postList from '../../data/posts.json';
import commentsList from '../../data/comments.json';

import { Container } from './styles';

const { posts } = postList;
const { comments } = commentsList;

function Feed() {
  return (
    <Container>
      {posts.length > 0 ? (
        posts.map(post => (
          <FeedCard key={post.id} post={post} commentsList={comments} />
        ))
      ) : (
        <h1>No post available</h1>
      )}
    </Container>
  );
}

export default Feed;
