import React, { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  useGetOnePostQuery,
  useGetCommentsByPostIdQuery,
} from '../../../store';

const SinglePost: FC = () => {
  const {id} = useParams();
  const {data: post, error: PostError, isLoading: isPostLoading} = useGetOnePostQuery(id)
  const {data: comments, error: CommentsError, isLoading: areCommentsLoading} = useGetCommentsByPostIdQuery(post?.id)
  const navigate = useNavigate()

  console.log(comments);  

  const navigateToPostsListView = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/posts', { replace: true })
  }
  
  return (
    <>
      {isPostLoading && <h1>Post Loading...</h1>}
      {PostError && <h1>Post loading error</h1>}
      
      <h4>Post title:</h4> {post?.title}
      <h4>Post body:</h4> {post?.body}
      <hr />
      
      <h4>Post Comments:</h4>
      {comments?.map(comment => (
        <div key={comment.id}>
          {comment.email}:<br/>
          <i>{comment.name}</i><br/><br/>
        </div>
      ))}
      <hr />
      <button onClick={navigateToPostsListView}>Back</button>
    </>
  );
};

export { SinglePost };