import React, { FC } from 'react';
import { PostsList } from '../../components/Posts/PostsList';

const PostsView: FC = () => {
  return (
    <div>
      <PostsList />
    </div>
  );
};

export { PostsView };