import React, { FC } from 'react';
import { ITodo } from '../../models/ITodo';

interface TodoItemProps {
  number: number;
  todo: ITodo;
  update: (todo: ITodo) => void;
  remove: (todo: ITodo) => void;
}

const TodoItem: FC<TodoItemProps> = ({number, todo, update, remove}) => {
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
      <span onClick={handleUpdateTitle}>{number}. {todo.title}</span>
      <span onClick={handleRemove}> &times;</span>
    </div>
  );
};

export default TodoItem;