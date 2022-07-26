import React from 'react';
import PostsList from './components/Posts/PostsList';
import UsersList from './components/Users/UsersList';

function App() {
  return (
    <div>
      <PostsList />
      <hr />
      <UsersList />
    </div>
  );
}

export default App;
