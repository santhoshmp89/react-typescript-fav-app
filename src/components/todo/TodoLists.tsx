// eslint-disable-next-line no-use-before-define
import React from 'react';
import { ITodo } from './src/index';

interface Props {
    lists: ITodo[];
    handleComplete: () => void;
}

const TodoLists = (props: Props):React.ReactNode => {
  const { lists, handleComplete } = props;

  if (!lists.length) {
    return (
      <div>No Lists</div>
    );
  }

  return (
    <ul>
      {
        lists.map((item, index) => (
          <li key={item.title} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={item.completed} onChange={() => handleComplete(index)} />
            {item.title}
          </li>
        ))
        }
    </ul>
  );
};

export default TodoLists;
