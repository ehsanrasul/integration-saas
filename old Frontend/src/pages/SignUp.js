import React, { useState } from 'react';
import { Button, Typography, TextField, Box } from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SignUpBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-lavenderblush);
  z-index: 9999;
`;

const SignUpContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  text-align: center;
`;

const SignUpTitle = styled.div`
  font-size: var(--font-size-7xl);
  font-weight: 600;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const SignUpButton = styled(Button)`
  width: 100%;
`;

const AlreadyHaveAnAccount = styled(Button)`
  font-weight: 500;
  opacity: 0.7;
  width: 264px;
  height: 40px;
  background-color: transparent;
  color: black;
  border: none;
  outline: none;
  &:hover {
    background-color: grey;
    color: black;
  }
`;

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName:'',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // In a real application, send the user's sign-up data to the server
    // For this example, we'll just show an alert with the user's entered data
    
    fetch("http://localhost:3001/user/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('success:', data);
        if (data) {          
          console.log('Registration successful');
          // After successful sign-up, navigate to the home page
          alert(`Signing up with data: ${JSON.stringify(formData)}`);
          navigate('/home');
      
        } else {
          console.log('Registration failed');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

    
  };

  return (
    <SignUpBackground>
      <SignUpContainer>
        <SignUpTitle>Create an account</SignUpTitle>
        <SignUpForm onSubmit={handleSignUp}>
        <TextField
            name="companyName"
            variant="outlined"
            fullWidth
            label="Company Name"
            value={formData.companyName}
            onChange={handleInputChange}
            required
          />
          <TextField
            name="firstName"
            variant="outlined"
            fullWidth
            label="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <TextField
            name="lastName"
            variant="outlined"
            fullWidth
            label="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
          <TextField
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            label="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <TextField
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            label="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <SignUpButton variant="contained" color="warning" type="submit">
            Sign Up for Free
          </SignUpButton>
        </SignUpForm>
        <AlreadyHaveAnAccount variant="" href="/login">
          Already have an account?
        </AlreadyHaveAnAccount>
      </SignUpContainer>
    </SignUpBackground>
  );
};

export default SignUp;