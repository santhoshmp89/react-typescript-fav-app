import React from 'react';
import ReactDOM from 'react-dom';

export default function App():JSX.Element {
    const sum = (a: number, b: number): number => {
        return a + b;
    }
    return( 
        <h1>
            Hello world {sum(3,3)}
        </h1>
    )
}

ReactDOM.render(<App />, document.getElementById('app-root'))