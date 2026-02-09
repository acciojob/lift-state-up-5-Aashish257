
import React, { useState } from "react";
import './../styles/App.css';
import LoginForm from './LoginForm';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h1>Parent Component</h1>
      {isLoggedIn ? (
        <h2>You are logged in</h2>
      ) : (
        <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
};

export default App
