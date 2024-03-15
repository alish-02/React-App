# React-App
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App!</h1>
        <p>Counter: {count}</p>
        <button onClick={increment}>Increment</button>
      </header>
    </div>
  );
}

export default App;

