import React, { useState } from 'react';

const LoginForm = ({ isLoggedIn, setIsLoggedIn }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Username: <input type="email" id="email" name="email" />
      </label>

      <label htmlFor="password">
        Password: <input type="password" id="password" name="password" />
      </label>

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;