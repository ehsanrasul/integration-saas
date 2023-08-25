import React from "react";
import { useState, useEffect, useRef } from "react";
import { Button, Typography, TextField, Checkbox, FormControlLabel } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BackgroundIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;  
const Oria1Modifie1 = styled.img`
  position: absolute;
  top: 18px;
  left: 6%;
  width: 346px;
  height: 376px;
  object-fit: cover;
  opacity: 0.5;
`;
const FooterChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background: linear-gradient(
    94.53deg,
    #ffc700,
    #ff008d 28.13%,
    #0097ff 61.98%,
    #ff5f00
  );
  width: 1600px;
  height: 418px;
  opacity: 0.5;
`;
const Oria1Modifie11 = styled.img`
  position: absolute;
  top: 0px;
  left: -100px;
  width: 98.01px;
  height: 106.49px;
  object-fit: cover;
`;
const Oria = styled.div`
  position: absolute;
  top: 15%;
  left: 0%;
  font-weight: 600;
  display: inline-block;
  width: 128.16px;
  height: 70.68px;
`;
const Logo = styled.div`
  position: absolute;
  top: 37px;
  left: 35%;
  width: 229px;
  height: 106.49px;
  text-align: left;
`;
const PrivacyPolicy = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 500;
  display: inline-block;
  width: 10%;
  @media (max-width: 768px) {
    font-size:10px;
  }
`;
const TermsOfService = styled.div`
  position: absolute;
  top: 0px;
  left: 14%;
  font-weight: 500;
  display: inline-block;
  width: 10%;
  @media (max-width: 768px) {
    font-size:10px;
  }
`;
const Contact = styled.div`
  position: absolute;
  top: 0px;
  left: 27%;
  font-weight: 500;
  display: inline-block;
  width: 10%;
  @media (max-width: 768px) {
    font-size:10px;
  }
`;
const Faqs = styled.div`
  position: absolute;
  top: 0px;
  left: 42%;
  font-weight: 500;
  display: inline-block;
  width: 10%;
  @media (max-width: 768px) {
    font-size:10px;
  }
`;
const PrivacyPolicyParent = styled.div`
  position: absolute;
  top: 1%;
  left: 20%;
  width: 60%;
  height: 19%;
  font-size: var(--font-size-base);
  font-family: var(--font-roboto);
`;
const Copywrite2023 = styled.div`
  position: absolute;
  top: 2.1%;
  left: 15%;
  font-size: var(--font-size-xs);
  font-family: var(--font-roboto);
  display: inline-block;
  width: 40%;
`;
const FooterItem = styled.img`
   position: absolute;
  top: 371px;
  left: 13%;
  width: 40%;
  height: 24px;

  @media (max-width: 768px) {
    top:390px;
  }
`;
const OriaIsYour = styled.div`
  position: absolute;
  top: 245px;
  left: 5% ;
  font-size: var(--font-size-sm);
  line-height: 143.4%;
  display: inline-block;
  width: 60%;
  height: 41%;
   /* Decrease font size on screens equal to or smaller than 768px wide */
  @media (max-width: 768px) {
    font-size:11px;
  }
`;
const Footer = styled.div`
  position: absolute;
  top: 3331px;
  width: 150%;
  height: 418%;

  @media (max-width: 768px) {
    top:3700px;
  }
`;
const Oria1Modifie12 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 30%;
  height: 80%;
  object-fit: fill;
`;
const Oria1 = styled.div`
  position: absolute;
  top: 15.33px;
  left: 33%;
  font-weight: 600;
  display: inline-block;
  width: 130.37px;
  height: 70.68px;
`;
const Logo1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 232.93px;
  height: 106.49px;
`;
const JoinFree = styled(Button)`
  width: 17%;
  position: absolute;
  top: 23px;
  left: 70%;
  color:yellow;
  border-radius: 50;
  text-transform: uppercase; 
  display:inline-block;
  height:54px;
  font-weight:600px;
`;
const Header = styled.div`
  position: absolute;
  top: 35px;
  left: 5%;
  right:65%;
  width: 95%;
  height: 106.49px;
  text-align: left;
`;
const YourAiAssistant = styled.p`
  margin: 0px 0px 0px 0px;
`;
const YourAiAssistantContainer = styled.b`
  position: absolute;
  top: 10%;
  left: 15% ;
  font-size: var(--font-size-71xl);
  line-height: 80%;

  /* Decrease font size on screens equal to or smaller than 768px wide */
  @media (max-width: 768px) {
    font-size: 45px;
  }
`;
const WhoIsOria = styled.div`
  position: absolute;
  top: 993px;
  left: 37% ;
  font-size: var(--font-size-41xl);
  line-height: 102px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 34px;
    left 33%;
  }
`;
const OriaIsYour1 = styled.div`
  position: absolute;
  top: 30%;
  left: 13%;
  font-size: var(--font-size-xl);
  line-height: 143.4%;
  display: inline-block;
  width: 80%;
  height: 10%;
  /* Decrease font size on screens equal to or smaller than 768px wide */
  @media (max-width: 768px) {
    font-size: 17px;
    top:27%;
  }
`;
const ReadyChild = styled.div`
  position: absolute;
  top: 0px;
  right: 3%;
  border-radius: var(--br-31xl);
  background: linear-gradient(
    -83.66deg,
    rgba(255, 255, 255, 0.5),
    rgba(255, 140, 228, 0.5)
  );
  width: 117%;
  height: 23%;
`;
const Cta = styled(Button)`
width: 30%;
position: absolute;
top: 15%;
left : -15%;
font-size : 8px;
border-radius: 50;
text-transform: uppercase; 
display:inline-block;
height:54px;
font-weight:600px;
 @media (max-width: 768px) {
  top : 15%;
  font-size:3px;
  width :90%;
  left:-10%;
}
`;
const ReadyToPropel = styled.div`
  position: absolute;
  top: 49px;
  left: -15%;
  line-height: 100%;
  font-weight: 600;

  /* Decrease font size on screens equal to or smaller than 768px wide */
  @media (max-width: 768px) {
    font-size: 17px;
    left: -3%;
  }
`;
const SignUpFor = styled.div`
  position: absolute;
  top: 153px;
  left: -10%;
  font-size: var(--font-size-xl);
  line-height: 143.4%;
  display: inline-block;
  width: 90%;
  height: 6%;
  /* Decrease font size on screens equal to or smaller than 768px wide */
  @media (max-width: 768px) {
    font-size: 15px;
    top:80px;
    left: 0%;
  }
`;
const Ready = styled.div`
  position: absolute;
  top: 2910px;
  left: 20%;
  width: 80%;
  height: 40%;
  font-size: var(--font-size-41xl);

  @media (max-width: 768px) {
    width:80%;
    height:30%;
    top:3350px;
    left:20%;
    font-size:10px;
  }
`;
const KeyFeaturesChild = styled.div`
  position: absolute;
  top: 0px;
  left: -5%;
  border-radius: var(--br-31xl);
  background-color: var(--color-white);
  width: 110%;
  height: 80%;
  opacity: 0.5;
`;
const KeyFeatures1 = styled.div`
  position: absolute;
  top: 18px;
  left: calc(50% - 198px);
  font-size: var(--font-size-41xl);
  line-height: 102px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 35px;
    top:3%;
    left: 25%;
  }
`;
const KeyFeaturesItem = styled.img`
  position: absolute;
  top: 18%;
  left: 5%;
  width: 99%;
  height: 500px;

  @media (max-width: 768px) {
    display:none;
  }
`;
const KeyFeaturesInner = styled.img`
  position: absolute;
  top: 55%;
  left: 5%;
  width: 99%;
  height: 5px;
  @media (max-width: 768px) {
    display:none;
  }
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 7%;
  left: 57%;
  width: 30%;
  height: 23%;
  object-fit:fill;
  @media (max-width: 768px) {
    display:none;
  }
`;
const KeyFeaturesChild1 = styled.img`
  position: absolute;
  top: 7%;
  left: 13%;
  width: 30%;
  height: 24%;
  object-fit:fill;
  @media (max-width: 768px) {
    display:none;
  }
`;
const KeyFeaturesChild2 = styled.img`
  position: absolute;
  top: 32%;
  left: 13%;
  width: 30%;
  height: 22.5%;
  object-fit:fill;
  @media (max-width: 768px) {
    display:none;
  }
`;
const KeyFeaturesChild3 = styled.img`
  position: absolute;
  top: 56%;
  left: 13%;
  width: 30%;
  height: 22.5%;
  @media (max-width: 768px) {
    display:none;
  }
`;
const KeyFeaturesChild4 = styled.img`
  position: absolute;
  top: 32%;
  left: 57%;
  width: 30%;
  height: 22.5%;
  @media (max-width: 768px) {
    display:none;
  }
`;
const KeyFeaturesChild5 = styled.img`
  position: absolute;
  top: 56%;
  left: 57%;
  width: 30%;
  height: 22.5%;
  @media (max-width: 768px) {
    display:none;
  }
`;
const AndMuchMore = styled.div`
  position: absolute;
  top: 94px;
  left: calc(50% - 96px);
  line-height: 33px;
  font-weight: 600;
  display: inline-block;
  width: 192px;
  height: 40px;

  @media (max-width: 768px) {
    top:13%;
  }
`;
const DiscoverAllThe = styled.div`
  position: absolute;
  top: 139px;
  left: calc(50% - 168px);
  font-size: var(--font-size-base);
  line-height: 25px;
  display: inline-block;
  width: 336px;


  @media (max-width: 768px) {
    width:;
    height:;
    top:20%;
    left:;
    font-size:12px;
  }
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 21.27%;
  width: 23.21%;
  top: 0%;
  right: 38.39%;
  bottom: 58.73%;
  left: 38.39%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Div = styled.div`
  position: absolute;
  top: 1091px;
  left: 60%;
  width: 50%;
  height: 20%;

  @media (max-width: 768px) {
    width:40%;
    height:20%;
    top:77%;
    left:27%;
    font-size:12px;
  }
`;
const InteractWithEverything = styled.div`
  position: absolute;
  top: 94px;
  left: calc(50% - 149px);
  line-height: 33px;
  font-weight: 600;
  display: inline-block;
  width: 298px;
  height: 40px;

  @media (max-width: 768px) {
    width:120%;
    height:10%;
    top:8%;
    left:7%;
    font-size:12px;
  }
`;
const KeepAllYourContainer = styled.div`
  position: absolute;
  top: 139px;
  left: calc(5  0% - 168px);
  font-size: var(--font-size-base);
  line-height: 25px;

  @media (max-width: 768px) {
    width:180%;
    height:10%;
    top:15%;
    left:-24%;
    font-size:12px;
  }
`;
const VectorIcon2 = styled.img`
  position: absolute;
  height: 38.1%;
  top: 0%;
  bottom: 61.9%;
  left: calc(50% - 25px);
  max-height: 100%;
  width: 50px;

  @media (max-width: 768px) {
    width:15%;
    height:15%;
    top:-3%;
    left:47%;
    object-fit:fills;
  }
`;
const Div1 = styled.div`
  position: absolute;
  top: 1091px;
  left: 38%;
  width: 336px;
  height: 189px;

  @media (max-width: 768px) {
    width:40%;
    height:20%;
    top:72%;
    left:25%;
  }
`;
const MultilingualSupport = styled.div`
  position: absolute;
  top: 98px;
  left: calc(50% - 131.5px);
  line-height: 33px;
  font-weight: 600;
  display: inline-block;
  width: 252px;
  height: 40px;

  @media (max-width: 768px) {
    width:80%;
    height:20%;
    top:23%;
    left:2%;
    font-size:12px;
  }
`;
const OriaCanWork = styled.div`
  position: absolute;
  top: 143px;
  left: calc(50% - 166.5px);
  font-size: var(--font-size-base);
  line-height: 25px;
  display: inline-block;
  width: 333px;

  @media (max-width: 768px) {
    width:130%;
    height:20%;
    top:32%;
    left:-23%;
    font-size:12px;
  }
`;
const VectorIcon3 = styled.img`
  position: absolute;
  height: 35.78%;
  width: 24.92%;
  top: 0%;
  right: 42.34%;
  bottom: 64.22%;
  left: 32.73%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;

  @media (max-width: 768px) {
    width:15%;
    height:15%;
    top:12%;
    left:30%;
    object-fit:fill;
  }
`;
const Div2 = styled.div`
  position: absolute;
  top: 1087px;
  left: calc(50% - 625px);
  width: 333px;
  height: 218px;

  @media (max-width: 768px) {
    width:60%;
    height:20%;
    top:61%;
    left:25%;
  }
`;
const AiCustomerSupport = styled.div`
  position: absolute;
  top: 88px;
  left: calc(50% - 149px);
  line-height: 33px;
  font-weight: 600;
  display: inline-block;
  width: 298px;
  height: 40px;

  @media (max-width: 768px) {
    width:80%;
    height:10%;
    top:28%;
    left:25%;
    font-size:12px;
  }
`;
const OriaLearnsFrom = styled.div`
  position: absolute;
  top: 133px;
  left: calc(50% - 168px);
  font-size: var(--font-size-base);
  line-height: 25px;
  display: inline-block;
  width: 336px;

  @media (max-width: 768px) {
    width:180%;
    height:20%;
    top:40%;
    left:-25%;
    font-size:12px;
  }
`;
const VectorIcon4 = styled.img`
  position: absolute;
  height: 25.58%;
  width: 21.43%;
  top: 0%;
  right: 39.29%;
  bottom: 74.42%;
  left: 39.29%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;

  @media (max-width: 768px) {
    width:15%;
    height:15%;
    top:17%;
    left:60%;
    object-fill:fit;
  }
`;
const Div3 = styled.div`
  position: absolute;
  top: 647px;
  left: calc(50% + 283px);
  width: 336px;
  height: 258px;

  @media (max-width: 768px) {
    width:50%;
    height:20%;
    top:51%;
    left:15%;
  }
`;
const VectorIcon5 = styled.img`
  position: absolute;
  height: 36.61%;
  top: 0%;
  bottom: 63.39%;
  left: calc(50% - 43px);
  max-height: 100%;
  width: 86px;

  @media (max-width: 768px) {
    width:13%;
    height:13%;
    top:20%;
    left:53%;
    object-fit:fill;
  }
`;
const KeepAllYourContainer1 = styled.div`
  position: absolute;
  top: 133px;
  left: calc(50% - 168px);
  font-size: var(--font-size-base);
  line-height: 25px;

  @media (max-width: 768px) {
    width:130%;
    height:10%;
    top:35%;
    left:0%;
    font-size:12px;
  }
`;
const   Div4 = styled.div`
  position: absolute;
  top: 647px;
  left: calc(50% - 168px);
  width: 336px;
  height: 183px;
  
  @media (max-width: 768px) {
    width:50%;
    height:20%;
    top:45%;
    left:20%;
  }
`;
const CreateYourOwn = styled.div`
  position: absolute;
  top: 94px;
  left: calc(50% - 131.5px);
  line-height: 33px;
  font-weight: 600;
  display: inline-block;
  width: 262px;
  height: 40px;

  @media (max-width: 768px) {
    width:70%;
    height:20%;
    top:25%;
    left:20%;
    font-size:12px;
  }
`;
const CustomizeYourBotContainer = styled.div`
  position: absolute;
  top: 139px;
  left: calc(50% - 166.5px);
  font-size: var(--font-size-base);
  line-height: 25px;
  @media (max-width: 768px) {
    width:70%;
    height:20%;
    top:35%;
    left:20%;
    font-size:12px;
  }
`;
const Child = styled.img`
  position: absolute;
  height: 39.15%;
  width: 22.22%;
  top: 0%;
  right: 39.04%;
  bottom: 60.85%;
  left: 38.74%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;

  @media (max-width: 768px) {
    width:10%;
    height:10%;
    top:15%;
    left:55%;
    object-fit:fill;
  }
`;
const Div5 = styled.div`
  position: absolute;
  top: 641px;
  left: calc(50% - 625px);
  width: 333px;
  height: 189px;
  @media (max-width: 768px) {
    width:70%;
    height:20%;
    top:40%;
    left:10%;
  }
`;
const AccessOurMarketplace = styled.div`
  position: absolute;
  top: 98px;
  left: calc(50% - 149px);
  line-height: 33px;
  font-weight: 600;
  display: inline-block;
  width: 297px;
  height: 40px;
  @media (max-width: 768px) {
    width:100%;
    height:20%;
    top:20%;
    left:-40%;
    font-size:12px;
  }
`;
const ExploreAiApps = styled.div`
  position: absolute;
  top: 144px;
  left: calc(50% - 182px);
  font-size: var(--font-size-base);
  line-height: 25px;
  text-align: center;
  display: inline-block;
  width: 364px;
  height: 233px;

  @media (max-width: 768px) {
    width:40%;
    height:20%;
    top:30%;
    left:33%;
    font-size:12px;
  }
`;
const Item = styled.img`
  position: absolute;
  height: 18.57%;
  width: 19.23%;
  top: 0%;
  right: 36.81%;
  bottom: 81.43%;
  left: 43.96%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  @media (max-width: 768px) {
    width:4%;
    heigth:4%;
    object-fit:fill;
    top:4%;
    left:51%;
  }
`;
const Div6 = styled.div`
  position: absolute;
  top: 191px;
  left: calc(50% + 291px);
  width: 364px;
  height: 377px;
  text-align: right;
  @media (max-width: 768px) {
    font-size:12px;
    left:-80%;
    top:30%;
    width:250%;
    height:20%;
  }

`;
const BoostEmployeeEfficiency = styled.div`
  position: absolute;
  top: 104px;
  left: calc(50% - 195.5px);
  line-height: 33px;
  font-weight: 600;
  display: inline-block;
  width: 391px;
  height: 40px;
  @media (max-width: 768px) {
    font-size:12px;
    left : -15%;
    width:190%;
    height:30;
    top:20%;
  }
`;
const Inner = styled.img`
  position: absolute;
  height: 29.07%;
  width: 18.32%;
  top: -0.8%;
  right: 40.73%;
  bottom: 71.73%;
  left: 40.95%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  @media (max-width: 768px) {
    top:0%;
    left:60%;
    width:30%;
    height:30%;
    object-fit:fill;

  }
`;
const WithInstantAnswers = styled.div`
  position: absolute;
  top: 150px;
  left: calc(50% - 248.5px);
  font-size: var(--font-size-base);
  line-height: 25px;
  display: inline-block;
  width: 497px;
  height: 163px;
  @media (max-width: 768px) {
    font-size:12px;
    left : -50%;
    width:250%;
    height:20%;
    top:28%;
  }
`;
const Div7 = styled.div`
  position: absolute;
  top: 10%;
  left: 35%;
  width: 30%;
  height: 30%;
  @media (max-width: 768px) {
    top :15%;
    left:30%;
    width: 30%;
    height: 30%;
  }
`;
const AiTrainedOn = styled.div`
  position: absolute;
  top: 104px;
  left: calc(50% - 149px);
  line-height: 33px;
  font-weight: 600;
  display: inline-block;
  width: 297px;
  height: 40px;
  @media (max-width: 768px) {
    top: 10%;
    left: 43%;
    width: 120%;
    height:30%;
    font-size:12px;
  }
`;
const VectorIcon6 = styled.img`
  position: absolute;
  height: 30.5%;
  width: 26%;
  top: -4.25%;
  right: 37%;
  bottom: 55.75%;
  left: 37%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  @media (max-width: 768px) {
    top: -15%;
    left: 90%;
    width: 30%;
    height:45%;
    object-fit:fill;
  }
`;
const UploadAnyDataContainer = styled.div`
  position: absolute;
  top: 150px;
  left: calc(50% - 175px);
  font-size: var(--font-size-base);
  line-height: 25px;
  @media (max-width: 768px) {
    top: 15%;
    left: 55%;
    width: 100%;
    height:25%;
    font-size:12px;
  }
`;
const Div8 = styled.div`
  position: absolute;
  top: 10%;
  left: calc(50% - 646px);
  width: 30%;
  height: 30%;
  @media (max-width: 768px) {
    top: 5%;
    left: 20%;
    width: 30%;
    height:50%;
  }
`;
const KeyFeatures = styled.div`
  position: absolute;
  top: 1376px;
  left: 5%;
  width: 90%;
  height: 50%;
  font-size: var(--font-size-5xl);
  
  @media (max-width: 768px) {
    height:57%;
  }
`;
const Cta1 = styled(Button)`
  width: 40%;
  position: absolute;
  pading:40px;
  top: 4%;
  left: 123%;
  border-radius: 50;
  text-transform: uppercase; 
  display:inline-block;
  height:54px;
  font-weight:600px;
 
`;
const GetChild = styled.input`
  position: absolute;
  top: 4%;
  left: 0px;
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  width: 150%;
  height: 15%;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 1%;
  left: 0px;
  background-color: var(--color-gold-300);
  width: 60%;
  height: 25%;
`;
const EmailAddress = styled.div`
  position: absolute;
  top: 0px;
  left: 12px;
  line-height: 33px;
  font-weight: 500;
  width: 117px;
  height: 29px;
  background-color:#FFC700;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 0%;
  left: 2%;
  width: 60%;
  height: 29%;
`;
const Get = styled.div`
  position: absolute;
  top: 18%;
  left: 30%;
  width: 30%;
  height: 10%;
  font-size: var(--font-size-base);
  color: var(--color-white);
`;
const StartRoot = styled.div`
  position: relative;
  background-color: var(--color-lavenderblush);
  width: 100%;
  height: 3749px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-31xl);
  color: var(--color-black);
  font-family: var(--font-poppins);


  @media (max-width: 768px) {
    height:4120px;
  }
  
`;

const PopUpBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
`;

const PopUpContainer = styled.div`
  width:34%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 20px;
  background-color: white;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
  @media (max-width: 768px) {
    width:60%;
    height:90%;
  }
`;

const PopUp = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  // Use useRef to create a reference to the PopUpContainer
  const popUpRef = useRef(null);

  // Set showPopup to true after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Function to close the popup and navigate to start.js
  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/");
  };

  // Event handler for clicks outside the PopUpContainer
  const handleOutsideClick = (event) => {
    if (popUpRef.current && !popUpRef.current.contains(event.target)) {
      handleClosePopup();
    }
  };

  // Attach the event listener when the popup is shown
  useEffect(() => {
    if (showPopup) {
      document.addEventListener("click", handleOutsideClick);
    }

    // Clean up the event listener when the popup is hidden
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showPopup]);

  if (!showPopup) return null;

  return (
  <PopUpBackground>
        <PopUpContainer ref={popUpRef}>
          <Typography variant="h5" sx={{ marginBottom: 2, fontFamily: 'Poppins, sans-serif' }}>
          </Typography>
          <TextField variant="outlined" fullWidth sx={{ marginBottom: 2, fontFamily: 'Poppins, sans-serif',

          fontSize: '9px', // Adjust the font size for 768px width
          width: '100%', // Make the label and checkbox full width
          height : "20%"
        
        }} label="Email*" />

          <Typography variant="h5" sx={{ marginBottom: 2, fontFamily: 'Poppins, sans-serif' }}>
          </Typography>
          <TextField variant="outlined" fullWidth sx={{ marginBottom: 2, fontFamily: 'Poppins, sans-serif',
        

          fontSize: '9px', // Adjust the font size for 768px width
          width: '100%', // Make the label and checkbox full width
          height : "20%",
          top: "-10%"
        
        
        }} label="First Name" />

          <FormControlLabel
          control={<Checkbox  />}
          label=" Accept Terms and Conditions"

          
          sx={{ marginBottom: 2, alignSelf: "flex-start", fontFamily: 'Poppins, sans-serif', display: 'flex', justifyContent: 'flex-start',color:"#000", fontWeight: 'bold','@media screen and (max-width: 768px)': {
            fontSize: '4px', // Adjust the font size for 768px width
            width: '100%', // Make the label and checkbox full width
            alignItems: 'center', // Center-align content
            bottom:"80%",
            height:"1px"
          }}}
          />


          <Typography variant="body1" sx={{ marginBottom: 2, fontFamily: 'Poppins, sans-serif',textAlign: "left" ,color : '#0097FF',fontSize: '18px','@media screen and (max-width: 768px)': {
    fontSize: '10px', // Adjust the font size for 768px width
    textAlign: 'center', // Adjust other styles as needed
    marginTop:3
  }}}>
            Oria will use the information you provide on the form to be in touch with you and to provide updates and
            marketing.
          </Typography>

          <Button variant="contained" color="warning" fullWidth onClick={handleClosePopup}>
            Join the waiting list
          </Button>
        </PopUpContainer>
      </PopUpBackground>
    );
  };

const Start = () => {
  return (
    <StartRoot>
      <BackgroundIcon alt="" src="/background10.svg" />
      <Footer>
        <Oria1Modifie1 alt="" src="/oria-1--modifie-15@2x.png" />
        <FooterChild />
        <Logo>
          <Oria1Modifie11 alt="" src="/oria-1--modifie-111@2x.png" />
          <Oria>Oria</Oria>
        </Logo>
        <PrivacyPolicyParent>
          <PrivacyPolicy> Privacy policy</PrivacyPolicy>
          <TermsOfService>Terms of Service</TermsOfService>
          <Contact>Contact</Contact>
          <Faqs>FAQs</Faqs>
        </PrivacyPolicyParent>
        <Copywrite2023>
          Copywrite © 2023 Oria All rights reserved.
        </Copywrite2023>
        <FooterItem alt="" src="/group-58.svg" />
        <OriaIsYour>
          Oria is your personal Artificial Intelligence (AI) trained on your
          data and provides you with the necessary tools to launch any start-up.
          Boost your team's efficiency with instant answers, ideas, and
          ready-made work. Access our marketplace to discover a variety of
          useful tools and resources.
        </OriaIsYour>
      </Footer>
      <Header>
        <Logo1>
          <Oria1Modifie12 alt="" src="/oria-1--modifie-121@2x.png" />
          <Oria1>Oria</Oria1>
        </Logo1>
        <JoinFree variant="warning" href="/login-option" >
          Join Free
        </JoinFree>
      </Header>
      <YourAiAssistantContainer>
        <YourAiAssistant>{`Your AI Assistant to `}</YourAiAssistant>
        <YourAiAssistant>Launch Your Start-up</YourAiAssistant>
      </YourAiAssistantContainer>
      <WhoIsOria>Who is Oria?</WhoIsOria>
      <OriaIsYour1>
        Oria is your personal Artificial Intelligence (AI) trained on your data
        and provides you with the necessary tools to launch any start-up. Boost
        your team's efficiency with instant answers, ideas, and ready-made work.
        Access our marketplace to discover a variety of useful tools and
        resources.
      </OriaIsYour1>
      <Ready>
        <ReadyChild />
        <Cta variant="warning" href="/sign-up">
          Sign Up for the Beta
        </Cta>
        <ReadyToPropel>Ready to Propel Your Startup with Oria?</ReadyToPropel>
        <SignUpFor>
          Sign up for our beta and be among the first to discover how Oria can
          transform your startup. If you have any questions, feel free to reach
          out to us
        </SignUpFor>
      </Ready>
      <KeyFeatures>
        <KeyFeaturesChild />
        <KeyFeatures1>Key Features</KeyFeatures1>
        <KeyFeaturesItem alt="" src="/vector-52.svg" />
        <KeyFeaturesInner alt="" src="/vector-52.svg" />
        <VectorIcon alt="" src="/vector-62.svg" />
        <KeyFeaturesChild1 alt="" src="/vector-62.svg" />
        <KeyFeaturesChild2 alt="" src="/vector-62.svg" />
        <KeyFeaturesChild3 alt="" src="/vector-62.svg" />
        <KeyFeaturesChild4 alt="" src="/vector-62.svg" />
        <KeyFeaturesChild5 alt="" src="/vector-62.svg" />
        <Div>
          <AndMuchMore>And Much More</AndMuchMore>
          <DiscoverAllThe>
            Discover all the other features that Oria has to offer to help your
            startup succeed.
          </DiscoverAllThe>
          <VectorIcon1 alt="" src="/vector32.svg" />
        </Div>
        <Div1>
          <InteractWithEverything>
            Interact with Everything
          </InteractWithEverything>
          <KeepAllYourContainer>
            <YourAiAssistant>
              Keep all your prompts and bots organized and accessible in one place.</YourAiAssistant>
          </KeepAllYourContainer>
          <VectorIcon2 alt="" src="/vector33.svg" />
        </Div1>
        <Div2>
          <MultilingualSupport>Multilingual Support</MultilingualSupport>
          <OriaCanWork>
            Oria can work with your documents in any language, allowing users to
            connect and collaborate globally
          </OriaCanWork>
          <VectorIcon3 alt="" src="/vector34.svg" />
        </Div2>
        <Div3>
          <AiCustomerSupport>AI Customer Support</AiCustomerSupport>
          <OriaLearnsFrom>
            Oria learns from your documents, website content, and other sources
            to generate a chatbot that efficiently handles 40 to 70% of your
            customer support requests.
          </OriaLearnsFrom>
          <VectorIcon4 alt="" src="/vector35.svg" />
        </Div3>
        <Div4>
          <AiCustomerSupport>Prompt and Bot Library</AiCustomerSupport>
          <VectorIcon5 alt="" src="/vector36.svg" />
          <KeepAllYourContainer1>
            <YourAiAssistant>
              Keep all your prompts and bots organized and accessible in one place.
            </YourAiAssistant>
          </KeepAllYourContainer1>
        </Div4>
        <Div5>
          <CreateYourOwn>Create Your Own Bot</CreateYourOwn>
          <CustomizeYourBotContainer>
            <YourAiAssistant>{`Customize your bot to meet your specific needs.`}</YourAiAssistant>
            <YourAiAssistant></YourAiAssistant>
          </CustomizeYourBotContainer>
          <Child alt="" src="/group-55.svg" />
        </Div5>
        <Div6>
          <AccessOurMarketplace>Access our Marketplace</AccessOurMarketplace>
          <ExploreAiApps>{`Explore AI apps, Web3 tools, prompts, and skilled bots. Get access to hundreds of AI tools, web builders, and creativity-boosting prompts. Empower your work with the latest AI innovations. Discover valuable websites for LLC setup, international banking, market analysis, and more. `}</ExploreAiApps>
          <Item alt="" src="/group-56.svg" />
        </Div6>
        <Div7>
          <BoostEmployeeEfficiency>
            Boost Employee Efficiency
          </BoostEmployeeEfficiency>
          <Inner alt="" src="/group-54.svg" />
          <WithInstantAnswers>
            With instant answers, ideas, and ready-made work, your team can work
            smarter, not harder. Use Oria to complete tasks faster, like writing
            professional emails, translating documents, or creating marketing
            materials.
          </WithInstantAnswers>
        </Div7>
        <Div8>
          <AiTrainedOn>AI Trained on Your Data</AiTrainedOn>
          <VectorIcon6 alt="" src="/vector37.svg" />
          <UploadAnyDataContainer>
            <YourAiAssistant>
              Upload any data and build your knowledge
            </YourAiAssistant>
            <YourAiAssistant>base</YourAiAssistant>
          </UploadAnyDataContainer>
        </Div8>
      </KeyFeatures>
      <Get>
        <Cta1 variant="warning"  href="/login-option" sx={{backgroundColor:'#FFC700'}}>
          Get early access
        </Cta1>
        <GetChild placeholder=""/>
        <RectangleParent>
          <GroupChild />
          <EmailAddress>Email address</EmailAddress>
        </RectangleParent>
      </Get>
      <PopUp />
    </StartRoot>
  );
};

export default Start;
