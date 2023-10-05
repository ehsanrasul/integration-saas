import React from 'react';
import './Style/style.css';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

class SlideNavbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isSignupOpen: false,
      isLoginOpen: false,
      companyName: '',
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  }

  toggleSignup = () => {
    this.setState({ isSignupOpen: !this.state.isSignupOpen, isLoginOpen: false });
  };

  toggleLogin = () => {
    this.setState({ isLoginOpen: !this.state.isLoginOpen, isSignupOpen: false });
  };

  handleCompanyNameChange = (event) => {
    this.setState({ companyName: event.target.value });
  };

  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handleLastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };


  handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here (replace the alert with your actual login logic)
    const loginData = {
      email: this.state.email, // Use userName for login email
      password: this.state.password,
    };

    fetch("http://localhost:3001/user/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('success:', data);
        if (data) {
          console.log('Login successful');
          // After successful Login, navigate to the home page
          alert(`Logging in with data: ${JSON.stringify(loginData)}`);
          // Navigate to the appropriate route here (e.g., '/home')
          // this.props.history.push('/home');
        } else {
          alert('Invalid Credentials');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  handleSignup = (event) => {
    event.preventDefault();
    // Handle signup logic here (replace the alert with your actual signup logic)
    const signupData = {
      companyName: this.state.companyName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };

    fetch("http://localhost:3001/user/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('success:', data);
        if (data) {
          console.log('Registration successful');
          // After successful sign-up, navigate to the home page
          alert(`Signing up with data: ${JSON.stringify(signupData)}`);
          // Navigate to the appropriate route here (e.g., '/home')
          this.props.history.push('/home');
        } else {
          console.log('Registration failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  render() {
    return (
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className={`signup ${this.state.isSignupOpen ? 'open' : ''}`}>
          <form id="SignupForm" onSubmit={this.handleSignup}>
            <label htmlFor="chk" aria-hidden="true" onClick={this.toggleSignup}>
              Sign up
            </label>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              id="companyName"
              value={this.state.companyName}
              onChange={this.handleCompanyNameChange}
              required=""
            />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              id="firstName"
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
              required=""
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              id="lastName"
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
              required=""
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
              required=""
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              required=""
            />
            <button type="submit">Sign up</button>
          </form>
        </div>

        <div className={`login ${this.state.isLoginOpen ? 'open' : ''}`}>
          <form id="loginForm" onSubmit={this.handleLogin}>
            <label htmlFor="chk" aria-hidden="true" onClick={this.toggleLogin}>
              Login
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email" // Use "userName" for login
              id="loginEmail"
              value={this.state.userName}
              onChange={this.handleEmailChange}
              required=""
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="passwordLogin"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              required=""
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SlideNavbar;
