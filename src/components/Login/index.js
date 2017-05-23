import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends React.Component {

  // button state verification
  btnVerification(){
    const username = document.forms['LogIn'].elements['username'].value;
    const password = document.forms['LogIn'].elements['password'].value;
    const loginButton = document.forms['LogIn'].elements['login_btn'];

    if (username === '' || password === ''){
      loginButton.setAttribute('disabled', 'disabled');
    } else {
      loginButton.removeAttribute('disabled');
    }
  }

  render() {
    window.onload = this.btnVerification;
    return (
		<section className="login-section">

			<p>Log In to Skype</p>
			<form action="/..." method="POST" name="LogIn">
				<label>Username:</label>
				<input type="text" name="username" onKeyUp={this.btnVerification} />

				<label>Password:</label>
				<input type="password" name="password" onKeyUp={this.btnVerification} />

				<input type="checkbox" name="remember" />
				<label>Remember me</label>

				<button onClick={this.props.login} name="login_btn">Log In</button>
			</form>
			<Link to="/register" id="bottom-login-tip">Do not have account? Please click <span>Register</span></Link>
		</section>
    );
  }
}

export default Login;