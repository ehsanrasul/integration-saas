import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UserDirectory1 = styled(Button)`
  position: absolute;
  top: 33px;
  left: 200px;
  font-size: var(--font-size-sm);
  line-height: 12px;
  font-weight: 500;
  color: var(--color-gray-500);
  display: inline-block;
  width: 150px;
  height: 18px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  text-decoration: none; /* Remove underline */

  /* Optionally, you can add some styles for the button's appearance on hover and focus */
  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    /* Add your focus styles here, such as a box-shadow */
  }
  
`;
const Message1 = styled(Button)`
  position: absolute;
  top: 33px;
  left: 330px;
  font-size: var(--font-size-sm);
  line-height: 12px;
  font-weight: 500;
  color: var(--color-gray-500);
  display: inline-block;
  width: 71px;
  height: 18px;
  cursor: pointer;
  text-decoration: none; /* Remove underline */
  border: none;
  outline: none;

  /* Optionally, you can add some styles for the link's appearance on hover and focus */
  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    /* Add your focus styles here, such as a box-shadow */
    outline: none;
  }

`;
const Community2 = styled.b`
  position: absolute;
  top: 17px;
  left: 43px;
  line-height: 12px;
  display: inline-block;
  background: linear-gradient(
    90deg,
    #0b2639,
    #ff5f00 28.65%,
    #21a5ca 65.1%,
    #3e0831
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 131px;
  height: 18px;
`;
const OriaModifie4 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 35px;
  height: 39px;
  object-fit: cover;
`;
const CommunityParent = styled.div`
  position: absolute;
  top: 10px;
  left: 16px;
  width: 174px;
  height: 39px;
  font-size: var(--font-size-xl);
`;
const OriaCommunity = styled.b`
  position: absolute;
  top: 17px;
  left: 43px;
  line-height: 12px;
  display: inline-block;
  background: linear-gradient(
    90deg,
    #0b2639,
    #ff5f00 28.65%,
    #21a5ca 65.1%,
    #3e0831
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 172px;
  height: 18px;
`;
const OriaCommunityParent = styled.div`
  position: absolute;
  top: 880px;
  left: 173px;
  width: 215px;
  height: 39px;
  font-size: var(--font-size-xl);
`;
const Group = styled(Button)`
  width: 1.49%;
  position: absolute;
  height: 2.12%;
  top: 2.14%;
  right: 5.13%;
  bottom: 95.73%;
  left: 93.39%;
`;
const UserDirectoryChild = styled(Link)`
position: absolute;
top: 13px;
left: 1510px;
border-radius: 50%;
width: 4px;
height: 2px;
object-fit: cover;
`;

const Search = styled.div`
  position: absolute;
  top: 30px;
  left: 570px;
  line-height: 12px;
  font-weight: 300;
  color: var(--color-gray-500);
  display: inline-block;
  width: 65px;
  height: 18px;
`;

const Filter = styled.button`
  position: absolute;
  top: 123px;
  left: 1359px;
  line-height: 12px;
  font-weight: 300;
  color: var(--color-gray-500);
  display: inline-block;
  width: 43px;
  height: 18px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;

  /* Optionally, you can add some styles for the button's appearance on hover and focus */
  &:hover {
    /* Add hover styles here */
  }

  &:focus {
    /* Add focus styles here, such as a box-shadow */
    outline: none;
  }
`;
const DysonSimmons = styled.div`
  position: absolute;
  top: 218px;
  left: 605px;
  font-size: var(--font-size-lg);
  line-height: 12px;
  font-weight: 600;
  color: var(--color-gray-500);
  display: inline-block;
  width: 185px;
  height: 18px;
`;
const WadeWarren = styled.div`
  position: absolute;
  top: 218px;
  left: 280px;
  font-size: var(--font-size-lg);
  line-height: 12px;
  font-weight: 600;
  color: var(--color-gray-500);
  display: inline-block;
  width: 130px;
  height: 18px;
`;
const EleanorPena = styled.div`
  position: absolute;
  top: 418px;
  left: 280px;
  font-size: var(--font-size-lg);
  line-height: 12px;
  font-weight: 600;
  color: var(--color-gray-500);
  display: inline-block;
  width: 130px;
  height: 18px;
`;
const JacobJones = styled.div`
  position: absolute;
  top: 418px;
  left: 605px;
  font-size: var(--font-size-lg);
  line-height: 12px;
  font-weight: 600;
  color: var(--color-gray-500);
  display: inline-block;
  width: 133px;
  height: 18px;
`;
const JennyWilson = styled.div`
  position: absolute;
  top: 418px;
  left: 916px;
  font-size: var(--font-size-lg);
  line-height: 12px;
  font-weight: 600;
  color: var(--color-gray-500);
  display: inline-block;
  width: 133px;
  height: 18px;
`;
const RobertFox = styled.div`
  position: absolute;
  top: 418px;
  left: 1227px;
  font-size: var(--font-size-lg);
  line-height: 12px;
  font-weight: 600;
  color: var(--color-gray-500);
  display: inline-block;
  width: 103px;
  height: 18px;
`;
const JaneCooper = styled.div`
  position: absolute;
  top: 218px;
  left: 916px;
  font-size: var(--font-size-lg);
  line-height: 12px;
  font-weight: 600;
  color: var(--color-gray-500);
  display: inline-block;
  width: 185px;
  height: 18px;
`;
const MarvinMckinney = styled.div`
  position: absolute;
  top: 218px;
  left: 1227px;
  font-size: var(--font-size-lg);
  line-height: 12px;
  font-weight: 600;
  color: var(--color-gray-500);
  display: inline-block;
  width: 185px;
  height: 18px;
`;
const UserDirectoryItem = styled.input`
position: absolute;
top: 13px;
left: calc(50% - 298px);
border-radius: var(--br-31xl);
border: 1.5px solid var(--color-black);
box-sizing: border-box;
width: 923px;
height: 46px;
padding: 10px; /* Add padding to make the input text look better */
font-size: 16px; /* Add font size to make the text readable */
text-indent: 47px;
/* Optionally, you can add some styles for the input text */
&:focus {
  outline: none;
  /* Add focus styles here, such as a box-shadow */
}
`;
const UserDirectoryInner = styled.div`
  position: absolute;
  top: 109px;
  left: calc(50% + 523px);
  border-radius: var(--br-8xs);
  border: 1.5px solid var(--color-black);
  box-sizing: border-box;
  width: 102px;
  height: 40px;
`;

const VectorIcon = styled.button`
position: absolute;
  height: 1.52%;
  width: 1.06%;
  top: 2.54%;
  right: 65.19%;
  bottom: 95.95%;
  left: 33.75%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  background-color: transparent;
  background-image: url("/vector.svg");
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  outline: none;
  cursor: pointer;

  /* Optionally, you can add some styles for the button's appearance on hover and focus */
  &:hover {
    /* Add hover styles here */
  }

  &:focus {
    /* Add focus styles here, such as a box-shadow */
  }
`;
const UserDirectoryChild1 = styled.img`
  position: absolute;
  top: 33px;
  left: 1377px;
  width: 23px;
  height: 12px;
`;
const UserDirectoryChild2 = styled.img`
  position: absolute;
  top: 128.5px;
  left: 1403.5px;
  width: 9px;
  height: 5px;
`;
const UserDirectory2 = styled.b`
  position: absolute;
  top: 107px;
  left: 176px;
  font-size: var(--font-size-11xl);
  line-height: 12px;
  display: flex;
  align-items: center;
  width: 244px;
  height: 39px;
`;
const EllipseIcon = styled.img`
  position: absolute;
  top: 186px;
  left: 202px;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  object-fit: cover;
`;
const UserDirectoryChild3 = styled.img`
  position: absolute;
  top: 186px;
  left: 836px;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  object-fit: cover;
`;
const UserDirectoryChild4 = styled.img`
  position: absolute;
  top: 392px;
  left: 202px;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  object-fit: cover;
`;
const UserDirectoryChild5 = styled.img`
  position: absolute;
  top: 392px;
  left: 836px;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  object-fit: cover;
`;
const UserDirectoryChild6 = styled.img`
  position: absolute;
  top: 392px;
  left: 1151px;
  border-radius: 50%;
  width: 71.63px;
  height: 70px;
  object-fit: cover;
`;
const UserDirectoryChild7 = styled.img`
  position: absolute;
  top: 186px;
  left: 518px;
  border-radius: 50%;
  width: 71.63px;
  height: 70px;
  object-fit: cover;
`;
const UserDirectoryChild8 = styled.img`
  position: absolute;
  top: 392px;
  left: 518px;
  border-radius: 50%;
  width: 71.63px;
  height: 70px;
  object-fit: cover;
`;
const UserDirectoryChild9 = styled.img`
  position: absolute;
  top: 186px;
  left: 1152px;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  object-fit: cover;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 171px;
  left: 175px;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 305px;
  height: 185px;
`;
const UserDirectoryChild10 = styled.div`
  position: absolute;
  top: 171px;
  left: 490px;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 305px;
  height: 185px;
`;
const UserDirectoryChild11 = styled.div`
  position: absolute;
  top: 376px;
  left: 175px;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 305px;
  height: 185px;
`;
const UserDirectoryChild12 = styled.div`
  position: absolute;
  top: 376px;
  left: 490px;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 305px;
  height: 185px;
`;
const UserDirectoryChild13 = styled.div`
  position: absolute;
  top: 171px;
  left: 805px;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 305px;
  height: 185px;
`;
const UserDirectoryChild14 = styled.div`
  position: absolute;
  top: 171px;
  left: 1120px;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 305px;
  height: 185px;
`;
const UserDirectoryChild15 = styled.div`
  position: absolute;
  top: 376px;
  left: 805px;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 305px;
  height: 185px;
`;
const UserDirectoryChild16 = styled.div`
  position: absolute;
  top: 376px;
  left: 1120px;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 305px;
  height: 185px;
`;
const UserDirectoryChild17 = styled.img`
  position: absolute;
  top: 856.75px;
  left: 175px;
  width: 1250px;
  height: 0.5px;
`;
const OriaCommunityIs = styled.p`
  margin: 0;
`;
const OriaCommunityIsContainer = styled.div`
  position: absolute;
  top: 939px;
  left: 175px;
  font-size: var(--font-size-smi);
  line-height: 17px;
  font-weight: 300;
  display: inline-block;
  width: 352px;
`;
const PrivacyPolicy = styled.div`
  position: absolute;
  top: 927px;
  left: 648px;
  font-size: var(--font-size-smi);
  font-weight: 500;
  font-family: var(--font-roboto);
  display: inline-block;
  width: 85px;
`;
const TermsOfService = styled.div`
  position: absolute;
  top: 954px;
  left: 650px;
  font-size: var(--font-size-smi);
  font-weight: 500;
  font-family: var(--font-roboto);
  display: inline-block;
  width: 107px;
`;
const Contact = styled.div`
  position: absolute;
  top: 981px;
  left: 651px;
  font-size: var(--font-size-smi);
  font-weight: 500;
  font-family: var(--font-roboto);
  display: inline-block;
  width: 49px;
`;
const Faqs = styled.div`
  position: absolute;
  top: 1008px;
  left: 652px;
  font-size: var(--font-size-smi);
  font-weight: 500;
  font-family: var(--font-roboto);
  display: inline-block;
  width: 49px;
`;
const OriaAllRights = styled.div`
  position: absolute;
  top: 1011px;
  left: 175px;
  font-size: var(--font-size-xs);
  font-family: var(--font-roboto);
  display: inline-block;
  width: 194px;
`;
const Links = styled.div`
  position: absolute;
  top: 895px;
  left: 652px;
  font-weight: 600;
  font-family: var(--font-roboto);
  color: var(--color-gold-300);
  display: inline-block;
  width: 46px;
`;
const IcsharpFacebookIcon = styled.img`
  position: absolute;
  top: 1035px;
  left: 175px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const MditwitterIcon = styled.img`
  position: absolute;
  top: 1035px;
  left: 208px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const RiinstagramFillIcon = styled.img`
  position: absolute;
  top: 1035px;
  left: 241px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const UserDirectoryChild18 = styled.div`
  position: absolute;
  top: 266px;
  left: 198px;
  border-radius: var(--br-3xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 259px;
  height: 76px;
`;
const UserDirectoryChild19 = styled.div`
  position: absolute;
  top: 266px;
  left: 513px;
  border-radius: var(--br-3xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 259px;
  height: 76px;
`;
const UserDirectoryChild20 = styled.div`
  position: absolute;
  top: 266px;
  left: 828px;
  border-radius: var(--br-3xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 259px;
  height: 76px;
`;
const UserDirectoryChild21 = styled.div`
  position: absolute;
  top: 266px;
  left: 1143px;
  border-radius: var(--br-3xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 259px;
  height: 76px;
`;
const UserDirectoryChild22 = styled.div`
  position: absolute;
  top: 472px;
  left: 1143px;
  border-radius: var(--br-3xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 259px;
  height: 76px;
`;
const UserDirectoryChild23 = styled.div`
  position: absolute;
  top: 472px;
  left: 828px;
  border-radius: var(--br-3xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 259px;
  height: 76px;
`;
const UserDirectoryChild24 = styled.div`
  position: absolute;
  top: 472px;
  left: 513px;
  border-radius: var(--br-3xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 259px;
  height: 76px;
`;
const UserDirectoryChild25 = styled.div`
  position: absolute;
  top: 472px;
  left: 198px;
  border-radius: var(--br-3xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 259px;
  height: 76px;
`;
const EllipseDiv = styled.div`
  position: absolute;
  top: 24px;
  left: 1506px;
  border-radius: 50%;
  background-color: var(--color-gold-300);
  width: 10px;
  height: 10px;
`;
const MdifilterOutlineIcon = styled.img`
  position: absolute;
  top: 118px;
  left: 1332px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const UiuxDesigner = styled.div`
  position: absolute;
  top: 286px;
  left: 527px;
  line-height: 12px;
  font-weight: 300;
`;
const WebDeveloper = styled.div`
  position: absolute;
  top: 492px;
  left: 527px;
  line-height: 12px;
  font-weight: 300;
`;
const LookingForA = styled.div`
  position: absolute;
  top: 492px;
  left: 216px;
  line-height: 12px;
  font-weight: 300;
`;
const Copywriter = styled.div`
  position: absolute;
  top: 492px;
  left: 843px;
  line-height: 12px;
  font-weight: 300;
`;
const MarketingExpert = styled.div`
  position: absolute;
  top: 492px;
  left: 1157px;
  line-height: 12px;
  font-weight: 300;
`;
const PinterestAdsSpecialist = styled.div`
  position: absolute;
  top: 514px;
  left: 1157px;
  line-height: 12px;
  font-weight: 300;
`;
const LookingForA1 = styled.div`
  position: absolute;
  top: 286px;
  left: 842px;
  line-height: 12px;
  font-weight: 300;
`;
const EntrepreneurJustLookingContainer = styled.div`
  position: absolute;
  top: 278px;
  left: 1156px;
  line-height: 20px;
  font-weight: 300;
  display: inline-block;
  width: 211px;
`;
const CeoSwitch = styled.div`
  position: absolute;
  top: 286px;
  left: 216px;
  line-height: 12px;
  font-weight: 300;
`;

const SmallImage = styled.img`
  position: absolute;  
  width: 50px;
  height: 50px;
  left: 30px;
`;

const UserDirectoryRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 1600px;
  height: 1121px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-black);
  font-family: var(--font-poppins);
`;
const UserDirectory = () => {
  return (
    <UserDirectoryRoot>
      <UserDirectory1 variant="" href="/user-directory">
        User Directory
      </UserDirectory1>
      <Message1 variant="" href="/message">
        Message
      </Message1>
      <CommunityParent>
        <Community2>Community</Community2>
        <OriaModifie4 alt="" src="/oria--modifie-4@2x.png" />
      </CommunityParent>
      <OriaCommunityParent>
        <OriaCommunity>Oria Community</OriaCommunity>
        <OriaModifie4 alt="" src="/oria--modifie-4@2x.png" />
      </OriaCommunityParent>
      <Group variant="" href="/notify">
      <img alt="group icon" src="/group4.svg"/>
      </Group>
      <UserDirectoryChild to="/edit-profile">
        <SmallImage alt="" src="/ellipse-5@2x.png" />
      </UserDirectoryChild>
      <Search>Search</Search>
      <Filter onClick={() => { /* Add your click handler logic here */ }}>Filter</Filter>
      <DysonSimmons>Dyson Simmons</DysonSimmons>
      <WadeWarren>Wade Warren</WadeWarren>
      <EleanorPena>Eleanor Pena</EleanorPena>
      <JacobJones>Jacob Jones</JacobJones>
      <JennyWilson>Jenny Wilson</JennyWilson>
      <RobertFox>Robert Fox</RobertFox>
      <JaneCooper>Jane Cooper</JaneCooper>
      <MarvinMckinney>Marvin McKinney</MarvinMckinney>
      <UserDirectoryItem type="text" placeholder="Search" />
      <UserDirectoryInner />
      <VectorIcon alt="" src="/vector.svg" />
      <UserDirectoryChild1 alt="" src="/vector-62.svg" />
      <UserDirectoryChild2 alt="" src="/vector-61.svg" />
      <UserDirectory2>User Directory</UserDirectory2>
      <EllipseIcon alt="" src="/ellipse-201@2x.png" />
      <UserDirectoryChild3 alt="" src="/ellipse-241@2x.png" />
      <UserDirectoryChild4 alt="" src="/ellipse-221@2x.png" />
      <UserDirectoryChild5 alt="" src="/ellipse-251@2x.png" />
      <UserDirectoryChild6 alt="" src="/ellipse-211@2x.png" />
      <UserDirectoryChild7 alt="" src="/ellipse-261@2x.png" />
      <UserDirectoryChild8 alt="" src="/ellipse-231@2x.png" />
      <UserDirectoryChild9 alt="" src="/ellipse-27@2x.png" />
      <RectangleDiv />
      <UserDirectoryChild10 />
      <UserDirectoryChild11 />
      <UserDirectoryChild12 />
      <UserDirectoryChild13 />
      <UserDirectoryChild14 />
      <UserDirectoryChild15 />
      <UserDirectoryChild16 />
      <UserDirectoryChild17 alt="" src="/vector-4.svg" />
      <OriaCommunityIsContainer>
        <OriaCommunityIs>
          Oria community is a place to find very simple entrepreneurs, partner,
          freelancers.
        </OriaCommunityIs>
        <OriaCommunityIs>
          A place to share your ideas, tasks and ask questions
        </OriaCommunityIs>
      </OriaCommunityIsContainer>
      <PrivacyPolicy> Privacy policy</PrivacyPolicy>
      <TermsOfService>Terms of Service</TermsOfService>
      <Contact>Contact</Contact>
      <Faqs>FAQs</Faqs>
      <OriaAllRights>© 2023 Oria. All rights reserved."</OriaAllRights>
      <Links>Links</Links>
      <IcsharpFacebookIcon alt="" src="/icsharpfacebook.svg" />
      <MditwitterIcon alt="" src="/mditwitter1.svg" />
      <RiinstagramFillIcon alt="" src="/riinstagramfill1.svg" />
      <UserDirectoryChild18 />
      <UserDirectoryChild19 />
      <UserDirectoryChild20 />
      <UserDirectoryChild21 />
      <UserDirectoryChild22 />
      <UserDirectoryChild23 />
      <UserDirectoryChild24 />
      <UserDirectoryChild25 />
      <EllipseDiv />
      <MdifilterOutlineIcon alt="" src="/mdifilteroutline.svg" />
      <UiuxDesigner>UI/UX Designer</UiuxDesigner>
      <WebDeveloper>Web Developer</WebDeveloper>
      <LookingForA>Looking For a CTO</LookingForA>
      <Copywriter>Copywriter</Copywriter>
      <MarketingExpert>Marketing Expert</MarketingExpert>
      <PinterestAdsSpecialist>Pinterest Ads Specialist</PinterestAdsSpecialist>
      <LookingForA1>Looking for a partner</LookingForA1>
      <EntrepreneurJustLookingContainer>
        <OriaCommunityIs>Entrepreneur- Just Looking</OriaCommunityIs>
        <OriaCommunityIs>Around</OriaCommunityIs>
      </EntrepreneurJustLookingContainer>
      <CeoSwitch>CEO Switch</CeoSwitch>
    </UserDirectoryRoot>
  );
};

export default UserDirectory;
