import React, { FC, useState } from 'react';
import { IPost } from '../../models/IPost';
import { postsApi } from '../../store/services/PostsService';
import PostItem from './PostItem';

const PostsList: FC = () => {
  const [limit, setLimit] = useState(30)
  const {data: posts, error, isLoading} = postsApi.useFetchAllPostsQuery(limit)
  const [createPost, {}] = postsApi.useCreatePostMutation()
  const [updatePost, {}] = postsApi.useUpdatePostMutation()
  const [deletePost, {}] = postsApi.useDeletePostMutation()

  const handleCreate = async () => {
    const title = prompt()
    await createPost({title, body: title} as IPost)
  }

  const handleRemove = (post: IPost) => {
    deletePost(post)
  }

  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }

  return (
    <div>
      <div className="posts__list">
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Error</h1>}
        {posts && posts.map(post =>
          <PostItem 
            key={post.id}
            post={post}
            remove={handleRemove}
            update={handleUpdate}
          />  
        )}
        <button onClick={handleCreate}>Add new post</button>
      </div>
    </div>
  );
};

export default PostsList;