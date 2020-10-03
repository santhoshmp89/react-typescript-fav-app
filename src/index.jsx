// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';

export default function App():JSX.Element {
  // const a = 'fdfd';

  return (
    <h1>
      Hello world
    </h1>
  );
}

ReactDOM.render(<App />, document.getElementById('app-root'));
