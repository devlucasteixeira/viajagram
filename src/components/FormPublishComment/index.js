import React, { useMemo, useState } from 'react';

import InputEmoji from 'react-input-emoji';
import { Container, PublishButton } from './styles';

function FormPublishComment({ setComments, commentsList, postId }) {
  const [commentText, setCommentText] = useState('');

  function handleKeyEnter(event) {
    if (event.key === 'Enter') {
      handleAddComment(postId);
    }
  }

  function handleAddComment(id) {
    const newComment = {
      id: Math.floor(Math.random() * 100),
      postId: id,
      user: {
        name: '{user}',
        city: '{city}',
        profileImageUrl:
          'https://cdn-icons-png.flaticon.com/128/1814/1814291.png',
        login: '{login}',
      },
      text: commentText,
    };

    setComments([...commentsList, newComment]);
    setCommentText('');
  }

  const isValidInputComment = useMemo(
    () => commentText.trim().length > 0,
    [commentText],
  );

  return (
    <Container>
      <InputEmoji
        placeholder="Adicione um comentário..."
        value={commentText}
        onChange={setCommentText}
        height={40}
        borderRadius={0}
        borderColor="#ffffff"
        onKeyDown={handleKeyEnter}
      />
      <PublishButton
        type="submit"
        disabled={!isValidInputComment}
        onClick={() => {
          handleAddComment(postId);
        }}>
        Publicar
      </PublishButton>
    </Container>
  );
}

export default FormPublishComment;
