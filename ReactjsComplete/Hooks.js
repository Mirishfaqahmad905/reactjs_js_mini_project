import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
   const Increament=()=>{
     setCount(count+1);
   }

      const [name,setname]=useState();
       
   const handlechange=(e)=>{
     let name=e.target.value;
      setname(name);
   }
  return (
    <div>
      <h1>Counter</h1>
       <h2>name is {name}</h2>
      <p>Count: {count}</p>
     <input type='name'  onChange={handlechange}/>
       <button onClick={Increament}>Increament</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
