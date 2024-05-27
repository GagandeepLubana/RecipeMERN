import React, {useState} from 'react';

export const Auth = () => {
  return (
    <div className="auth">
      <Login />
      <Register />
    </div>
  );
};

const Login = () => {
  return <div></div>;
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="auth-container">
      <form>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="text"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
