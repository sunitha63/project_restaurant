import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout/Layout';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/signup', { username, password })
      .then(response => {
        alert(response.data.message);
      
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <Layout>
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      
      <button type="submit">Signup</button>
    </form>
    </Layout>
  );
}

export default Signup;
