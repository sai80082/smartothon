import React, { useState } from 'react';
import './styles.css'; // Import the CSS file
import axios from 'axios';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = async () => {
    try {
      const response = await axios.post('http://35.154.65.182:5000/users', {
        name,
        email,
        password,
      });

      console.log(response.data); // Handle the response data as needed
    } catch (error) {
      console.error(error);
    }
  };

  const login = async () => {
    try {
      const response = await axios.post('http://35.154.65.182:5000/login', {
        email,
        password,
      });

      console.log(response.data); // Handle the response data as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-box">
      <form>
        <div className="user-box">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>
        <center>
          <button type="button" onClick={createUser}>
            Create User
          </button>
          <button type="button" onClick={login}>
            Login
          </button>
        </center>
      </form>
    </div>
  );
};

export default Login;
