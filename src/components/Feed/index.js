import React from 'react';
import FeedCard from '../FeedCard';
import { Container } from './styles';

function Feed() {
  return (
    <Container>
      <FeedCard />
      <FeedCard />
    </Container>
  );
}

export default Feed;
