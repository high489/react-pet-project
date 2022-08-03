import React, { FC } from 'react';
import { TodosList } from '../components/Todos/TodosList';

const Todos: FC = () => {
  return (
    <div>
      <TodosList />
    </div>
  );
};

export { Todos };