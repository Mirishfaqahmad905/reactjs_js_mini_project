import React, { useRef } from 'react';

const UncontrolComponent = () => {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <>
      <h2>Controlled and Uncontrolled Component in React.js</h2>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Get Value</button>
    </>
  );
};

export default UncontrolComponent;
