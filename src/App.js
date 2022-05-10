import React, { useState } from 'react';
import Todo from './components/Todo'
import './App.css';

function App() {
  return (
    <div className="App container">
      <div>
        <Todo />
      </div>
    </div>
  );
}

export default App;
