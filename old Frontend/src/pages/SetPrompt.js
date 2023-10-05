import styled from "styled-components";
import { Link } from "react-router-dom";

const Background = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 580px);
  border-radius: var(--br-xl);
  background: linear-gradient(120.34deg, #fff, rgba(255, 255, 255, 0) 99.97%);
  width: 1160px;
  height: 793px;
`;
const CustomizeYourBot = styled.b`
  position: absolute;
  top: 0px;
  left: calc(50% - 110px);
`;
const Rect6 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 317px);
  border-radius: var(--br-3xs);
  background-color: var(--color-gold-300);
  width: 133px;
  height: 44px;
`;
const Rect7 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 150px);
  border-radius: var(--br-3xs);
  background-color: var(--color-gold-300);
  width: 133px;
  height: 44px;
`;
const Rect8 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% + 17px);
  border-radius: var(--br-3xs);
  background-color: var(--color-saddlebrown);
  width: 133px;
  height: 44px;
`;
const Rect9 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% + 184px);
  border-radius: var(--br-3xs);
  background-color: var(--color-gold-300);
  width: 133px;
  height: 44px;
`;
const Personality = styled.div`
  position: absolute;
  top: 7px;
  left: 16px;
  font-weight: 500;
`;
const General1 = styled.div`
  position: absolute;
  top: 7px;
  left: 197px;
  font-weight: 500;
`;
const SetOfPrompt = styled.div`
  position: absolute;
  top: 7px;
  left: 339px;
  font-weight: 500;
`;
const Knowledge = styled.div`
  position: absolute;
  top: 7px;
  left: 517px;
  font-weight: 500;
`;
const Nav = styled.div`
  position: absolute;
  top: 60px;
  left: calc(50% - 317px);
  width: 634px;
  height: 44px;
  font-size: var(--font-size-lg);
  color: var(--color-white);
`;
const Header = styled.div`
  position: absolute;
  top: 44px;
  left: calc(50% - 317px);
  width: 634px;
  height: 104px;
  text-align: center;
  font-size: var(--font-size-3xl);
  color: var(--color-gray-400);
`;
const PromptName = styled.b`
  position: absolute;
  top: 0px;
  left: calc(50% - 485px);
`;
const BotNameChild = styled.input`
  position: absolute;
  top: 44px;
  left: 0px;
  border-radius: var(--br-xl);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 970px;
  height: 72px;
`;
const BotName = styled.div`
  position: absolute;
  top: 187px;
  left: calc(50% - 485px);
  width: 970px;
  height: 116px;
`;
const BotDescriptionChild = styled.input`
  position: absolute;
  top: 48px;
  left: 0px;
  border-radius: var(--br-xl);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 970px;
  height: 108px;
`;
const BotDescription = styled.div`
  position: absolute;
  top: 330px;
  left: calc(50% - 485px);
  width: 970px;
  height: 156px;
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
const Next1 = styled.div`
  position: absolute;
  top: 12px;
  left: 155px;
  font-weight: 600;
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
  top: 667px;
  left: 465px;
  width: 231px;
  height: 52px;
  text-align: center;
  color: var(--color-white);
`;
const ValidateChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 89px);
  border-radius: var(--br-3xs);
  background-color: var(--color-gold-300);
  width: 178px;
  height: 56px;
`;
const Validate1 = styled.div`
  position: absolute;
  top: 12px;
  left: calc(50% - 43px);
  font-weight: 600;
`;

const Validate = styled.button`
  position: absolute;
  top: 580px;
  left: calc(50% - 89px);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 158px;
  height: 36px;
  color: var(--color-white);
  background: transparent;
`;
const AddChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 68.5px);
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 137px;
  height: 44px;
`;
const AddAPrompt = styled.div`
  position: absolute;
  top: 12px;
  left: calc(50% - 37.5px);
  font-weight: 500;
`;
const GroupIcon = styled.img`
  position: absolute;
  height: 36.36%;
  width: 11.68%;
  top: 31.82%;
  right: 81.02%;
  bottom: 31.82%;
  left: 7.3%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Add = styled.button`
  position: absolute;
  top: 508px;
  left: calc(50% - 485px);
  width: 137px;
  height: 44px;
  font-size: var(--font-size-sm);
  background: transparent;
`;
const SetPromptRoot = styled.div`
  position: relative;
  border-radius: var(--br-31xl);
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.18);
  width: 100%;
  height: 793px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-poppins);
`;
const SetPrompt = () => {
  return (
    <SetPromptRoot>
      <Background />
      <Header>
        <CustomizeYourBot>Customize Your Bot</CustomizeYourBot>
        <Nav>
          <Rect6 />
          <Rect7 />
          <Rect8 />
          <Rect9 />
          <Personality>Personality</Personality>
          <General1>General</General1>
          <SetOfPrompt>Set of Prompt</SetOfPrompt>
          <Knowledge>Knowledge</Knowledge>
        </Nav>
      </Header>
      <BotName>
        <PromptName>Prompt Name</PromptName>
        <BotNameChild placeholder="Enter Prompt Name"/>
      </BotName>
      <BotDescription>
        <PromptName>Prompt</PromptName>
        <BotDescriptionChild placeholder="Enter Your Prompt" />
      </BotDescription>
      <Next>
        <Link to="/create-bot">
        <NextChild />
        <Canel>Canel</Canel>
        </Link>
        <Link to="/knowledge">
        <NextItem />
        <Next1>Next</Next1>
        </Link>
      </Next>
      <Validate onClick={""}>
        <ValidateChild />
        <Validate1>Validate</Validate1>
      </Validate>
      <Add onClick={""}>
        <AddChild />
        <AddAPrompt>Add a prompt</AddAPrompt>
        <GroupIcon alt="" src="/group2.svg" />
      </Add>
    </SetPromptRoot>
  );
};

export default SetPrompt;
