// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';

import ToDo from './components/todo';

export default function App():React.ReactNode {
  // const a = 'fdfd';

  return (
    <h1>
      Hello world
    </h1>
  );
}

ReactDOM.render(<ToDo />, document.getElementById('app-root'));
