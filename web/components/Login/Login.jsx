import { useState } from 'react';
import axios from 'axios'
import './Login.css';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();

      console.log('Email:', email);
      console.log('Password:', password);

      var data = { "email": email, "password": password };

      axios.post('http://localhost:8000/api/login', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data.message);
        console.error('Problem with fetch', error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome Back</h1>
        <p className="subtitle">Log in to access your Maps account</p>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
        <div className="signup-link">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;