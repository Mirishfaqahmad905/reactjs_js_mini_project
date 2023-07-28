import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Replace 'localhost' with your server IP if necessary

const App = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
console.log(inputValue)
  useEffect(() => {
    // Handle incoming chat messages
    socket.on('chatMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('chatMessage');
    };
  }, []);

  const handleSendMessage = () => {
    socket.emit('chatMessage', inputValue);
    setInputValue('');
  };

  return (
    <div>
      <h1>Chat App</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default App;
