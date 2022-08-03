import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/router/Layout';
import { Home } from './views/Home';
import { Users } from './views/Users';
import { PostsView } from './views/Posts/PostsView';
import { SinglePostView } from './views/Posts/SinglePostView';
import { Todos } from './views/Todos';
import { NotFound } from './views/NotFound';
import { CreatePostView } from './views/Posts/CreatePostView';
import { EditPostView } from './views/Posts/EditPostView';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path='users' element={ <Users /> } />
          <Route path='posts' element={ <PostsView /> } />
          <Route path='posts/new' element={ <CreatePostView/> } />
          <Route path='posts/:id' element={ <SinglePostView /> } />
          <Route path='posts/:id/edit' element={ <EditPostView /> } />
          <Route path='todos' element={ <Todos /> } />
          <Route path='*' element={ <NotFound /> } />
        </Route>        
      </Routes>
    </>
  );
}

export default App;