import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const BackgroundIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1424px;
  height: 931px;
  opacity: 0.35;
`;

const SignUpButton = styled(Button)`
  position: absolute;
  top: 0px;
  left: calc(10% - 8px);
  font-weight: 500;
  text-align: right;
  opacity: 0.7;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ForgotPasswordButton = styled(Button)`
  position: absolute;
  top: 0px;
  right: calc(10% - 8px);
  font-weight: 500;
  text-align: right;
  opacity: 0.7;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SignUpParent = styled.div`
  position: absolute;
  top: 555px;
  left: calc(50% - 242px);
  width: 484px;
  height: 32px;
`;

const SignInBoxChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 242px);
  border-radius: var(--br-xl);
  background: linear-gradient(123.14deg, #fff, rgba(255, 255, 255, 0) 99.97%);
  width: 484px;
  height: 349px;
`;

const SignInBoxItem = styled.div`
  position: absolute;
  top: 168px;
  left: calc(50% - 225px);
  border-radius: var(--br-3xs);
  border: 2px solid var(--color-gray-600);
  box-sizing: border-box;
  width: 450px;
  height: 66px;
`;

const SignInBoxInner = styled.div`
  position: absolute;
  top: 54px;
  left: calc(50% - 225px);
  border-radius: var(--br-3xs);
  border: 2px solid var(--color-gray-600);
  box-sizing: border-box;
  width: 450px;
  height: 66px;
`;

const Email = styled.input`
  position: absolute;
  top: 23px;
  left: calc(50% - 225px);
  font-weight: 600;
  width: 100%;
  height: 32px;
  border: none;
  background-color: transparent;
  outline: none;
`;

const Email1 = styled.input`
  position: absolute;
  top: 71px;
  left: calc(50% - 208px);
  font-weight: 600;
  opacity: 0.2;
  width: 100%;
  height: 32px;
  border: none;
  background-color: transparent;
  outline: none;
`;

const Password = styled.input`
  position: absolute;
  top: 134px;
  left: calc(50% - 223px);
  font-weight: 600;
  width: 100%;
  height: 32px;
  border: none;
  background-color: transparent;
  outline: none;
`;

const Password1 = styled.input`
  position: absolute;
  top: 184px;
  left: calc(50% - 206px);
  font-weight: 600;
  opacity: 0.3;
  width: 100%;
  height: 32px;
  border: none;
  background-color: transparent;
  outline: none;
`;

const SignInButton = styled(Button)`
  width: 450px;
  position: absolute;
  top: 269px;
  left: 17px;
`;

const SignInBox = styled.div`
  position: absolute;
  top: 199px;
  left: calc(50% - 242px);
  width: 484px;
  height: 349px;
`;

const SignIntoYour = styled.div`
  position: absolute;
  top: 135px;
  left: calc(50% - 126px);
  font-size: var(--font-size-3xl);
  font-weight: 600;
`;

const Oria1Modifie1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  right :200px;
  width: 79px;
  height: 85px;
  object-fit: cover;
`;

const Oria = styled.div`
  position: absolute;
  top: 13px;
  left: 84.79px;
  font-weight: 600;
  display: inline-block;
  width: 119.21px;
  height: 65.74px;
`;

const Logo = styled.div`
  position: absolute;
  top: 10%;
  left: 40%;
  width: 30%;
  height: 50%;
  text-align: left;
  font-size: var(--font-size-31xl);
`;

const Or = styled.div`
  position: absolute;
  top: 16px;
  left: calc(50% - 12.5px);
  font-weight: 500;
  opacity: 0.7;
`;

const OtherOptionsChild = styled(Button)`
  width: 147px;
  height: 40px;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 20px; /* Set border radius for round edges */

  animation: gradientAnimation 6s ease infinite;
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &:hover {
    background-color: #333;
  }
`;

const OtherOptionsItem = styled(Button)`
  width: 147px;
  height: 40px;
  position: absolute;
  top: 0px;
  left: 258px;
  border-radius: 20px; /* Set border radius for round edges */
`;

const OtherOptionsInner = styled.img`
  position: absolute;
  height: 44.9%;
  width: 6.95%;
  top: 10%;
  right: 77.91%;
  bottom: 27.1%;
  left: 15.13%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

const GroupIcon = styled.img`
  position: absolute;
  height: 44%;
  width: 6.95%;
  top: 10%;
  right: 14.72%;
  bottom: 28%;
  left: 78.32%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

const OtherOptions = styled.div`
  position: absolute;
  top: 618px;
  left: calc(50% - 202px);
  width: 405px;
  height: 64px;
  font-size: var(--font-size-5xl);
`;

const LoginRoot = styled.div`
  position: relative;
  background-color: var(--color-lavenderblush);
  width: 100%;
  height: 931px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-poppins);
`;

// const Login = () => {
//   return (
//     <LoginRoot>
//       <BackgroundIcon alt="" src="/background8.svg" />
//       <SignUpParent>
//         <SignUpButton variant="" href="/sign-up">Sign Up</SignUpButton>
//         <ForgotPasswordButton variant="" href="">Forgot Password?</ForgotPasswordButton>
//       </SignUpParent>
//       <SignInBox>
//         <SignInBoxChild />
//         <SignInBoxItem />
//         <SignInBoxInner />
//         <Email placeholder="Enter your email"  disabled/>
//         <Email1 placeholder="Email" />
//         <Password placeholder="Enter your password" disabled />
//         <Password1 placeholder="Password" />
//         <SignInButton variant="warning" href="/home">
//           Sign In
//         </SignInButton>
//       </SignInBox>
//       <Logo>
//         <Oria1Modifie1 alt="" src="/oria-1--modifie-14@2x.png" />
//         <Oria>Oria</Oria>
//       </Logo>
//       <OtherOptions>
//         <Or>Or</Or>
//         <OtherOptionsChild variant="outline-info" href="https://www.google.com/" />
//         <OtherOptionsItem variant="outline-info" href="https://www.linkedin.com/login" />
//         <OtherOptionsInner alt="" src="/group-7.svg" />
//         <GroupIcon alt="" src="/group-8.svg" />
//       </OtherOptions>
//     </LoginRoot>
//   );
// };


const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignInClick = () => {

    console.log("Signin button clicked")


    fetch("http://localhost:3001/user/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
  .then(response => response.json())
  .then(data => {
    if (data) {
      console.log("Login successful");
      navigate('/home');
 
      // Do something after successful login
    } else {
      console.log("Login failed");
      // Do something if login fails
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });


  };

  return (
    <LoginRoot>
      <BackgroundIcon alt="" src="/background8.svg" />
      <SignUpParent>
        <SignUpButton variant="" href="/sign-up">
          Sign Up
        </SignUpButton>
        <ForgotPasswordButton variant="" href="">
          Forgot Password?
        </ForgotPasswordButton>
      </SignUpParent>
      <SignInBox>
        <SignInBoxChild />
        <SignInBoxItem />
        <SignInBoxInner />
        <Email
          placeholder="Enter your email" 
          disabled
          />
        <Email1
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <Password
          placeholder="Enter your password"
          disabled
        />
        <Password1
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <SignInButton variant="warning" onClick={handleSignInClick} >
          Sign In
        </SignInButton>
      </SignInBox>
      <Logo>
        <Oria1Modifie1 alt="" src="/oria-1--modifie-14@2x.png" />
        <Oria>Oria</Oria>
      </Logo>
      <OtherOptions>
        <Or>Or</Or>
        <OtherOptionsChild variant="outline-info" href="https://www.google.com/" />
        <OtherOptionsItem
          variant="outline-info"
          href="https://www.linkedin.com/login"
        />
        <OtherOptionsInner alt="" src="/group-7.svg" />
        <GroupIcon alt="" src="/group-8.svg" />
      </OtherOptions>
    </LoginRoot>
  );
};




export default Login;