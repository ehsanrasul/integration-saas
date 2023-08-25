import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BackgroundIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%px;
  height: 100%;
  opacity: 0.4;
`;
const HomeChild = styled.div`
  position: absolute;
  top: 265px;
  left: 0px;
  background-color: var(--color-gainsboro);
  width: 1600px;
  height: 95px;
  opacity: 0.24;
`;
const HomeItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-gold-300);
  width: 1600px;
  height: 68px;
`;

const LukeJohn = styled.div`
  position: absolute;
  top: 21px;
  left: 85%;
  font-size: var(--font-size-lg);
  font-weight: 600;
  color : white;
`;
const HomeInner = styled.img`
  position: absolute;
  top: 1.5%;
  left: 81%;
  border-radius: 50%;
  width: 3%;
  height: 5%;
  object-fit: cover;
`;
const EllipseIcon = styled.img`
  position: absolute;
  top: 24%;
  left: 13%;
  border-radius: 50%;
  width: 3%;
  height: 5%;
  object-fit: cover;
`;
const Icon = styled.img`
  position: absolute;
  top: 3.3%;
  left: 92%;
  width: 2%;
  height: 2%;
`;
const ChatboxChild = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 140%;
`;
const AskOriaInput = styled.input`
  position: absolute;
  top: 3%;
  left: 2%;
  font-weight: 600;
  opacity: 0.3;
  border: none;
  border-bottom: 1px solid var(--color-black); /* Add a bottom border to the text input */
  padding: 4px 8px;
  font-size: 16px;
  outline: none;
  background-color: transparent; /* Remove the default background color */
  width: 95%  /* Set the width to be 100% of its container minus 646px */
`; 
const Oria = styled.div`
  position: absolute;
  top: 80%;
  left: 9.5%;
  font-weight: 600;
  opacity: 0.7;
`;
const ChatboxItem = styled.div`
  position: absolute;
  top: 72%;
  left: 1%;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 5%;
  height: 52%;
`;
const ChatboxInner = styled.div`
  position: absolute;
  top: 72.2%;
  left: 14%;
  border-radius: 0px var(--br-3xs) var(--br-3xs) 0px;
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 2.7%;
  height: 50.2%;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 72%;
  left: 7%;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 9.7%;
  height: 50.4%;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 24.78%;
  width: 2.09%;
  top: 83%;
  right: 95.3%;
  bottom: 16.81%;
  left: 2.61%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  opacity: 0.7;
`;
const GroupIcon = styled.img`
  position: absolute;
  height: 34.22%;
  width: 2.24%;
  top: 80.75%;
  right: 6.79%;
  bottom: 10.03%;
  left: 90.97%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

const GroupIconButton = styled(Button)`
  position: absolute;
  top: 55.75%;
  right: 7%;
  width: 50px; /* Set a fixed width for the button */
  height: 30px; /* Set a fixed height for the button */
  padding: 10px; /* Remove padding to make the icon centered */
  background: none; /* Remove the background color */
  border: none; /* Remove the border */
  cursor: pointer; /* Change cursor on hover */
  
`;

const VectorIcon1 = styled.img`
  position: absolute;
  height: 23.01%;
  width: 2.31%;
  top: 81.06%;
  right: 2.01%;
  bottom: 15.93%;
  left: 95.67%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

const VectorIcon1Button = styled(Button)`
  position: absolute;
  height: 23.01%;
  width: 2.31%;
  top: 61.06%;
  right: 2.01%;
  bottom: 15.93%;
  left: 95.67%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

const OriaModifie5 = styled.img`
  position: absolute;
  top: 76%;
  left: 7.4%;
  width: 2%;
  height: 37%;
  object-fit: cover;
`;
const VectorIcon2 = styled.img`
  position: absolute;
  height: 14.16%;
  width: 1.19%;
  top: 86%;
  right: 125.45%;
  bottom: 22.12%;
  left: 14.36%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  opacity: 0.7;
`;
const Chatbox = styled.div`
  position: absolute;
  top: 85%;
  left: 5%;
  width: 90%;
  height: 10%;
  font-size: var(--font-size-xl);
  color: var(--color-black);
`;
const LogoChild = styled.div`
  position: absolute;
  top: 0px;
  left: -103px;
  border-radius: var(--br-3xs);
  background-color: var(--color-goldenrod);
  width: 103px;
  height: 55px;
`;
const Logo = styled.div`
  position: absolute;
  top: 0px;
  left: 103px;
  width: 103px;
  height: 55px;
  transform: rotate(180deg);
  transform-origin: 0 0;
`;
const Oria1Modifie1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 32.01px;
  height: 34.78px;
  object-fit: cover;
`;
const Chat1 = styled.div`
  position: absolute;
  top: 4px;
  left: 36px;
  font-weight: 600;
`;
const Oria1Modifie1Parent = styled.div`
  position: absolute;
  top: 10%;
  left: 3%;
  width: 10%;
  height: 3%;
`;
const Chat = styled.div`
  position: absolute;
  top: 6px;
  left: 22px;
  width: 103px;
  height: 55px;
  font-size: var(--font-size-lg);
`;

const VectorIcon6 = styled.img`
  position: absolute;
  height: 3%;
  width: 17.27%;
  top: 2.7%;
  right: 83.45%;
  bottom: 25.93%;
  left: 5%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

const Tools = styled(Button)`
  position: absolute;
  top: 2.3%;
  left: 14%;
  font-size: 15px; /* Increase the font size for larger button */
  width: 2%; /* Increase the width for a wider button */
  font-weight: bold; /* Set the font weight to bold */
  transition: transform 0.2s ease; /* Add a transition effect for smooth hover */
  color: white; /* Set the text color to white using !important */

  outline: none; /* Remove the default outline on click */
  border: none; /* Remove the default border and outline on click */

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;






const DataBase1 = styled(Button)`
  position: absolute;
  top: 60%;
  left: 140%;
  font-size: 14px; /* Increase the font size for larger button */
  width: 30%; /* Increase the width for a wider button */
  transition: transform 0.2s ease; /* Add a transition effect for smooth hover */
  color: white ;
  font-weight: bold;

  outline: none; /* Remove the default outline on click */
  border: none; /* Remove the default border and outline on click */

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }

`;


const VectorIcon3 = styled.img`
  position: absolute;
  height: 66.67%;
  width: 15.13%;
  top: 75%;
  right: 84.87%;
  bottom: 18.52%;
  left: 127%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const DataBase2 = styled.div`
  position: absolute;
  top: -0.7%;
  left: 10%;
  width: 11%;
  height: 5%;
  font-weight: 600;
`;
const Settings1 = styled.div`
  position: absolute;
  top: 0px;
  left: 25px;
  font-weight: 600;
`;
const VectorIcon4 = styled.img`
  position: absolute;
  height: 32.07%;
  width: 20.1%;
  top: 11.11%;
  right: 79.9%;
  bottom: 14.81%;
  left: -0.7%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Settings2 = styled.div`
  position: absolute;
  top: 2%;
  left: 35%;
  width: 30%;
  height: 10%;
  font-size: var(--font-size-lg);
`;

const Settingbutton = styled(Button)`
  position: absolute;
  top: 3%;
  left: 12%;
  botton : 2%;
  font-size: 14px; /* Increase the font size for larger button */
  width: 10; /* Increase the width for a wider button */
  transition: transform 0.2s ease; /* Add a transition effect for smooth hover */
  color: white ;
  font-weight: bold;

  outline: none; /* Remove the default outline on click */
  border: none; /* Remove the default border and outline on click */

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;


const Community1 = styled(Button)`
  position: absolute;
  top: 3%;
  botton : 30%;
  left: 11%;
  font-size: 14px; /* Increase the font size for larger button */
  width: 100px; /* Increase the width for a wider button */
  font-weight: bold; /* Set the font weight to bold */
  transition: transform 0.2s ease; /* Add a transition effect for smooth hover */
  color: white !important; /* Set the text color to white using !important */

  outline: none; /* Remove the default outline on click */
  border: none; /* Remove the default border and outline on click */

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

const VectorIcon5 = styled.img`
  position: absolute;
  height: 21.85%;
  width: 17.27%;
  top: 15.22%;
  right: 83.45%;
  bottom: 25.93%;
  left: -0.72%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Community = styled.div`
  position: absolute;
  top: 2%;
  left: 50%;
  width: 30%;
  height: 10%;
`;
const IconCloud = styled.img`
  position: absolute;
  height: 3.98%;
  width: 2.63%;
  top: 11.95%;
  right: 96.13%;
  bottom: 84.08%;
  left: 1.25%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const HelloSirHow = styled.div`
  position: absolute;
  top: 300px;
  left: 233px;
  color: var(--color-black);
`;
const Hi = styled.div`
  position: absolute;
  top: 204px;
  left: 233px;
  color: var(--color-black);
`;
const Jul142023 = styled.div`
  position: absolute;
  top: 264px;
  left: calc(50% - 78px);
  color: var(--color-gray-200);
`;
const Jul1420231 = styled.div`
  position: absolute;
  top: 167px;
  left: calc(50% - 78px);
  color: var(--color-gray-200);
`;
const HomeChild1 = styled.div`
  position: absolute;
  top: -81px;
  left: -417px;
  background: linear-gradient(123.14deg, #fff, rgba(255, 255, 255, 0) 99.97%);
  width: 405px;
  height: 931px;
`;
const OriaModifie4 = styled.img`
  position: absolute;
  top: 282px;
  left: 176px;
  width: 39px;
  height: 45px;
  object-fit: cover;
`;
const HomeRoot = styled.div`
  position: relative;
  background-color: var(--color-lavenderblush);
  width: 100%;
  height: 652px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-family: var(--font-poppins);
`;
const Home = () => {
  return (
    <HomeRoot>
      <BackgroundIcon alt="" src="/background6.svg" />
      <HomeChild />
      <HomeItem />
      <Link to="/edit-profile">
      <LukeJohn>Luke John</LukeJohn>
      <HomeInner alt="" src="/ellipse-51@2x.png" />
      <EllipseIcon alt="" src="/ellipse-6@2x.png" />
      </Link>
      <Icon alt="" src="/1.svg" />
      <Chatbox>
        <ChatboxChild />
         <AskOriaInput type="text" placeholder="Ask Oria..." />
        <Oria>Oria</Oria>
        <ChatboxItem />
        <ChatboxInner />
        <RectangleDiv />
        <VectorIcon alt="" src="/vector28.svg" />
        
        
        <GroupIcon alt="" src="/group-14.svg" />
        <GroupIconButton variant="" href="/microphone"></GroupIconButton>
        
        <VectorIcon1 alt="" src="/vector29.svg" />
        <VectorIcon1Button variant="" href="/send"></VectorIcon1Button>
        <OriaModifie5 alt="" src="/oria--modifie-5@2x.png" />
        <VectorIcon2 alt="" src="/vector30.svg" />
      </Chatbox>
      <Chat>
        <Logo>
          <LogoChild />
        </Logo>
        <Oria1Modifie1Parent>
          <Oria1Modifie1 alt="" src="/oria-1--modifie-12@2x.png" />
          <Chat1>Chat</Chat1>
        </Oria1Modifie1Parent>
      </Chat>
      <VectorIcon6 alt="" src="/vector1.svg" />
      <Tools variant="" href="/personal" >Tools</Tools>

      <DataBase2>
        <DataBase2></DataBase2>
        <DataBase1 variant="" href="/data-base">DataBase</DataBase1>
        <VectorIcon3 alt="" src="/vector2.svg" />
      </DataBase2>
      <Settings2>
        <Settings1></Settings1>
        <Settingbutton variant="" href="/Settings" >Settings</Settingbutton>
        <VectorIcon4 alt="" src="/vector3.svg" />
      </Settings2>
      <Community>
        <Community1 variant="" href="/community" >Community</Community1>
        <VectorIcon5 alt="" src="/vector4.svg" />
      </Community>
      <HelloSirHow>{`Hello Sir! How can I help you today? `}</HelloSirHow>
      <Hi>Hi</Hi>
      <Jul142023>Jul 14, 2023 10:29 PM</Jul142023>
      <Jul1420231>Jul 14, 2023 10:28 PM</Jul1420231>
      <HomeChild1 />
      <OriaModifie4 alt="" src="/oria--modifie-42@2x.png" />
    </HomeRoot>
  );
};

export default Home;
