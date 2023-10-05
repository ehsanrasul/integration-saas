import styled from "styled-components";
import { Link } from 'react-router-dom';

const UserDirectory1 = styled(Link)`
position: absolute;
  top: 27px;
  left: 200px;
  font-size: var(--font-size-sm);
  line-height: 12px;
  font-weight: 500;
  color: var(--color-gray-500);
  display: inline-block;
  width: 114px;
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

const Message1 = styled(Link)`
  position: absolute;
  top: 27px;
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

  /* Optionally, you can add some styles for the link's appearance on hover and focus */
  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    /* Add your focus styles here, such as a box-shadow */
    outline: none;
  }

`;
const Community11 = styled.b`
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
const GroupIcon = styled(Link)`
position: absolute;
height: 2.12%;
width: 1.49%;
top: 2.14%;
right: 5.13%;
bottom: 95.73%;
left: 85.39%;
max-width: 100%;
overflow: hidden;
max-height: 100%;
background-color: transparent;
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

/* Style the img element inside the button */
img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;
const CommunityChild = styled(Link)`
position: absolute;
top: 13px;
left: 1410px;
border-radius: 50%;
width: 6px;
height: 6px;
object-fit: cover;
`;
const Search = styled.div`
  position: absolute;
  top: 17px;
  left: 68px;
  line-height: 12px;
  font-weight: 300;
  display: inline-block;
  width: 65px;
  height: 18px;
`;
const InputText = styled.input`
  position: absolute;
  top: 0px;
  left: calc(51% - 319px);
  border-radius: var(--br-31xl);
  border: 1.5px solid var(--color-black);
  box-sizing: border-box;
  width: 638px;
  height: 46px;
  padding: 10px; /* Add padding to make the input text look better */
  font-size: 16px; /* Add font size to make the text readable */
  text-indent: 35px;
`;
const VectorIcon =  styled.button`
position: absolute;
height: 56.96%;
width: 7.66%;
top: 20.53%;
right: 91.38%;
bottom: 29.52%;
left: 2.96%;
max-width: 100%;
overflow: hidden;
max-height: 100%;
cursor: pointer;
background: transparent;
border: none;
outline: none;

/* Optionally, you can add some styles for the button's appearance on hover and focus */
&:hover {
  /* Add your hover styles here */
}

&:focus {
  /* Add your focus styles here, such as a box-shadow */
  outline: none;
}
`;
const GroupItem = styled.button`
position: absolute;
top: 12.5px;
left: 584.5px;
width: 24px;
height: 13px;
cursor: pointer;
background: transparent;
border: none;
outline: none;
`;
const SearchParent = styled.div`
  position: absolute;
  top: 13px;
  left: 402px;
  width: 638px;
  height: 46px;
  font-size: var(--font-size-base);
  color: var(--color-gray-500);
`;
const GroupInner = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 112px);
  border-radius: var(--br-31xl);
  border: 1.5px solid var(--color-black);
  box-sizing: border-box;
  width: 280px;
  height: 46px;
`;
const GroupChild1 = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  height: 56.52%;
  width: 11.61%;
  top: 20.03%;
  right: 80.8%;
  bottom: 23.45%;
  left: 7.59%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;

  /* Hide the default checkbox input */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  border: none;
  background: transparent;

  /* Create custom checkbox appearance using pseudo-elements */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #000; /* Border color for the checkbox */
    box-sizing: border-box;
  }

  /* Show a checkmark when the checkbox is checked */
  &:checked:before {
    content: 'X'; /* You can use any content here, like an SVG checkmark */
    text-align: center;
    line-height: 1;
    font-weight: bold;
    color: #000; /* Color of the checkmark */
  }
`;
const Span = styled.span`
  font-size: var(--font-size-base);
`;
const ClickHereToContainer = styled.div`
  position: absolute;
  top: 15px;
  left: 49px;
  line-height: 12px;
  font-weight: 500;
  opacity: 0.74;
`;
const Post = styled.b`
  position: absolute;
  top: 17px;
  left: 212px;
  font-size: var(--font-size-base);
  line-height: 12px;
  color: var(--color-royalblue);
`;
const PolygonIcon = styled.button`
position: absolute;
top: 12.5px;
left: 194.67px;
border-radius: var(--br-12xs);
width: 10.66px;
height: 9.5px;
background: transparent;
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
const RectangleParent = styled.div`
  position: absolute;
  top: 13px;
  left: calc(43% + 374px);
  width: 224px;
  height: 46px;
  font-size: var(--font-size-4xs);
`;
const HowsItGoing = styled.b`
  position: absolute;
  top: 107px;
  left: 176px;
  font-size: var(--font-size-11xl);
  line-height: 12px;
  display: flex;
  align-items: center;
  width: 339px;
  height: 39px;
`;
const EllipseIcon = styled.img`
  position: absolute;
  top: 29px;
  left: 41px;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  object-fit: cover;
`;
const GroupChild2 = styled.img`
  position: absolute;
  top: 29px;
  left: 676px;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  object-fit: cover;
`;
const GroupChild3 = styled.img`
  position: absolute;
  top: 257px;
  left: 41px;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  object-fit: cover;
`;
const GroupChild4 = styled.img`
  position: absolute;
  top: 257px;
  left: 676px;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  object-fit: cover;
`;
const GroupChild5 = styled.img`
  position: absolute;
  top: 142px;
  left: 41px;
  border-radius: 50%;
  width: 44px;
  height: 43px;
  object-fit: cover;
`;
const GroupChild6 = styled.img`
  position: absolute;
  top: 142px;
  left: 676px;
  border-radius: 50%;
  width: 44px;
  height: 43px;
  object-fit: cover;
`;
const GroupChild7 = styled.img`
  position: absolute;
  top: 371px;
  left: 41px;
  border-radius: 50%;
  width: 44px;
  height: 43px;
  object-fit: cover;
`;
const GroupChild8 = styled.img`
  position: absolute;
  top: 371px;
  left: 676px;
  border-radius: 50%;
  width: 44px;
  height: 43px;
  object-fit: cover;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 615px;
  height: 102px;
`;
const GroupChild9 = styled.div`
  position: absolute;
  top: 0px;
  left: 635px;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 615px;
  height: 102px;
`;
const GroupChild10 = styled.div`
  position: absolute;
  top: 112px;
  left: 0px;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 615px;
  height: 102px;
`;
const GroupChild11 = styled.div`
  position: absolute;
  top: 112px;
  left: 635px;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 615px;
  height: 102px;
`;
const GroupChild12 = styled.div`
  position: absolute;
  top: 228px;
  left: 0px;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 615px;
  height: 102px;
`;
const GroupChild13 = styled.div`
  position: absolute;
  top: 228px;
  left: 635px;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 615px;
  height: 102px;
`;
const GroupChild14 = styled.div`
  position: absolute;
  top: 341px;
  left: 0px;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 615px;
  height: 102px;
`;
const GroupChild15 = styled.div`
  position: absolute;
  top: 341px;
  left: 635px;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 615px;
  height: 102px;
`;
const LookingToBuild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-steelblue);
`;
const Annoucement = styled.div`
  position: absolute;
  top: 19px;
  left: 0px;
`;
const PostedByDisha = styled.div`
  position: absolute;
  top: 35px;
  left: 0px;
`;
const MinutesAgo = styled.a`
  position: absolute;
  top: 35px;
  left: 134px;
  color: inherit;
  text-decoration: none;
`;
const Comments = styled.div`
  position: absolute;
  top: 35px;
  left: 260px;
`;
const Views = styled.div`
  position: absolute;
  top: 35px;
  left: 359px;
`;
const GroupIcon1 = styled.img`
  position: absolute;
  height: 33.96%;
  width: 4.37%;
  top: 66.04%;
  right: 38.83%;
  bottom: 0%;
  left: 56.8%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GroupChild16 = styled.img`
  position: absolute;
  height: 16.6%;
  width: 2.91%;
  top: 75.47%;
  right: 13.83%;
  bottom: 7.92%;
  left: 83.25%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const LookingToBuildAnAiPoweredParent = styled.div`
  position: absolute;
  top: 25px;
  left: 122px;
  width: 412px;
  height: 53px;
`;
const MinutesAgo1 = styled.div`
  position: absolute;
  top: 35px;
  left: 134px;
`;
const LookingForAtPartnerParent = styled.div`
  position: absolute;
  top: 25px;
  left: 757px;
  width: 412px;
  height: 53px;
`;
const MinutesAgo2 = styled.div`
  position: absolute;
  top: 35px;
  left: 144px;
`;
const Comments2 = styled.div`
  position: absolute;
  top: 35px;
  left: 270px;
`;
const Views2 = styled.div`
  position: absolute;
  top: 35px;
  left: 369px;
`;
const GroupIcon3 = styled.img`
  position: absolute;
  height: 33.96%;
  width: 4.27%;
  top: 66.04%;
  right: 37.91%;
  bottom: 0%;
  left: 57.82%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GroupChild18 = styled.img`
  position: absolute;
  height: 16.6%;
  width: 2.84%;
  top: 75.47%;
  right: 13.51%;
  bottom: 7.92%;
  left: 83.65%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const IAmLookingForAUiuxDesigParent = styled.div`
  position: absolute;
  top: 136px;
  left: 122px;
  width: 422px;
  height: 53px;
`;
const IAmAUiuxDesignerParent = styled.div`
  position: absolute;
  top: 136px;
  left: 757px;
  width: 422px;
  height: 53px;
`;
const MinutesAgo4 = styled.div`
  position: absolute;
  top: 35px;
  left: 123px;
`;
const LookingForACopywriterToWrParent = styled.div`
  position: absolute;
  top: 252px;
  left: 122px;
  width: 412px;
  height: 53px;
`;
const LookingForACopywriterToWrGroup = styled.div`
  position: absolute;
  top: 252px;
  left: 757px;
  width: 412px;
  height: 53px;
`;
const MinutesAgo6 = styled.div`
  position: absolute;
  top: 35px;
  left: 104px;
`;
const LookingToBuildAWebsiteForParent = styled.div`
  position: absolute;
  top: 365px;
  left: 122px;
  width: 412px;
  height: 53px;
`;
const LookingToBuildAWebsiteForGroup = styled.div`
  position: absolute;
  top: 365px;
  left: 757px;
  width: 412px;
  height: 53px;
`;
const UpvoteChild = styled.img`
  position: absolute;
  top: -0.5px;
  left: -0.5px;
  width: 13px;
  height: 8px;
`;
const Div = styled.div`
  position: absolute;
  top: 6px;
  left: 2px;
`;
const Upvote = styled.div`
  position: absolute;
  top: 39px;
  left: 95px;
  width: 12px;
  height: 24px;
  color: var(--color-black);
`;
const Upvote1 = styled.div`
  position: absolute;
  top: 39px;
  left: 730px;
  width: 12px;
  height: 24px;
  color: var(--color-black);
`;
const Div2 = styled.div`
  position: absolute;
  top: 6px;
  left: 4px;
`;
const Upvote2 = styled.div`
  position: absolute;
  top: 152px;
  left: 95px;
  width: 12px;
  height: 24px;
  color: var(--color-black);
`;
const Upvote3 = styled.div`
  position: absolute;
  top: 152px;
  left: 730px;
  width: 12px;
  height: 24px;
  color: var(--color-black);
`;
const Upvote4 = styled.div`
  position: absolute;
  top: 268px;
  left: 95px;
  width: 12px;
  height: 24px;
  color: var(--color-black);
`;
const Upvote5 = styled.div`
  position: absolute;
  top: 268px;
  left: 730px;
  width: 12px;
  height: 24px;
  color: var(--color-black);
`;
const Div6 = styled.div`
  position: absolute;
  top: 6px;
  left: 0px;
`;
const Upvote6 = styled.div`
  position: absolute;
  top: 381px;
  left: 95px;
  width: 12px;
  height: 24px;
  color: var(--color-black);
`;
const Upvote7 = styled.div`
  position: absolute;
  top: 381px;
  left: 730px;
  width: 12px;
  height: 24px;
  color: var(--color-black);
`;
const EllipseParent = styled.div`
  position: absolute;
  top: 171px;
  left: 175px;
  width: 1250px;
  height: 443px;
  font-size: var(--font-size-xs);
  color: var(--color-gray-300);
`;
const GroupChild24 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 428px;
  height: 38px;
`;
const LoadMore = styled.div`
  position: absolute;
  top: 11px;
  left: 155px;
  line-height: 12px;
  font-weight: 600;
  display: inline-block;
  width: 119px;
  height: 18px;
`;
const RectangleGroup = styled.button`
position: absolute;
top: 644px;
left: 586px;
width: 428px;
height: 38px;
text-align: center;
font-size: var(--font-size-base);
background-color: transparent;
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
const CommunityItem = styled.img`
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
  line-height: 17px;
  font-weight: 300;
  display: inline-block;
  width: 352px;
`;
const PrivacyPolicy = styled.div`
  position: absolute;
  top: 927px;
  left: 648px;
  font-weight: 500;
  font-family: var(--font-roboto);
  display: inline-block;
  width: 85px;
`;
const TermsOfService = styled.div`
  position: absolute;
  top: 954px;
  left: 650px;
  font-weight: 500;
  font-family: var(--font-roboto);
  display: inline-block;
  width: 107px;
`;
const Contact = styled.div`
  position: absolute;
  top: 981px;
  left: 651px;
  font-weight: 500;
  font-family: var(--font-roboto);
  display: inline-block;
  width: 49px;
`;
const Faqs = styled.div`
  position: absolute;
  top: 1008px;
  left: 652px;
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
  font-size: var(--font-size-base);
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

const SmallImage = styled.img`
  width: 50px;
  height: 50px;
`;

const CommunityRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 1600px;
  height: 1121px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-black);
  font-family: var(--font-poppins);
`;
const Community1 = () => {
  return (
    <CommunityRoot>
      <UserDirectory1 to="/user-directory">User Directory</UserDirectory1>
      <Message1 to="/message">Message</Message1>
      <CommunityParent>
        <Community11>Community</Community11>
        <OriaModifie4 alt="" src="/oria--modifie-4@2x.png" />
      </CommunityParent>
      <OriaCommunityParent>
        <OriaCommunity>Oria Community</OriaCommunity>
        <OriaModifie4 alt="" src="/oria--modifie-4@2x.png" />
      </OriaCommunityParent>
      <GroupIcon to="/notify">
        <img alt="group icon" src="/group4.svg"/>
      </GroupIcon>
      <CommunityChild to="/edit-profile">
        <SmallImage alt="" src="/ellipse-5@2x.png" />
      </CommunityChild>
      <SearchParent>
        <Search>Search</Search>
        <InputText type="text" placeholder=" Search" />
        <VectorIcon onClick={() => { "/search"}}>
          <img alt="" src="/vector.svg" />
        </VectorIcon>
        <GroupItem onClick={() => { /* Add your click handler logic here */ }}>
          <img alt="" src="/vector-6.svg" />
        </GroupItem>

      </SearchParent>
      <RectangleParent>
        <GroupInner />
        <GroupChild1 />
        <ClickHereToContainer>
          <span>Click Here to Add New</span>
          <Span>{` `}</Span>
        </ClickHereToContainer>
        <Post>Post</Post>
        <PolygonIcon>
        <img alt="" src="/polygon-1.svg" />
        </PolygonIcon>
      </RectangleParent>
      <HowsItGoing>How’s it going, Luke?</HowsItGoing>
      <EllipseParent>
        <EllipseIcon alt="" src="/ellipse-20@2x.png" />
        <GroupChild2 alt="" src="/ellipse-24@2x.png" />
        <GroupChild3 alt="" src="/ellipse-22@2x.png" />
        <GroupChild4 alt="" src="/ellipse-25@2x.png" />
        <GroupChild5 alt="" src="/ellipse-21@2x.png" />
        <GroupChild6 alt="" src="/ellipse-26@2x.png" />
        <GroupChild7 alt="" src="/ellipse-23@2x.png" />
        <GroupChild8 alt="" src="/ellipse-23@2x.png" />
        <RectangleDiv />
        <GroupChild9 />
        <GroupChild10 />
        <GroupChild11 />
        <GroupChild12 />
        <GroupChild13 />
        <GroupChild14 />
        <GroupChild15 />
        <LookingToBuildAnAiPoweredParent>
          <LookingToBuild>
            Looking to build an AI-powered platform for my startup??
          </LookingToBuild>
          <Annoucement>ANNOUCEMENT</Annoucement>
          <PostedByDisha>posted by Disha Asa</PostedByDisha>
          <MinutesAgo
            href="https://founderslist.com/discuss/looking-to-build-an-ai-powered-platform-for-your-startup-J6YpQ6cl#comments"
            target="_blank"
          >{`4 minutes ago  `}</MinutesAgo>
          <Comments>2 Comments</Comments>
          <Views>30 Views</Views>
          <GroupIcon1 alt="" src="/group11.svg" />
          <GroupChild16 alt="" src="/group-364.svg" />
        </LookingToBuildAnAiPoweredParent>
        <LookingForAtPartnerParent>
          <LookingToBuild>Looking for at Partner ??</LookingToBuild>
          <Annoucement>ANNOUCEMENT</Annoucement>
          <PostedByDisha>posted by Disha Asa</PostedByDisha>
          <MinutesAgo1>{`4 minutes ago  `}</MinutesAgo1>
          <Comments>2 Comments</Comments>
          <Views>30 Views</Views>
          <GroupIcon1 alt="" src="/group11.svg" />
          <GroupChild16 alt="" src="/group-364.svg" />
        </LookingForAtPartnerParent>
        <IAmLookingForAUiuxDesigParent>
          <LookingToBuild>{`I am Looking for a UI/UX Designer  `}</LookingToBuild>
          <Annoucement>STARTUP IDEA / PITCH</Annoucement>
          <PostedByDisha>posted by John Stanley</PostedByDisha>
          <MinutesAgo2>{`10 minutes ago  `}</MinutesAgo2>
          <Comments2>2 Comments</Comments2>
          <Views2>30 Views</Views2>
          <GroupIcon3 alt="" src="/group11.svg" />
          <GroupChild18 alt="" src="/group-364.svg" />
        </IAmLookingForAUiuxDesigParent>
        <IAmAUiuxDesignerParent>
          <LookingToBuild>{`I am a UI/UX Designer  `}</LookingToBuild>
          <Annoucement>STARTUP IDEA / PITCH</Annoucement>
          <PostedByDisha>posted by John Stanley</PostedByDisha>
          <MinutesAgo2>{`10 minutes ago  `}</MinutesAgo2>
          <Comments2>2 Comments</Comments2>
          <Views2>30 Views</Views2>
          <GroupIcon3 alt="" src="/group11.svg" />
          <GroupChild18 alt="" src="/group-364.svg" />
        </IAmAUiuxDesignerParent>
        <LookingForACopywriterToWrParent>
          <LookingToBuild>
            Looking for a copywriter to write a copy for my Website?
          </LookingToBuild>
          <Annoucement>INFO</Annoucement>
          <PostedByDisha>posted by banda</PostedByDisha>
          <MinutesAgo4>{`27 minutes ago  `}</MinutesAgo4>
          <Comments>2 Comments</Comments>
          <Views>30 Views</Views>
          <GroupIcon1 alt="" src="/group11.svg" />
          <GroupChild16 alt="" src="/group-364.svg" />
        </LookingForACopywriterToWrParent>
        <LookingForACopywriterToWrGroup>
          <LookingToBuild>
            Looking for a copywriter to write a copy for my Website?
          </LookingToBuild>
          <Annoucement>INFO</Annoucement>
          <PostedByDisha>posted by banda</PostedByDisha>
          <MinutesAgo4>{`27 minutes ago  `}</MinutesAgo4>
          <Comments>2 Comments</Comments>
          <Views>30 Views</Views>
          <GroupIcon1 alt="" src="/group11.svg" />
          <GroupChild16 alt="" src="/group-364.svg" />
        </LookingForACopywriterToWrGroup>
        <LookingToBuildAWebsiteForParent>
          <LookingToBuild>
            Looking to build a website for a startup??
          </LookingToBuild>
          <Annoucement>ANNOUCEMENT</Annoucement>
          <PostedByDisha>{`posted by Mark `}</PostedByDisha>
          <MinutesAgo6>{`30 minutes ago  `}</MinutesAgo6>
          <Comments>2 Comments</Comments>
          <Views>30 Views</Views>
          <GroupIcon1 alt="" src="/group11.svg" />
          <GroupChild16 alt="" src="/group-364.svg" />
        </LookingToBuildAWebsiteForParent>
        <LookingToBuildAWebsiteForGroup>
          <LookingToBuild>
            Looking to build a website for your startup??
          </LookingToBuild>
          <Annoucement>ANNOUCEMENT</Annoucement>
          <PostedByDisha>{`posted by Mark `}</PostedByDisha>
          <MinutesAgo6>{`30 minutes ago  `}</MinutesAgo6>
          <Comments>2 Comments</Comments>
          <Views>30 Views</Views>
          <GroupIcon1 alt="" src="/group11.svg" />
          <GroupChild16 alt="" src="/group-364.svg" />
        </LookingToBuildAWebsiteForGroup>
        <Upvote>
          <UpvoteChild alt="" src="/vector-7.svg" />
          <Div>5</Div>
        </Upvote>
        <Upvote1>
          <UpvoteChild alt="" src="/vector-7.svg" />
          <Div>5</Div>
        </Upvote1>
        <Upvote2>
          <UpvoteChild alt="" src="/vector-7.svg" />
          <Div2>1</Div2>
        </Upvote2>
        <Upvote3>
          <UpvoteChild alt="" src="/vector-7.svg" />
          <Div2>1</Div2>
        </Upvote3>
        <Upvote4>
          <UpvoteChild alt="" src="/vector-7.svg" />
          <Div>4</Div>
        </Upvote4>
        <Upvote5>
          <UpvoteChild alt="" src="/vector-7.svg" />
          <Div>4</Div>
        </Upvote5>
        <Upvote6>
          <UpvoteChild alt="" src="/vector-7.svg" />
          <Div6>10</Div6>
        </Upvote6>
        <Upvote7>
          <UpvoteChild alt="" src="/vector-7.svg" />
          <Div6>10</Div6>
        </Upvote7>
      </EllipseParent>
      <RectangleGroup to="/load-more">
        <GroupChild24 />
        <LoadMore>LOAD MORE</LoadMore>
      </RectangleGroup>
      <CommunityItem alt="" src="/vector-4.svg" />
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
      <MditwitterIcon alt="" src="/mditwitter2.svg" />
      <RiinstagramFillIcon alt="" src="/riinstagramfill2.svg" />
    </CommunityRoot>
  );
};

export default Community1;
