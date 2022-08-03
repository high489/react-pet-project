import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPost } from '../../../models/IPost';

interface PostsListItemProps {
  number: number;
  post: IPost;
  remove: (post: IPost) => void;
}

const PostsListItem: FC<PostsListItemProps> = ({number, post, remove}) => {
  const navigate = useNavigate()

  const navigateToSinglePostView = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate(`/posts/${post.id}`, { replace: true })
  }

  const navigateToEditPostView = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/posts/${post.id}/edit`, { replace: true })
  }

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    remove(post)
  }

  return (
    <>
      <div
        style={{cursor: 'pointer'}}
        onClick={navigateToSinglePostView}
      >
        {number}. {post.title}
      </div>
      <button onClick={navigateToEditPostView}>Edit</button>
      <button onClick={handleRemove}>Delete</button>
    </>
    
  );
};

export { PostsListItem };