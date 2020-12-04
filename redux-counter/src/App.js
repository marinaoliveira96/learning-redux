import { useState, useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Search from './Search';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>{' '}
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <Search />
    </div>
  );
}

export default App;
