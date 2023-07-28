import React, { useEffect, useState } from 'react';

const Count = () => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <h2>Total Seconds Remaining: {timer}</h2>
  );
};

export default Count;
