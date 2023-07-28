import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (currentState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return currentState + 1;
    case 'DECREMENT':
      return currentState - 1;
    default:
      return currentState;
  }
};

const UserReducer = () => {
  const [currentValue, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>Increment the value: {currentValue}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </>
  );
};

export default UserReducer;
