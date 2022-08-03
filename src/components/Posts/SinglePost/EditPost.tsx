import React, { useEffect, useState } from 'react';
import { 
  useGetOnePostQuery, 
  useUpdatePostMutation,
} from '../../../store';
import { useParams, useNavigate } from 'react-router-dom';
import { IPost } from '../../../models/IPost';

const EditPost = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const {data: post, error, isLoading: isPostLoading} = useGetOnePostQuery(id)
  const [updatePost, {}] = useUpdatePostMutation()
  const [updatedPost, setUpdatedPost] = useState({} as IPost)

  useEffect(() => {
    setUpdatedPost({...post} as IPost)
  }, [isPostLoading])
  
  const handleChangePost = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUpdatedPost({...updatedPost, [e.target.name]: e.target.value})
  }

  const handleUpdatePost = (e: React.MouseEvent<HTMLButtonElement>) => {
    updatePost(updatedPost)
    navigate('/posts', { replace: true })
  }

  const navigateToPostsListView = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/posts', { replace: true })
  }

  return (
    <>
      {isPostLoading && <h1>Post Loading...</h1>}
      {error && <h1>Post loading error</h1>}
      <h4>Edit Post</h4>

      <h4>Post title:</h4>
      <input 
        type='text'
        name='title'
        value={updatedPost.title ?? ""}
        onChange={handleChangePost}
      />

      <h4>Post body:</h4>
      <textarea
        style={{width: '400px', height: '150px'}}
        spellCheck={false}
        name='body'
        value={updatedPost.body} 
        onChange={handleChangePost}
      />
      <hr />
      <div>
        <button onClick={navigateToPostsListView}>Back</button>
        <button onClick={handleUpdatePost}>Save</button>
      </div>     
    </>
  );
};

export { EditPost };