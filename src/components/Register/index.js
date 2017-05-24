import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

class Register extends React.Component {

	// button state verification
  btnVerification(){
    const username = document.forms['Register'].elements['username'].value;
    const password = document.forms['Register'].elements['password'].value;
    const registerButton = document.forms['Register'].elements['register_btn'];

    if (username === '' || password === ''){
      registerButton.setAttribute('disabled', 'disabled');
    } else {
      registerButton.removeAttribute('disabled');
    }
  }

  render() {
  	setTimeout((window.onload = this.btnVerification), 10);
    return (
		<section className="sign-section">

			<p>Sign-Up Form</p>
			<form action="/..." method="POST" name="Register">
				<label>Username:</label>
				<input type="text" name="username" onKeyUp={this.btnVerification}/>

				<label>Email:</label>
				<input type="email" name="email" onKeyUp={this.btnVerification}/>
				
				<label>Password:</label>				
				<input type="password" name="password" onKeyUp={this.btnVerification}/>

				<label>Confirm password:</label>
				<input type="password" name="confirm" onKeyUp={this.props.confirmPassword}/>
				
				<button onClick={this.props.register} name="register_btn">Sign Up</button>
			</form>
			<Link to="/login">Already have an account? Please <span>Log In</span></Link>
		</section>
    );
  }
}

export default Register;