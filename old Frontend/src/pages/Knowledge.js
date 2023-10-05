import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 580px);
  border-radius: var(--br-xl);
  background: linear-gradient(120.34deg, #fff, rgba(255, 255, 255, 0) 99.97%);
  width: 1160px;
  height: 619px;
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
  background-color: var(--color-gold-300);
  width: 133px;
  height: 44px;
`;
const Rect9 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% + 184px);
  border-radius: var(--br-3xs);
  background-color: var(--color-saddlebrown);
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
const Knowledge1 = styled.div`
  position: absolute;
  top: 7px;
  left: 517px;
  font-weight: 500;
`;
const Nav = styled.div`
  position: absolute;
  top: 60px;
  left: 0px;
  width: 634px;
  height: 44px;
  font-size: var(--font-size-lg);
  color: var(--color-white);
`;
const Header = styled.div`
  position: absolute;
  top: 44px;
  left: 263px;
  width: 634px;
  height: 104px;
  font-size: var(--font-size-3xl);
  color: var(--color-gray-400);
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
  top: 459px;
  left: 465px;
  width: 231px;
  height: 52px;
  font-size: var(--font-size-xl);
  color: var(--color-white);
`;
const FrameChild = styled.div`
  position: absolute;
  top: 3px;
  left: calc(50% - 16px);
  border-radius: var(--br-5xs);
  border: 0.5px solid var(--color-silver);
  box-sizing: border-box;
  width: 32px;
  height: 32px;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 19px);
  border-radius: var(--br-5xs);
  border: 1px solid var(--color-gold-100);
  box-sizing: border-box;
  width: 38px;
  height: 38px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 38px;
  height: 38px;
`;
const AllFolders = styled.div`
  position: absolute;
  top: 6px;
  left: 51px;
  font-weight: 500;
`;
const FrameParent = styled.div`
  position: absolute;
  top: 184px;
  left: 508px;
  width: 144px;
  height: 38px;
`;
const MarketingData1 = styled.div`
  position: absolute;
  top: 6px;
  left: 50px;
  font-weight: 500;
`;
const FrameGroup = styled.div`
  position: absolute;
  top: 309px;
  left: 194px;
  width: 190px;
  height: 38px;
`;
const M = styled.b`
  position: absolute;
  top: 266px;
  left: 194px;
  font-size: var(--font-size-5xl);
`;
const KnowledgeRoot = styled.div`
  position: relative;
  border-radius: var(--br-31xl);
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.18);
  width: 1160px;
  height: 569px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-black);
  font-family: var(--font-poppins);
`;
const Knowledge = () => {
  return (
    <KnowledgeRoot>
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
          <Knowledge1>Knowledge</Knowledge1>
        </Nav>
      </Header>
      <Next>
        <NextChild />
        <NextItem />
        <Next1>Next</Next1>
        <Canel>Canel</Canel>
      </Next>
      <FrameParent>
        <RectangleParent>
          <FrameChild />
          <FrameItem />
        </RectangleParent>
        <AllFolders>All Folders</AllFolders>
      </FrameParent>
      <FrameGroup>
        <RectangleParent>
          <FrameChild />
          <FrameItem />
        </RectangleParent>
        <MarketingData1>Marketing Data</MarketingData1>
      </FrameGroup>
      <M>M</M>
    </KnowledgeRoot>
  );
};

export default Knowledge;
