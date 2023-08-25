import styled from "styled-components";

const BackgroundIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1344px;
  height: 931px;
  opacity: 0.4;
`;
const MarketPlaceChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-gold-300);
  width: 1600px;
  height: 68px;
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
  left: 231px;
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
const Chat = styled.div`
  position: absolute;
  top: 4px;
  left: 36px;
  font-weight: 600;
`;
const Oria1Modifie1Parent = styled.div`
  position: absolute;
  top: 11px;
  left: 0px;
  width: 81px;
  height: 34.78px;
`;
const Tools1 = styled.div`
  position: absolute;
  top: 0px;
  left: 25px;
  font-weight: 600;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 73.79%;
  width: 27.03%;
  top: 7.41%;
  right: 72.97%;
  bottom: 18.81%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Tools = styled.div`
  position: absolute;
  top: 14px;
  left: 143px;
  width: 74px;
  height: 27px;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 66.67%;
  width: 15.13%;
  top: 14.81%;
  right: 84.87%;
  bottom: 18.52%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const DataBase1 = styled.div`
  position: absolute;
  top: 14px;
  left: 279px;
  width: 119px;
  height: 27px;
`;
const VectorIcon2 = styled.img`
  position: absolute;
  height: 74.07%;
  width: 20.1%;
  top: 11.11%;
  right: 79.9%;
  bottom: 14.81%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Settings1 = styled.div`
  position: absolute;
  top: 14px;
  left: 460px;
  width: 100px;
  height: 27px;
`;
const Community1 = styled.div`
  position: absolute;
  top: 0px;
  left: 29px;
  font-weight: 600;
`;
const VectorIcon3 = styled.img`
  position: absolute;
  height: 51.85%;
  width: 17.27%;
  top: 22.22%;
  right: 83.45%;
  bottom: 25.93%;
  left: -0.72%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Community = styled.div`
  position: absolute;
  top: 14px;
  left: 622px;
  width: 139px;
  height: 27px;
`;
const Nav = styled.div`
  position: absolute;
  top: 6px;
  left: 30px;
  width: 761px;
  height: 55px;
`;
const LukeJohn = styled.div`
  position: absolute;
  top: 13px;
  left: 60px;
  font-weight: 600;
`;
const ProfileChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  width: 52px;
  height: 52px;
  object-fit: cover;
`;
const Icon = styled.img`
  position: absolute;
  top: 18px;
  left: 161px;
  width: 8.06px;
  height: 17.8px;
`;
const Profile = styled.div`
  position: absolute;
  top: 8px;
  left: 1392px;
  width: 169.06px;
  height: 52px;
`;
const Image1Icon = styled.img`
  position: absolute;
  top: 125px;
  left: 0px;
  width: 1600px;
  height: 882px;
  object-fit: cover;
`;
const Back = styled.b`
  position: absolute;
  top: 83px;
  left: calc(50% - 760px);
  color: var(--color-black);
`;
const MarketPlaceItem = styled.img`
  position: absolute;
  top: 84.5px;
  left: 19.5px;
  width: 13px;
  height: 24px;
`;
const MarketPlaceInner = styled.div`
  position: absolute;
  top: 137px;
  left: 1337px;
  background-color: var(--color-white);
  width: 207px;
  height: 70px;
`;
const Profile1 = styled.div`
  position: absolute;
  top: 138px;
  left: 1392px;
  width: 152px;
  height: 52px;
  color: var(--color-black);
`;
const MarketPlaceRoot = styled.div`
  position: relative;
  background-color: var(--color-lavenderblush);
  width: 100%;
  height: 931px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-white);
  font-family: var(--font-poppins);
`;
const MarketPlace = () => {
  return (
    <MarketPlaceRoot>
      <BackgroundIcon alt="" src="/background.svg" />
      <MarketPlaceChild />
      <Nav>
        <Logo>
          <LogoChild />
        </Logo>
        <Oria1Modifie1Parent>
          <Oria1Modifie1 alt="" src="/oria-1--modifie-1@2x.png" />
          <Chat>Chat</Chat>
        </Oria1Modifie1Parent>
        <Tools>
          <Tools1>Tools</Tools1>
          <VectorIcon alt="" src="/vector1.svg" />
        </Tools>
        <DataBase1>
          <Tools1>Data Base</Tools1>
          <VectorIcon1 alt="" src="/vector2.svg" />
        </DataBase1>
        <Settings1>
          <Tools1>Settings</Tools1>
          <VectorIcon2 alt="" src="/vector3.svg" />
        </Settings1>
        <Community>
          <Community1>Community</Community1>
          <VectorIcon3 alt="" src="/vector4.svg" />
        </Community>
      </Nav>
      <Profile>
        <LukeJohn>Luke John</LukeJohn>
        <ProfileChild alt="" src="/ellipse-51@2x.png" />
        <Icon alt="" src="/1.svg" />
      </Profile>
      <Image1Icon alt="" src="/image-1@2x.png" />
      <Back>Back</Back>
      <MarketPlaceItem alt="" src="/vector-61.svg" />
      <MarketPlaceInner />
      <Profile1>
        <LukeJohn>Luke John</LukeJohn>
        <ProfileChild alt="" src="/ellipse-51@2x.png" />
      </Profile1>
    </MarketPlaceRoot>
  );
};

export default MarketPlace;
