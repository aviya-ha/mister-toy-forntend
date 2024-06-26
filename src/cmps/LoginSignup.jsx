import { useState } from 'react';
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js';
import { login, signup } from '../store/actions/user.actions.js';
import { LoginForm } from './LoginForm.jsx';

// const { useState } = React;

export function LoginSignup() {
  const [isSignup, setIsSignUp] = useState(false);

  function onLogin(credentials) {
    isSignup ? _signup(credentials) : _login(credentials);
  }

  function _login(credentials) {
    login(credentials)
      .then(() => {
        showSuccessMsg('Logged in successfully');
      })
      .catch(err => {
        showErrorMsg('Oops try again');
      });
  }

  function _signup(credentials) {
    signup(credentials)
      .then(() => {
        showSuccessMsg('Signed in successfully');
      })
      .catch(err => {
        showErrorMsg('Oops try again');
      });
  }

  return (
    <div className="login-page-inside">
      <LoginForm onLogin={onLogin} isSignup={isSignup} />
      <div className="is-logged"> 
        <a  href="#" onClick={() => setIsSignUp(!isSignup)}>
          {isSignup ? 'Login' : 'Signup'}
        </a>
      </div>
    </div>
  );
}
