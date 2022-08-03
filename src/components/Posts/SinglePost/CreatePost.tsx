import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPost } from '../../../models/IPost';
import { useCreatePostMutation } from '../../../store';

const CreatePost = () => {
  const navigate = useNavigate()
  const [createPost, {}] = useCreatePostMutation()
  const [newPost, setNewPost] = useState({} as IPost)

  const _getRandomUserId = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

  const handlePostDataInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewPost({...newPost, [e.target.name]: e.target.value})
  }

  const handleCreatePost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (newPost) {
      await createPost({
        userId: _getRandomUserId(1, 5),
        id: Date.now(),
        title: newPost.title,
        body: newPost.body,
      } as IPost).unwrap()
      //setNewPost({})
      navigate('/posts', { replace: true })
    }
  }

  const navigateToPostsListView = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/posts', { replace: true })
  } 

  return (
    <>
      <h4>Create new Post</h4>

      <h4>Post title:</h4>
      <input 
        type='text'
        name='title'
        value={newPost.title ?? ""}
        onChange={handlePostDataInput}
      />

      <h4>Post body:</h4>
      <textarea
        style={{width: '400px', height: '150px'}}
        spellCheck={false}
        name='body'
        value={newPost.body ?? ""}
        onChange={handlePostDataInput}
      />
      <hr />
      <div>
        <button onClick={navigateToPostsListView}>Back</button>
        <button onClick={handleCreatePost}>Save</button>
      </div>     
    </>
  );
};

export { CreatePost };