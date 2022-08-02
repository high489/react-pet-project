import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/router/Layout';
import Home from './views/Home';
import Users from './views/Users';
import Posts from './views/Posts';
import Todos from './views/Todos';
import NotFound from './views/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path='users' element={ <Users /> } />
          <Route path='posts' element={ <Posts /> } />
          <Route path='todos' element={ <Todos /> } />
          <Route path='*' element={ <NotFound /> } />
        </Route>        
      </Routes>
    </>
  );
}

export default App;
