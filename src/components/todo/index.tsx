/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import TodoLists from './TodoLists';

type FormEventType = React.FormEvent<HTMLInputElement>;

export interface ITodo {
  title: string
  completed: boolean
}

const ToDo = (): React.ReactNode => {
  const [input, setInput] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputHandleChange = (e: FormEventType) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEventType) => {
    e.preventDefault();
    setTodos([...todos, { title: input, completed: false }]);
    setInput('');
  };

  const handleComplete = (index) => {
    const newState = [...todos.slice(0, index),
      { ...todos[index], completed: !todos[index].completed },
      ...todos.slice(index + 1),
    ];
    setTodos(newState);
  };

  return (
    <div>
      <h1>
        Todo Lists
      </h1>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={inputHandleChange} value={input} />
        <button type="submit">Add</button>
      </form>

      <TodoLists lists={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default ToDo;
