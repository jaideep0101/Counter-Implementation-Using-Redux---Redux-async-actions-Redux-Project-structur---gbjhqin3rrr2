import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  return (
    <div id='main'>
       <h1 data-testid='counter'>{counter}</h1>
     <button onClick={() =>  dispatch({ type: 'INCREMENT' })}>+</button>
     <button onClick={() =>  dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}

export default App;
