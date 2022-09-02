import React from 'react';
import FeedCard from '../FeedCard';

import postList from '../../data/posts.json';
import commentsList from '../../data/comments.json';

import { Container } from './styles';

function Feed() {
  const { posts } = postList;
  // const posts = [];
  const { comments } = commentsList;

  return (
    <Container>
      {posts.length > 0 ? (
        posts.map(post => (
          <FeedCard key={post.id} post={post} commentsList={comments} />
        ))
      ) : (
        <h1>No post for feed</h1>
      )}
    </Container>
  );
}

export default Feed;
