import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const BackgroundIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 90%;
  height: 50%;
  opacity: 0.35;
`;
const SignInBoxChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 262px);
  border-radius: var(--br-xl);
  background: linear-gradient(123.14deg, #fff, rgba(255, 255, 255, 0) 99.97%);
  width: 524px;
  height: 312px;
`;
const SignInBoxItem = styled(Button)`
  width: 488.1870422363281px;
  position: absolute;
  top: 116.89px;
  left: calc(50% - 244.09px);
  background: linear-gradient(45deg, #4285F4, #EA4335, #FBBC05, #34A853);
  background-size: 400% 400%;
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

const SignInBoxInner = styled(Button)`
  width: 488.1870422363281px;
  position: absolute;
  top: 204.36px;
  left: calc(50% - 244.09px);
  background: linear-gradient(45deg, #0077B5, #0077B5, #0077B5, #0077B5);
  background-size: 400% 400%;
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
    background-color: #0077B5;
  }
`;


const RectangleButton = styled(Button)`
  width: 488.1870422363281px;
  position: absolute;
  top: 40.8px;
  left: calc(50% - 244.09px);
  background: linear-gradient(45deg, #D44638, #D44638, #D44638, #D44638);
  background-size: 400% 400%;
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
    background-color: #D44638;
  }
`;



const SignUpWith = styled(Button)`
  position: absolute;
  top: 52.14px;
  left: calc(50% - 107.44px);
  font-weight: 600;
  display: inline-block;
  width: 214.88px;
  height: 50.27px;
  background-color: black; /* Set the background color to black */
  color: white; /* Set the text color to white */
  border: none; /* Remove the border */
  &:hover {
    background-color: #333; /* Darken the background color on hover */
  }
`;

const GroupIcon = styled.img`
  position: absolute;
  height: 11.9%;
  width: 10.49%;
  top: 65.51%;
  right: 75.95%;
  bottom: 25.59%;
  left: 15.56%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const SignInBoxChild1 = styled.img`
  position: absolute;
  height: 11.9%;
  width: 6.49%;
  top: 37.5%;
  right: 75.95%;
  bottom: 44.97%;
  left: 17.56%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 15%;
  width: 6.49%;
  top: 12%;
  right: 75.95%;
  bottom: 74.04%;
  left: 17.56%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const SignInBox = styled.div`
  position: absolute;
  top: 213px;
  left: calc(50% - 262px);
  width: 524px;
  height: 312px;
`;
const SignIntoYour = styled.div`
  position: absolute;
  top: 154px;
  left: calc(50% - 126px);
  font-size: var(--font-size-3xl);
  font-weight: 600;
`;
const Oria1Modifie1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 104px;
  height: 113px;
  object-fit: cover;
`;
const Oria = styled.div`
  position: absolute;
  top: 30px;
  left: 107px;
  font-weight: 600;
  display: inline-block;
  width: 136px;
  height: 75px;
`;
const Logo = styled.div`
  position: absolute;
  top: 24px;
  left: 43%;
  width: 30%;
  height: 10%;
  text-align: left;
  font-size: var(--font-size-31xl);
`;
const LoginOptionRoot = styled.div`
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

const LoginOption = () => {

  return (
    <LoginOptionRoot>
      <BackgroundIcon alt="" src="/background9.svg" />
      <SignInBox>
        <SignInBoxChild />
        {/* <SignInBoxItem variant="" href="" onClick={handleGoogleAuthClick}> */}
        <SignInBoxItem variant="" href="http://localhost:3001/auth/google">
          Sign Up With Google
        </SignInBoxItem>
        <SignInBoxInner variant="" href="https://www.linkedin.com/login">
          Login With Linked In
        </SignInBoxInner>
        <RectangleButton variant="" href="/sign-up">
          Sign Up With Email
        </RectangleButton>
        
      
        
        <GroupIcon alt="" src="/group-81.svg" />
        <SignInBoxChild1 alt="" src="/group-71.svg" />
        <VectorIcon alt="" src="/vector31.svg" />
      </SignInBox>
      <SignIntoYour>Sign into your account</SignIntoYour>
      <Logo>
        <Oria1Modifie1 alt="" src="/oria-1--modifie-13@2x.png" />
        <Oria>Oria</Oria>
      </Logo>
    </LoginOptionRoot>
  );
};

export default LoginOption;