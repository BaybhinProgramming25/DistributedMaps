import { useState } from 'react';
import axios from 'axios'
import './SignUp.css';

const SignUp = () => {

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    var data = { "username": username, "password": password, "email": email }

    axios.post('http://localhost:8000/api/adduser', data)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error.response.data.message);
      console.error('Problem with fetching', error);
    })
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Create Account</h1>
        <p className="subtitle">Sign up to start using Maps</p>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter a username"
              required
            />
          </div>

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
              placeholder="Create a password"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <div className="login-link">
          <p>Already have an account? <a href="/login">Log in</a></p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
