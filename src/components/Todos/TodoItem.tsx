import React, { FC } from 'react';
import { ITodo } from '../../models/ITodo';

interface TodoItemProps {
  todo: ITodo;
  update: (todo: ITodo) => void;
  remove: (todo: ITodo) => void;
}

const TodoItem: FC<TodoItemProps> = ({todo, update, remove}) => {
  const handleUpdateCompleted = (event: React.ChangeEvent) => {
    update({...todo, completed: !todo.completed})
  }

  const handleUpdateTitle = (event: React.MouseEvent) => {
    const title = prompt() || ""
    update({...todo, title})
  }

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(todo)
  }

  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={handleUpdateCompleted} />
      <span onClick={handleUpdateTitle}>{todo.id}. {todo.title}</span>
      <button onClick={handleRemove}>X</button>
    </div>
  );
};

export default TodoItem;