import React from 'react';
import FeedCard from '../FeedCard';

import postList from '../../data/posts.json';

import { Container } from './styles';

function Feed() {
  const { posts } = postList;

  return (
    <Container>
      {posts.length > 0 ? (
        posts.map(post => (
          <FeedCard key={post.id} post={post} commentsList={null} />
        ))
      ) : (
        <h1>No post for feed</h1>
      )}
    </Container>
  );
}

export default Feed;
