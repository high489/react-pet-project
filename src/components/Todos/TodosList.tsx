import React, { FC, useState } from 'react';
import { ITodo } from '../../models/ITodo';
import {
  useGetTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from '../../store';
import { TodoItem } from './TodoItem';

const TodosList: FC = () => {
  const [todosLimit, setTodosLimit] = useState()
  const [newTodoTitle, setNewTodo] = useState('')
  const {data: todos = [], error, isLoading} = useGetTodosQuery(todosLimit)
  const [createTodo, {}] = useCreateTodoMutation()
  const [updateTodo, {}] = useUpdateTodoMutation()
  const [deleteTodo, {}] = useDeleteTodoMutation()

  const handleCreateTodo = async () => {
    if (newTodoTitle) {
      await createTodo({ 
        id: Date.now(),
        title: newTodoTitle,
        completed: false,
      } as ITodo).unwrap()
      setNewTodo('')
    }
  }

  const handleUpdateTodo = (todo: ITodo) => {
    updateTodo(todo)
  }

  const handleRemoveTodo = (todo: ITodo) => {
    deleteTodo(todo)
  }

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      <div>
        <select value={todosLimit} onChange={(e: any) => setTodosLimit(e.target.value)}>
          <option value="">all</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      <input 
        type="text"
        value={newTodoTitle}
        onChange={(e: any) => setNewTodo(e.target.value)}
      />
      <button onClick={handleCreateTodo}>Create Todo</button>
      {todos && todos.map((todo, index) => 
        <TodoItem 
          key={todo.id}
          number={index + 1}
          todo={todo}
          update={handleUpdateTodo}
          remove={handleRemoveTodo}
        />  
      )}
      
    </div>
  );
};

export { TodosList };