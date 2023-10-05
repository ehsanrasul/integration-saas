import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BackgroundIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1344px;
  height: 1089.39px;
  opacity: 0.72;
`;
const EditProfileChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-gold-300);
  width: 1607px;
  height: 68px;
`;
const Oria1Modifie1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 32.01px;
  height: 34.78px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 25%;
    height: 100%;
    left: 2%;
    object-fit: fill;
  }
  
`;
const Chat = styled.div`
  position: absolute;
  top: 4px;
  left: 36px;
  font-weight: 600;
  color : white;
  @media (max-width: 768px) {
    font-size: 12px;
    left : 30%;
  }
`;
const Oria1Modifie1Parent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 81px;
  height: 34.78px;
    @media (min-width: 768px) {
    /* Apply styles for larger screens */
    height: 3%; /* Adjust the height for larger screens */
  }
`;
const Tools1 = styled.div`
  position: absolute;
  top: 0px;
  left: 25px;
  font-weight: 600;
  color : white;
  @media (max-width: 768px) {
    font-size: 10px;
    left : 60%;
  }
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 48.82%;
  width: 27.03%;
  top: 0.18%;
  right: 72.97%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  @media (max-width: 768px) {
    object-fit:fill;
    left : 0%;
    height:30%;
    width:100%;
  }
`;
const Tools = styled.div`
  position: absolute;
  top: 0.3%;
  left: 12%;
  width: 74px;
  height: 71.45px;

  @media (max-width: 768px) {
    left : 5%;
  }
  
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 45.82%;
  width: 15.13%;
  top: 7.18%;
  right: 84.87%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  @media (max-width: 768px) {
    height:30%;
    width:100%;
    object-fit:fill;
    left:;
  }
`;
const DataBase1 = styled.div`
  position: absolute;
  top: 0.3%;
  left: 23%;
  width: 119px;
  height: 71.62px;
  @media (max-width: 768px) {
    left : 10%;
  }
`;
const VectorIcon2 = styled.img`
  position: absolute;
  height: 43.12%;
  width: 20.1%;
  top: 5.88%;
  right: 79.9%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  @media (max-width: 768px) {
    height:30%;
    width:100%;
    object-fit:fill;
    left:;
  }
`;
const Settings1 = styled.div`
  position: absolute;
  top: 3px;
  left: 37%;
  width: 100px;
  height: 73.81px;
  @media (max-width: 768px) {
    left:20%;
  }
`;
const Community1 = styled.div`
  position: absolute;
  top: 0px;
  left: 29px;
  font-weight: 600;
  color : white;
  @media (max-width: 768px) {
    font-size: 12px;
    left: 60%;
  }
`;
const VectorIcon3 = styled.img`
  position: absolute;
  height: 43.3%;
  width: 17.27%;
  top: 8.24%;
  right: 83.45%;
  bottom: -1.54%;
  left: -0.72%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  @media (max-width: 768px) {
    height:30%;
    width:100%;
    object-fit:fill;
    left:;
  }
`;
const Community = styled.div`
  position: absolute;
  top: 3px;
  left: 50%;
  width: 139px;
  height: 65.08px;
  @media (max-width: 768px) {
    left:27%;
  }
`;

const Nav = styled.div`
  position: absolute;
  top: 17px;
  left: 0%;
  width: 761px;
  height: 76.81px;
  color: var(--color-white);
  color : white;
  @media (min-width: 768px) {
  /* Adjust the left position for larger screens */
  left: 0%; /* Adjust this value as needed */
  width: 100%; /* Adjust the width for larger screens */
  max-width: 1024px; /* Set a maximum width for larger screens */
  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
  }
}
`;
const LukeJohn = styled.div`
  position: absolute;
  top: 13px;
  left: 60px;
  font-weight: 600;
  color : white;
  @media (max-width: 768px) {
    font-size:12px;
  }
`;
const ProfileChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  width: 52px;
  height: 52px;
  object-fit: cover;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Icon = styled.img`
  position: absolute;
  top: 18px;
  left: 161px;
  width: 8.06px;
  height: 17.8px;
  @media (max-width: 768px) {
    height : 15px;
    width: 3.06px;
    left: 75%;
    bottom: 10%
}
`;
const Profile = styled.div`
  position: absolute;
  top: 8px;
  left: 85%;
  width: 169.06px;
  height: 52px;
  color: var(--color-white);
  @media (max-width: 768px) {
    left:70%;
  }
`;
const EditProfileItem = styled.div`
  position: absolute;
  top: 69px;
  left: 0px;
  background: linear-gradient(123.14deg, #fff, rgba(255, 255, 255, 0) 99.97%);
  width: 1600px;
  height: 1962px;
`;
const Profile1 = styled.div`
  position: absolute;
  top: 87px;
  left: 156px;
  font-size: var(--font-size-xl);
  font-weight: 600;
  @media (max-width: 768px) {
    left:10%;
  }
`;
const FirstName = styled.div`
  position: absolute;
  top: 166px;
  left: 156px;
  font-weight: 600;
  @media (max-width: 768px) {
    left:10%;
  }
`;
const EmailAddress = styled.div`
  position: absolute;
  top: 287px;
  left: 156px;
  font-weight: 600;
  @media (max-width: 768px) {
    left:10%;
    top : 34%;
  }
`;
const Password = styled.div`
  position: absolute;
  top: 462px;
  left: 156px;
  font-weight: 600;
  @media (max-width: 768px) {
    left:10%;
  }
`;
const CurrentPassword = styled.div`
  position: absolute;
  top: 561px;
  left: 156px;
  font-weight: 600;
  @media (max-width: 768px) {
    left:10%;
  }
`;
const NewPassword = styled.div`
  position: absolute;
  top: 666px;
  left: 156px;
  font-weight: 600;
  @media (max-width: 768px) {
    left:10%;
  }
`;
const ConfirmNewPassword = styled.div`
  position: absolute;
  top: 783px;
  left: 156px;
  font-weight: 600;
  @media (max-width: 768px) {
    left:10%;
  }
`;
const LastName = styled.div`
  position: absolute;
  top: 166px;
  left: 737px;
  font-weight: 600;
  @media (max-width: 768px) {
    left:10%;
    top:25%;
  }
`;
const EditProfileInner = styled.img`
  position: absolute;
  top: 133.75px;
  left: 156px;
  width: 1089px;
  height: 0.5px;
  
`;
const EditProfileChild1 = styled.img`
  position: absolute;
  top: 420.75px;
  left: 156px;
  width: 1089px;
  height: 0.5px;
`;
const RectangleDiv = styled.input`
  position: absolute;
  top: 202px;
  left: 155px;
  border-radius: var(--br-3xs);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.26);
  border: 0.5px solid var(--color-black);
  box-sizing: border-box;
  width: 500px;
  height: 43px;
  @media (max-width: 768px) {
    left:10%;
    width :380px;
    heigth:33px;
  }
`;
const EditProfileChild2 = styled.input`
  position: absolute;
  top: 323px;
  left: 155px;
  border-radius: var(--br-3xs);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.26);
  border: 0.5px solid var(--color-black);
  box-sizing: border-box;
  width: 463px;
  height: 43px;
  @media (max-width: 768px) {
    left:10%;
    width :380px;
    heigth:33px;
    top : 37.5%;
  }
`;
const EditProfileChild3 = styled.input`
  position: absolute;
  top: 605px;
  left: 155px;
  border-radius: var(--br-3xs);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.26);
  border: 0.5px solid var(--color-black);
  box-sizing: border-box;
  width: 1090px;
  height: 43px;
  @media (max-width: 768px) {
    left:10%;
    width :380px;
    heigth:33px;
  }
`;
const EditProfileChild4 = styled.input`
  position: absolute;
  top: 716px;
  left: 155px;
  border-radius: var(--br-3xs);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.26);
  border: 0.5px solid var(--color-black);
  box-sizing: border-box;
  width: 1090px;
  height: 43px;
  @media (max-width: 768px) {
    left:10%;
    width :380px;
    heigth:33px;
  }
`;
const EditProfileChild5 = styled.input`
  position: absolute;
  top: 827px;
  left: 155px;
  border-radius: var(--br-3xs);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.26);
  border: 0.5px solid var(--color-black);
  box-sizing: border-box;
  width: 1090px;
  height: 43px;
  @media (max-width: 768px) {
    left:10%;
    width :380px;
    heigth:33px;
  }
`;
const EditProfileChild6 = styled.input`
  position: absolute;
  top: 202px;
  left: 737px;
  border-radius: var(--br-3xs);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.26);
  border: 0.5px solid var(--color-black);
  box-sizing: border-box;
  width: 508px;
  height: 43px;
  @media (max-width: 768px) {
    left:10%;
    width :380px;
    heigth:33px;
    top : 28.5%;
  }
`;
const ChangingYourPassword = styled.div`
  position: absolute;
  top: 495px;
  left: 155px;
  font-size: var(--font-size-base);
  line-height: 25px;
  @media (max-width: 768px) {
    left:10%;
    font-size:14px;
  }
`;
const NextChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-3xs);
  background-color: var(--color-gainsboro);
  width: 106px;
  height: 52px;
`;
const NextItem = styled.div`
  position: absolute;
  top: 0px;
  left: 125px;
  border-radius: var(--br-3xs);
  background-color: var(--color-gold-300);
  width: 106px;
  height: 52px;
`;
const Save = styled.div`
  position: absolute;
  top: 12px;
  left: 153px;
  font-weight: 600;
  color : white;
`;
const Canel = styled.div`
  position: absolute;
  top: 11px;
  left: 25px;
  font-weight: 600;
  color: var(--color-dimgray-200);
`;
const Next = styled.div`
  position: absolute;
  top: 916px;
  left: 155px;
  width: 231px;
  height: 52px;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--color-white);
  @media (max-width: 768px) {
    left:30%;
  }
`;

const EditProfileRoot = styled.div`
  position: absolute;
  background-color: var(--color-lavenderblush);
  width: 100%;
  height: 1000px;
  overflow: hidden;
  font-size: var(--font-size-lg);
  color: var(--color-black);
  font-family: var(--font-poppins);
`;

const EditProfile = () => {

  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("");
  const [confNewPassword, setConfNewPassword] = useState("");
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };


  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfNewPasswordChange = (e) => {
    setConfNewPassword(e.target.value);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();

        alert("dasdasdas")
  
        fetch("http://localhost:3001/user/update-my-password", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        currentPassword:currentPassword,
        newPassword: newPassword,
        confNewPassword : confNewPassword
      })
    })
  .then(response => response.json())
  .then(data => {
    if (data) {
      navigate('/home');
      // Do something after successful login
    } else {
      console.log("Login failed");
      // Do Nothing if fails
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });

  };



  return (
    <EditProfileRoot>
      <BackgroundIcon alt="" src="/background3.svg" />
      <EditProfileChild />
      <Nav>
        <Oria1Modifie1Parent>
          <Link to="/home">
          <Oria1Modifie1 alt="" src="/oria-1--modifie-1@2x.png" />
          <Chat>Chat</Chat>
          </Link>
        </Oria1Modifie1Parent>
        <Tools>
          <Link to="/personal">
          <Tools1>Tools</Tools1>
          <VectorIcon alt="" src="/vector19.svg" />
          </Link>
        </Tools>
        <DataBase1>
          <Link to="/data-base">
          <Tools1>Data Base</Tools1>
          <VectorIcon1 alt="" src="/vector20.svg" />
          </Link>
        </DataBase1>
        <Settings1>
          <Link to="/setting">
          <Tools1>Settings</Tools1>
          <VectorIcon2 alt="" src="/vector21.svg" />
          </Link>
        </Settings1>
        <Community>
          <Link to="/community">
          <Community1>Community</Community1>
          <VectorIcon3 alt="" src="/vector22.svg" />
          </Link>
        </Community>
      </Nav>
      <Profile>
        <Link to="/edit-profile">
        <LukeJohn>Luke John</LukeJohn>
        <ProfileChild alt="" src="/ellipse-51@2x.png" />
        <Icon alt="" src="/1.svg" />
        </Link>
      </Profile>
      <div>
      <EditProfileItem />
      <Profile1>Profile</Profile1>
      <FirstName>First name</FirstName>
      <EmailAddress>Email address</EmailAddress>
      <Password>Password</Password>
      <CurrentPassword>Current Password</CurrentPassword>
      <NewPassword>New Password</NewPassword>
      <ConfirmNewPassword>Confirm New Password</ConfirmNewPassword>
      <LastName>Last name</LastName>
      <EditProfileInner alt="" src="/vector-71.svg" />
      <EditProfileChild1 alt="" src="/vector-71.svg" />
      <RectangleDiv placeholder="Enter First Name"/>
      <EditProfileChild2 placeholder="Enter Email Address" onChange={handleEmailChange} />
      <EditProfileChild3 placeholder="Enter Current Password" onChange={handleCurrentPasswordChange}/>
      <EditProfileChild4 placeholder="Enter New Password" onChange={handleNewPasswordChange}/>
      <EditProfileChild5 placeholder="Confirm New Password" onChange={handleConfNewPasswordChange}/>
      <EditProfileChild6 placeholder="Enter Last Name"/>
      <ChangingYourPassword>
        Changing your password will log you out of every device except this one.
      </ChangingYourPassword>
      <Next>
      <Link to="/create-bot">
        <NextChild />
        <Canel>Canel</Canel>
        </Link>
        <Link to="/home">
        <NextItem />
        <Save onClick={handleSaveClick}>Save</Save>
        </Link>
      </Next>
      </div>
    </EditProfileRoot>
  );
};

export default EditProfile;
