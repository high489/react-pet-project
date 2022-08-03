import React, { FC, useState } from 'react';
import { IPost } from '../../../models/IPost';
import { PostsListItem } from './PostsListItem';
import { 
  useGetPostsQuery, 
  useCreatePostMutation, 
  useDeletePostMutation
} from '../../../store';
import { useNavigate } from 'react-router-dom';

const PostsList: FC = () => {
  const [limit, setLimit] = useState(30)
  const {data: posts, error, isLoading} = useGetPostsQuery(limit)
  const navigate = useNavigate()
  const [deletePost, {}] = useDeletePostMutation()

  const handleRemove = (post: IPost) => {
    deletePost(post)
  }

  const navigateToCreatePostView = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/posts/new', { replace: true })
  }

  return (
    <div>
      <div className="posts__list">
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Error</h1>}
        {posts?.map((post, index) =>
          <PostsListItem 
            key={post.id}
            number={index + 1}
            post={post}
            remove={handleRemove}
          />
        )}<hr/>
        <button onClick={navigateToCreatePostView}>Create new post</button>
      </div>
    </div>
  );
};

export { PostsList };