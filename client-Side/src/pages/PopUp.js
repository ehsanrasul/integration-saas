import { useState, useEffect } from "react";
import { Button, Typography, TextField } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PopUpBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopUpContainer = styled.div`
  padding: 20px;
  border-radius: var(--br-8xs);
  background-color: var(--color-white);
  text-align: center;
  width: 100px;

  @media (max-width: 600px) {
    /* Adjust size for smaller screens */
    width: 90%;
  }
`;

const Email = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
  opacity: 0.9;
`;

const FirstName = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
  opacity: 0.9;
`;

const OriaWillUse = styled.p`
  margin-bottom: 20px;
  text-align: left;
  color: #0097ff;
`;

const PopUp = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  // Set showPopup to true after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    },1000);

    return () => clearTimeout(timer);
  }, []);

  // Function to close the popup and navigate to start.js
  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/");
  };

  if (!showPopup) return null;

  return (
    <PopUpBackground>
      <PopUpContainer>
        <Email>Email *</Email>
        <TextField variant="outlined"  style={{ marginBottom: "20px" ,width:"10px"}} label="Email" />

        <FirstName>First Name</FirstName>
        <TextField variant="outlined"  style={{ marginBottom: "20px" ,width:"40px"}} label="First Name" />

        <OriaWillUse>
          Oria will use the information you provide on the form to be in touch with you and to provide updates and marketing.
        </OriaWillUse>

        <Button variant="contained" color="warning" fullWidth onClick={handleClosePopup} style={{ marginBottom: "10px" }}>
          Join the waiting list
        </Button>
      </PopUpContainer>
    </PopUpBackground>
  );
};

export default PopUp;
