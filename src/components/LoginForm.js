import React, { useState } from 'react';

const LoginForm = ({ setIsLoggedIn }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;