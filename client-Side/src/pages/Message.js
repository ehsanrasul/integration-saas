import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { Link } from 'react-router-dom';

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
const AllConversations = styled.div`
  position: absolute;
  top: 111px;
  left: 17px;
  line-height: 12px;
  font-weight: 500;
  display: inline-block;
  width: 151px;
  height: 18px;
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
const Group = styled(Button)`
  width: 1.49%;
  position: absolute;
  height: 2.61%;
  top: 1.83%;
  right: 5.13%;
  bottom: 94.76%;
  left: 93.39%;
  border: none;
  outline: none;
`;
const MessageChild = styled.button`
  position: absolute;
  top: 13px;
  left: 1537px;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  object-fit: cover;
   background-color: transparent;
  background-image: url("/ellipse-5@2x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  outline: none;
  cursor: pointer;
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
const GroupChild = styled.input`
position: absolute;
top: 13px;
left: calc(50% - 298px);
border-radius: var(--br-31xl);
border: 1.5px solid var(--color-black);
box-sizing: border-box;
width: 623px;
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
const VectorIcon = styled.button`
  position: absolute;
  height: 46.96%;
  width: 2.96%;
  top: 60.53%;
  right: 91.38%;
  bottom: 29.52%;
  left: 5.96%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  background-color: transparent;
  background-image: url("/vector.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  outline: none;
  cursor: pointer;
`;
const GroupItem = styled.button`
  position: absolute;
  top: 30.5px;
  left: 584.5px;
  width: 24px;
  height: 13px;
  background-color: transparent;

  background-image: url("/vector-6.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  outline: none;
  cursor: pointer;


`;
const SearchParent = styled.div`
  position: absolute;
  top: 13px;
  left: 502px;
  width: 638px;
  height: 46px;
`;
const GroupInner = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 112px);
  border-radius: var(--br-31xl);
  border: 1.5px solid var(--color-black);
  box-sizing: border-box;
  width: 260px;
  height: 46px;
`;
const GroupIcon = styled.button`
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
  background-color: transparent;
  background-image: url("/group-35.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  outline: none;
  cursor: pointer;
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
  top: 15px;
  left: 190px;
  font-size: var(--font-size-base);
  line-height: 12px;
  color: var(--color-royalblue);
`;
const PolygonIcon = styled.img`
  position: absolute;
  top: 19.5px;
  left: 225.67px;
  border-radius: var(--br-12xs);
  width: 10.66px;
  height: 9.5px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 13px;
  left: calc(50% + 374px);
  width: 224px;
  height: 46px;
  font-size: var(--font-size-4xs);
  color: var(--color-black);
`;
const MessageItem = styled.img`
  position: absolute;
  top: 151px;
  left: 17px;
  border-radius: 50%;
  width: 62px;
  height: 62px;
  object-fit: cover;
`;
const MessageInner = styled.img`
  position: absolute;
  top: 115.5px;
  left: 167.5px;
  width: 9px;
  height: 5px;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 1.2%;
  width: 0.69%;
  top: 12.32%;
  right: 80.78%;
  bottom: 86.47%;
  left: 18.53%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const MickBurn = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 12px;
  font-weight: 600;
  display: inline-block;
  width: 99px;
  height: 18px;
`;
const MeOkay = styled.div`
  position: absolute;
  top: 30px;
  left: 0px;
  font-size: var(--font-size-base);
  line-height: 12px;
  font-weight: 500;
  display: inline-block;
  width: 83px;
  height: 18px;
`;
const Mins = styled.div`
  position: absolute;
  top: 0px;
  left: 161px;
  font-size: var(--font-size-sm);
  line-height: 12px;
  font-weight: 500;
  display: inline-block;
  width: 59px;
  height: 18px;
`;
const GroupChild1 = styled.img`
  position: absolute;
  top: 25px;
  left: 162px;
  width: 45px;
  height: 19px;
`;
const MickBurnParent = styled.div`
  position: absolute;
  top: 158px;
  left: 107px;
  width: 220px;
  height: 48px;
  font-size: var(--font-size-lg);
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 111px;
  left: 334px;
  border-radius: var(--br-xl);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 1249px;
  height: 674px;
`;
const MessageRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 1600px;
  height: 913px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-gray-500);
  font-family: var(--font-poppins);
`;
const Message = () => {
  return (
    <MessageRoot>
      <UserDirectory1 variant="" href="/user-directory">
        User Directory
      </UserDirectory1>
      <AllConversations>All Conversations</AllConversations>
      <Message1 variant="" href="/message">
        Message
      </Message1>
      <CommunityParent>
        <Community2>Community</Community2>
        <OriaModifie4 alt="" src="/oria--modifie-4@2x.png" />
      </CommunityParent>
      <Group variant="" href="/notify">
        <img alt="group icon" src="/group4.svg"/>
      </Group>
      <Link to="/edit-profile">
      <MessageChild alt="" src="/ellipse-5@2x.png" />
      </Link>
      <SearchParent>
        <GroupChild type="text" placeholder="Search" />
        <VectorIcon alt="" src="/vector.svg" onClick={() => { "/search"}}/>
        <GroupItem alt="" src="/vector-6.svg" onClick={() => { "/search"}}/>
      </SearchParent>
      <RectangleParent>
        <GroupInner />
        <GroupIcon alt="" src="/group-35.svg" onClick={() => { "/add post"}}/>
        <ClickHereToContainer>
          <span>Click Here to Add New</span>
          <Span>{` `}</Span>
        </ClickHereToContainer>
        <Post>Post</Post>
        <PolygonIcon alt="" src="/polygon-1.svg" />
      </RectangleParent>
      <MessageItem alt="" src="/ellipse-29@2x.png" />
      <MessageInner alt="" src="/vector-61.svg" />
      <VectorIcon1 alt="" src="/vector1.svg" />
      <MickBurnParent>
        <MickBurn>Mick Burn</MickBurn>
        <MeOkay>Me : Okay</MeOkay>
        <Mins>2 mins</Mins>
        <GroupChild1 alt="" src="/group-52.svg" />
      </MickBurnParent>
      <RectangleDiv />
    </MessageRoot>
  );
};

export default Message;
