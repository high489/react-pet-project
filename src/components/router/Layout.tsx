import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { MyLink } from './MyLink';

const Layout: FC = () => {
  return (
    <>
      <header>
        <MyLink to='/'>Home</MyLink>
        <MyLink to='/users'>Users</MyLink>
        <MyLink to='/posts'>Posts</MyLink>
        <MyLink to='/todos'>Todos</MyLink>
      </header>

      <main>
        <Outlet />
      </main>
      
      <footer>Footer</footer>
    </>    
  );
};

export { Layout };