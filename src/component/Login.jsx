import React from 'react';
import './Login.css';
import { FaGoogle } from "react-icons/fa";


function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <p>Doesn't have an account yet? <a href="#sign-up">Sign Up</a></p>
          <form>
            <label>Email Address</label>
            <input type="email" placeholder="you@example.com" required />
            
            <label>Password</label>
            <input type="password" placeholder="Enter 6 characters or more" required />
            
            <div className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            
            <button type="submit" className="login-button">LOGIN</button>
            
            <div className="or-divider">or login with</div>
            
            <div className="social-login">
              <button className="google-login">Google</button>
              <button className="facebook-login">Facebook</button>
            </div>
          </form>
        </div>
        <div className="illustration">
          <img src="/assets/picture/img-login.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
