import React, { useState } from 'react';

const LoginForm = ({ setIsLoggedIn }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="email">
        Username: <input typeof="email" name="email" />
      </label>

      <label for="password">
        Password: <input typeof="password" name="password" />
      </label>

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;