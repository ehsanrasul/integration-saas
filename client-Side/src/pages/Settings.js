import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const BackgroundIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1344px;
  height: 931px;
  opacity: 0.4;
`;
const SettingsChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-gold-300);
  width: 1607px;
  height: 68px;
`;
const LogoChild = styled.div`
  position: absolute;
  top: 0px;
  left: -133px;
  border-radius: var(--br-3xs);
  background-color: var(--color-goldenrod);
  width: 133px;
  height: 55px;
`;
const Logo = styled.div`
  position: absolute;
  top: 0px;
  left: 575px;
  width: 133px;
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
  color: var(--color-white); /* Set the color to white */
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
  color: var(--color-white); /* Set the color to white */
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
  color: var(--color-white); /* Set the color to white */
`;
const Community1 = styled.div`
  position: absolute;
  top: 0px;
  left: 29px;
  font-weight: 600;
  color: var(--color-white); /* Set the color to white */
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
  color: var(--color-white);
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
  color: var(--color-white);
`;
const LukeJohn1 = styled.div`
  position: absolute;
  top: 1px;
  left: 60px;
  font-weight: 600;
`;
const Lukejohn0099gmailcom = styled.div`
  position: absolute;
  top: 26px;
  left: 60px;
  font-size: var(--font-size-base);
  line-height: 25px;
`;
const Profile1 = styled.div`
  position: absolute;
  top: 438px;
  left: 412px;
  width: 273px;
  height: 52px;
`;
const SettingsItem = styled.div`
  position: absolute;
  top: 69px;
  left: 0px;
  background: linear-gradient(123.14deg, #fff, rgba(255, 255, 255, 0) 99.97%);
  width: 326px;
  height: 862px;
`;
const SettingsInner = styled.div`
  position: absolute;
  top: 92px;
  left: 22px;
  border-radius: var(--br-3xs);
  background-color: var(--color-khaki);
  width: 272px;
  height: 42px;
`;
const InviteLink = styled.div`
  position: absolute;
  top: 87px;
  left: 412px;
  font-size: var(--font-size-xl);
  font-weight: 600;
`;
const Users = styled.div`
  position: absolute;
  top: 342px;
  left: 412px;
  font-size: var(--font-size-xl);
  font-weight: 600;
`;
const User1 = styled.div`
  position: absolute;
  top: 396px;
  left: 414px;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray);
`;
const AccessLevel = styled.div`
  position: absolute;
  top: 396px;
  left: 882px;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray);
  text-align: center;
`;
const CreatedAt = styled.div`
  position: absolute;
  top: 396px;
  left: 1195px;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray);
  text-align: center;
`;
const ShareThisSecret = styled.p`
  margin: 0;
`;
const ShareThisSecretContainer = styled.div`
  position: absolute;
  top: 125px;
  left: 412px;
  font-size: var(--font-size-base);
  line-height: 25px;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 183px;
  left: 412px;
  border-radius: var(--br-8xs) 0px 0px var(--br-8xs);
  background-color: var(--color-black);
  border: 0.5px solid var(--color-black);
  box-sizing: border-box;
  width: 862px;
  height: 45px;
`;
const SettingsChild1 = styled.div`
  position: absolute;
  top: 183px;
  left: 1274px;
  border-radius: 0px var(--br-8xs) var(--br-8xs) 0px;
  background-color: var(--color-gold-300);
  width: 90px;
  height: 45px;
`;
const Httpsexamplecomwebpage = styled.div`
  position: absolute;
  top: 193px;
  left: calc(50% - 367px);
  font-size: var(--font-size-base);
  color: var(--color-white);
`;
const Integrations1 = styled.div`
  position: absolute;
  top: 0px;
  left: 32px;
  font-weight: 500;
  color: #556B2F;
`;
const VectorIcon4 = styled.img`
  position: absolute;
  height: 55.56%;
  width: 24.39%;
  top: 22.22%;
  right: 75.61%;
  bottom: 22.22%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const UsersParent = styled.div`
  position: absolute;
  top: 99px;
  left: 41px;
  width: 82px;
  height: 27px;
  color: var(--color-olive);
`;
const Billing = styled.div`
  position: absolute;
  top: 0px;
  left: 27px;
  font-weight: 500;
  color: #556B2F;
`;
const VectorIcon5 = styled.img`
  position: absolute;
  height: 66.67%;
  width: 12.2%;
  top: 14.81%;
  right: 87.8%;
  bottom: 18.52%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const BillingParent = styled.div`
  position: absolute;
  top: 145px;
  left: 46px;
  width: 82px;
  height: 27px;
  color: var(--color-olive);
`;
const ApiKeys1 = styled.div`
  position: absolute;
  top: 0px;
  left: 34px;
  font-weight: 500;
  color: #556B2F;
`;
const GroupChild = styled.img`
  position: absolute;
  height: 89.43%;
  width: 21.95%;
  top: 3.7%;
  right: 78.05%;
  bottom: 6.86%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const ApiKeysParent = styled.div`
  position: absolute;
  top: 191px;
  left: 39px;
  width: 110px;
  height: 27px;
  color: var(--color-olive);
`;
const GroupItem = styled.img`
  position: absolute;
  height: 89.43%;
  width: 14.74%;
  top: 3.7%;
  right: 85.26%;
  bottom: 6.86%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const IntegrationsParent = styled.div`
  position: absolute;
  top: 237px;
  left: 41px;
  width: 142px;
  height: 27px;
  color: var(--color-olive);
`;
const CopyLink = styled.b`
  position: absolute;
  top: 195px;
  left: 1283px;
  font-size: var(--font-size-sm);
  color: var(--color-white);
`;
const InviteChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--color-gold-300);
  width: 90px;
  height: 45px;
`;
const Invite1 = styled.b`
  position: absolute;
  top: 13px;
  left: 38px;
`;
const VectorIcon6 = styled.img`
  position: absolute;
  height: 31.11%;
  width: 26.67%;
  top: 35.56%;
  right: 63.33%;
  bottom: 33.33%;
  left: 10%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Invite = styled.div`
  position: absolute;
  top: 334px;
  left: 1412px;
  width: 90px;
  height: 45px;
  font-size: var(--font-size-sm);
  color: var(--color-white);
`;
const SettingsChild2 = styled.img`
  position: absolute;
  top: 395.75px;
  left: 412px;
  width: 1090px;
  height: 0.5px;
`;
const SettingsChild3 = styled.img`
  position: absolute;
  top: 421.75px;
  left: 412px;
  width: 1090px;
  height: 0.5px;
`;
const SettingsChild4 = styled.img`
  position: absolute;
  top: 501.75px;
  left: 412px;
  width: 1090px;
  height: 0.5px;
`;
const Owner = styled.div`
  position: absolute;
  top: 450px;
  left: 882px;
  font-weight: 600;
`;
const Jul132023 = styled.div`
  position: absolute;
  top: 450px;
  left: 1195px;
  font-weight: 600;
`;
const SettingsRoot = styled.div`
  position: relative;
  background-color: var(--color-lavenderblush);
  width: 100%;
  height: 931px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-black);
  font-family: var(--font-poppins);
`;
const Settings = () => {
  return (
    <SettingsRoot>
      <BackgroundIcon alt="" src="/background2.svg" />
      <SettingsChild />
      <Nav>
        <Logo>
          <LogoChild />
        </Logo>
        <Oria1Modifie1Parent>
          <Oria1Modifie1 alt="" src="/oria-1--modifie-1@2x.png" />
          <Chat>Chat</Chat>
        </Oria1Modifie1Parent>
        <Link to="/tools">
          <Tools>
            <Tools1>Tools</Tools1>
            <VectorIcon alt="" src="/vector1.svg" />
          </Tools>
        </Link>
         <Link to="/database">
          <DataBase1>
            <Tools1>Data Base</Tools1>
            <VectorIcon1 alt="" src="/vector2.svg" />
          </DataBase1>
        </Link>
           <Link to="/settings">
          <Settings1>
            <Tools1>Settings</Tools1>
            <VectorIcon2 alt="" src="/vector3.svg" />
          </Settings1>
        </Link>
        <Link to="/community">
          <Community>
            <Community1>Community</Community1>
            <VectorIcon3 alt="" src="/vector4.svg" />
          </Community>
        </Link>
      </Nav>
      <Profile>
        <LukeJohn>Luke John</LukeJohn>
        <ProfileChild alt="" src="/ellipse-51@2x.png" />
        <Icon alt="" src="/1.svg" />
      </Profile>
      <Profile1>
        <LukeJohn1>Luke John</LukeJohn1>
        <ProfileChild alt="" src="/ellipse-51@2x.png" />
        <Lukejohn0099gmailcom>Lukejohn0099@gmail.com</Lukejohn0099gmailcom>
      </Profile1>
      <SettingsItem />
      <SettingsInner />
      <InviteLink>Invite Link</InviteLink>
      <Users>Users</Users>
      <User1>User</User1>
      <AccessLevel>Access Level</AccessLevel>
      <CreatedAt>Created At</CreatedAt>
      <ShareThisSecretContainer>
        <ShareThisSecret>
          Share this secret link to invite people to this team. Only users who
          are owners can see this.
        </ShareThisSecret>
        <ShareThisSecret>
          You can also click here to reset this link.
        </ShareThisSecret>
      </ShareThisSecretContainer>
      <RectangleDiv />
      <SettingsChild1 />
      <Httpsexamplecomwebpage>
        https://example.com/webpage
      </Httpsexamplecomwebpage>
      <UsersParent>
        {/* Wrap the Users component with the Link */}
        <Link to="/users">
          <Integrations1>Users</Integrations1>
          <VectorIcon4 alt="" src="/vector14.svg" />
        </Link>
      </UsersParent>
      <BillingParent>
        {/* Wrap the Billing component with the Link */}
        <Link to="/billing">
          <Billing>Billing</Billing>
          <VectorIcon5 alt="" src="/vector15.svg" />
        </Link>
      </BillingParent>
      <ApiKeysParent>
        {/* Wrap the API Keys component with the Link */}
        <Link to="/api-keys">
          <ApiKeys1>API Keys</ApiKeys1>
          <GroupChild alt="" src="/group-25.svg" />
        </Link>
      </ApiKeysParent>
      <IntegrationsParent>
        {/* Wrap the Integrations component with the Link */}
        <Link to="/integrations">
          <Integrations1>Integrations</Integrations1>
          <GroupItem alt="" src="/group-24.svg" />
        </Link>
      </IntegrationsParent>
      <CopyLink>Copy Link</CopyLink>
      <Invite>
        <InviteChild />
        <Invite1>Invite</Invite1>
        <VectorIcon6 alt="" src="/vector16.svg" />
      </Invite>
      <SettingsChild2 alt="" src="/vector-42.svg" />
      <SettingsChild3 alt="" src="/vector-42.svg" />
      <SettingsChild4 alt="" src="/vector-42.svg" />
      <Owner>Owner</Owner>
      <Jul132023>Jul 13, 2023</Jul132023>
    </SettingsRoot>
  );
};

export default Settings;
