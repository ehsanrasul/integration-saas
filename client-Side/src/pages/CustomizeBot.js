import React ,{useState}from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';

const Background = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 580px);
  border-radius: var(--br-xl);
  background: linear-gradient(120.34deg, #fff, rgba(255, 255, 255, 0) 99.97%);
  width: 1160px;
  height: 1879px;
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
  background-color: var(--color-saddlebrown);
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
const Prompt1 = styled.b`
  position: absolute;
  top: 0px;
  left: calc(50% - 485px);
`;
const ThisIsYour = styled.p`
  margin: 0;
`;
const ThisIsYourContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 0px;
  font-size: var(--font-size-lg);
  line-height: 25px;
`;

const PptChild = styled.input`
  position: absolute;
  top: 124px;
  left: 0px;
  border-radius: var(--br-xl);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 970px;
  height: 197px;
  resize: vertical; /* Allow vertical resizing */
  overflow-y: auto; /* Show scrollbar when content exceeds height */
`;
const Ppt = styled.div`
  position: absolute;
  top: 187px;
  left: calc(50% - 485px);
  width: 970px;
  height: 321px;
`;
const Optional = styled.span`
  font-weight: 600;
`;
const Prompt2 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 485px);
`;
const ThisIsWhereContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 0px;
  font-size: var(--font-size-lg);
`;
const MoodChild = styled.input`
  position: absolute;
  top: 118px;
  left: 0px;
  border-radius: var(--br-xl);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 970px;
  height: 84px;
`;
const Mood = styled.div`
  position: absolute;
  top: 543px;
  left: calc(50% - 485px);
  width: 970px;
  height: 202px;
`;
const RelevanceScore1 = styled.b`
  position: absolute;
  top: 0px;
  left: calc(50% - 490.5px);
  font-size: var(--font-size-xl);
`;
const TheRelevanceScoreContainer = styled.div`
  position: absolute;
  top: 48px;
  left: 22px;
`;
const Wide = styled.div`
  position: absolute;
  top: 30px;
  left: 0px;
  font-weight: 500;
`;
const Balanced = styled.div`
  position: absolute;
  top: 30px;
  left: 459px;
  font-weight: 500;
  text-align: center;
`;
const Narrow = styled.div`
  position: absolute;
  top: 30px;
  left: 959px;
  font-weight: 500;
  text-align: right;
`;
const ScaleChild = styled.div`
  position: absolute;
  top: 3px;
  left: 21px;
  border-radius: var(--br-31xl);
  background-color: var(--color-gainsboro);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 971px;
  height: 12px;
`;
const UnionIcon = styled.img`
  position: relative;
  width: 490px;
  height: 18px;
`;
const ScaleItem = styled.img`
  position: absolute;
  top: 18px;
  left: 21.5px;
  width: 1px;
  height: 12px;
`;
const ScaleInner = styled.img`
  position: absolute;
  top: 19px;
  left: 502.5px;
  width: 1px;
  height: 12px;
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 18px;
  left: 991.5px;
  width: 1px;
  height: 12px;
`;
const Scale = styled.div`
  position: absolute;
  top: 189px;
  left: 0px;
  width: 1025px;
  height: 57px;
`;
const RelevanceScore = styled.div`
  position: absolute;
  top: 1035px;
  left: calc(50% - 507px);
  width: 1025px;
  height: 246px;
  font-size: var(--font-size-lg);
`;
const PersistPrompt1 = styled.b`
  position: absolute;
  top: 0px;
  left: calc(50% - 331px);
`;
const ContinuouslyReEmphasizesThe = styled.div`
  position: absolute;
  top: 48px;
  left: 0px;
  font-size: var(--font-size-lg);
`;
const OnChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-31xl);
  background-color: var(--color-gainsboro);
  width: 49px;
  height: 27.79px;
`;

const OnItem = styled.button`
  position: absolute;
  top: 2.19px;
  left: 2.19px;
  border-radius: 50%;
  background-color: var(--color-white);
  width: 23.4px;
  height: 23.4px;
  transition: left 0.3s ease; /* Add smooth transition for animation */
  left: ${({ position }) => position}px;
`;

const On = styled.button`
  position: absolute;
  top: 104.1px;
  left: 0px;
  width: 49px;
  height: 27.79px;
  background: transparent;
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
`;

const PersistPrompt = styled.div`
  position: absolute;
  top: 1345px;
  left: calc(50% - 485px);
  width: 662px;
  height: 131.9px;
`;
const ReverseVectorSearch1 = styled.b`
  position: absolute;
  top: 0px;
  left: calc(50% - 357.5px);
`;
const ReverseVectorSearch = styled.div`
  position: absolute;
  top: 1534px;
  left: calc(50% - 485px);
  width: 715px;
  height: 131.9px;
`;
const NextChild = styled.button`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-3xs);
  background-color: var(--color-gainsboro);
  width: 106px;
  height: 52px;
  color :white;
`;
const NextItem = styled.button`
  position: absolute;
  top: 0px;
  left: 125px;
  border-radius: var(--br-3xs);
  background-color: var(--color-gold-300);
  width: 106px;
  height: 52px;
  color :white;
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
  top: 1774px;
  left: 465px;
  width: 231px;
  height: 52px;
  text-align: center;
  color: var(--color-white);
`;
const DeterminesHowTheContainer = styled.div`
  position: absolute;
  top: 38px;
  left: 0px;
  font-size: var(--font-size-lg);
`;
const PercentagesChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-31xl) 0px 0px var(--br-31xl);
  background-color: #ff0000;
  width: 421px;
  height: 63px;
`;
const PercentagesItem = styled.div`
  position: absolute;
  top: 0px;
  left: 424px;
  background-color: var(--color-gray-400);
  width: 270px;
  height: 63px;
`;
const PercentagesInner = styled.div`
  position: absolute;
  top: 0px;
  left: 697px;
  border-radius: 0px var(--br-31xl) var(--br-31xl) 0px;
  background-color: var(--color-gold-300);
  width: 273px;
  height: 63px;
`;
const PercentagesChild1 = styled.div`
  position: absolute;
  top: 9px;
  left: 399px;
  border-radius: 50%;
  background-color: var(--color-white);
  width: 46px;
  height: 46px;
`;
const PercentagesChild2 = styled.div`
  position: absolute;
  top: 9px;
  left: 673px;
  border-radius: 50%;
  background-color: var(--color-white);
  width: 46px;
  height: 46px;
`;
const Context55 = styled.b`
  position: absolute;
  top: 17px;
  left: calc(50% - 339px);
`;
const History20 = styled.b`
  position: absolute;
  top: 17px;
  left: calc(50% + 14px);
`;
const Response25 = styled.b`
  position: absolute;
  top: 17px;
  left: calc(50% + 276px);
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 23.25%;
  width: 2.89%;
  top: 39.68%;
  right: 26.8%;
  bottom: 37.06%;
  left: 70.31%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon2 = styled.img`
  position: absolute;
  height: 23.25%;
  width: 2.89%;
  top: 39.68%;
  right: 55.05%;
  bottom: 37.06%;
  left: 42.06%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Percentages = styled.div`
  position: absolute;
  top: 143px;
  left: 0px;
  width: 970px;
  height: 63px;
  text-align: center;
  color: var(--color-white);
`;
const Token = styled.div`
  position: absolute;
  top: 775px;
  left: calc(50% - 485px);
  width: 970px;
  height: 206px;
`;

const NavButton = styled(Link)`
  /* Styles for the button to make it look like a link */
  text-decoration: none;
  color: inherit;
`;

const ScoreSlider = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 485px);
  width: 970px;
  height: 202px;
`;

const ScoreSliderChild = styled.input`
  position: absolute;
  top: 2.6%;
  left: -0.5%;
  width: 99.7%;
  border-radius: var(--br-31xl);
  height: 4%;
  -webkit-appearance: none;
  background: yellow;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: yellow; /* Change the slider thumb color to yellow */
    border-radius: 50%;
    border: 1px solid black;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    background: yellow; /* Change the slider track color to yellow */
    border-radius: var(--br-xl);
  }

  &:focus {
    outline: none;
  }
`;


const CustomizeBotRoot = styled.div`
  position: relative;
  border-radius: var(--br-31xl);
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.18);
  width: 100%;
  height: 1879px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-poppins);
`;

const SliderLabels = styled.div`
  position: absolute;
  top: 20px; /* Adjust the positioning of the labels */
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: black; /* Adjust label color */
`;


const TokenSlider = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 485px);
  width: 970px;
  height: 202px;
  background: ${({ labelColor }) => labelColor};
`;

const TokenSliderChild = styled.input`
  position: absolute;
  top: 2.6%;
  left: -0.5%;
  width: 99.7%;
  border-radius: var(--br-31xl);
  height: 4%;
  background : black;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: ${({ labelColor }) => labelColor};
    background: url('/vector5.svg');
    background-size: fit;
    border-radius: 50%;
    border: 1px solid black;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    background: ${({ labelColor }) => labelColor};
    border-radius: var(--br-xl);
  }

  &:focus {
    outline: none;
  }
`;

const TokenLabels = styled.div`
  position: absolute;
  top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  font-weight: bold;
`;

const TokenLabel = styled.span`
  font-weight: bold;
  background: ${({ labelColor }) => labelColor};
`;


const CustomizeBot = () => {
  
  const [moodValue, setMoodValue] = useState(50); // Initial value of the mood slider
  const [Token1Value, setToken1Value] = useState(30);
  const [Token2Value, setToken2Value] = useState(70);


  const handleMoodChange = (event) => {
    const newValue = parseInt(event.target.value);
    setMoodValue(newValue);
  };

  const handleToken1Change = (event) => {
    const newToken1Value = parseInt(event.target.value);
    const maxToken1Value = 100 - Token2Value;
    const limitedToken1Value = Math.min(newToken1Value, maxToken1Value);
    setToken1Value(newToken1Value);
    if (newToken1Value === 100) {
      setToken2Value(100);
    }
  };

  const handleToken2Change = (event) => {
    const newToken2Value = parseInt(event.target.value); // Calculate Token2Value as 100 - given value
    const maxToken2Value = 100 - Token1Value;
    const limitedToken2Value = Math.min(newToken2Value, maxToken2Value);

    setToken2Value(newToken2Value);
    if (newToken2Value === 100) {
      setToken1Value(0);
    }
  };


  const [itemPositions, setItemPositions] = useState({});

  const handleOnButtonClick = (id) => {
    setItemPositions((prevPositions) => ({
      ...prevPositions,
      [id]: prevPositions[id] === 0 ? 25 : 0, 
    }));
  };

  return (
    <CustomizeBotRoot>
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
      <Ppt>
        <Prompt1>Prompt *</Prompt1>
        <ThisIsYourContainer>
          <ThisIsYour>{`This is your main control panel. Here you provide detailed instructions that directly guide the behavior and `}</ThisIsYour>
          <ThisIsYour>{`output of your AI bot. What is the main missing of your bot. `}</ThisIsYour>
        </ThisIsYourContainer>
        <PptChild placeholder="Enter your Text"/>
      </Ppt>
      <Mood>
        <Prompt2>
          <b>{`Mood `}</b>
          <Optional>(OPTIONAL)</Optional>
        </Prompt2>
        <ThisIsWhereContainer>
          <ThisIsYour>
            This is where you set the general 'mood' or 'character' for your AI
            bot. It's like giving it a personality, but its
          </ThisIsYour>
          <ThisIsYour>influence on the bot's responses is gentler.</ThisIsYour>
        </ThisIsWhereContainer>
        <MoodChild placeholder='Enter your Text'/>
      </Mood>
      <RelevanceScore>
        <RelevanceScore1>Relevance Score</RelevanceScore1>
        <TheRelevanceScoreContainer>
          <ThisIsYour>
            The Relevance Score determines how closely the data Cody uses to
            answer your question relates to your
          </ThisIsYour>
          <ThisIsYour>
            inquiry. With a 'Narrow Relevance', Cody pulls in information that
            is directly related to your question for a
          </ThisIsYour>
          <ThisIsYour>{`precise answer. When 'Wide Relevance' is chosen, Cody includes a wider range of information which may `}</ThisIsYour>
          <ThisIsYour>
            not be directly related to your question but helps in providing a
            more comprehensive response.
          </ThisIsYour>
        </TheRelevanceScoreContainer>
        <Scale>
          <ScaleChild />

          <ScoreSlider>
        <ScoreSliderChild
          type="range"
          min="0"
          max="100"
          step="50"
          value={moodValue}
          onChange={handleMoodChange}
        />
        <SliderLabels>
          <span>Wide</span>
          <span></span>
          <span>Balanced</span>
          <span></span>
          <span>Narrow</span>
        </SliderLabels>
      </ScoreSlider>

          <ScaleItem alt="" src="/vector-1.svg" />
          <ScaleInner alt="" src="/vector-1.svg" />
          <VectorIcon alt="" src="/vector-1.svg" />
        </Scale>
      </RelevanceScore>
      <PersistPrompt>
        <PersistPrompt1>Persist Prompt</PersistPrompt1>
        <ContinuouslyReEmphasizesThe>
          Continuously re-emphasizes the prompt to maintain strict AI
          compliance.
        </ContinuouslyReEmphasizesThe>
      <On id="button1" onClick={() => handleOnButtonClick("button1")}>
        <OnChild />
        <OnItem position={itemPositions["button1"] || 0} />
      </On>
      </PersistPrompt>
      <ReverseVectorSearch>
        <ReverseVectorSearch1>Reverse Vector Search</ReverseVectorSearch1>
        <ContinuouslyReEmphasizesThe>
          Contextualizes search by merging AI and user responses to enhance
          relevance.
        </ContinuouslyReEmphasizesThe>
      <On id="button2" onClick={() => handleOnButtonClick("button2")}>
        <OnChild />
        <OnItem position={itemPositions["button2"] || 0} />
      </On>
      </ReverseVectorSearch>
      <Next>
        <Link to="/create-bot">
        <NextChild />
        <Canel>Canel</Canel>
        </Link>
        <Link to="/general">
        <NextItem />
        <Next1>Next</Next1>
        </Link>
        
        
      </Next>
      <Token>
        <Prompt1>Token Distribution</Prompt1>
        <DeterminesHowTheContainer>
          <ThisIsYour>{`Determines how the total amount of available tokens should be distributed between context, conversation `}</ThisIsYour>
          <ThisIsYour>history and response generation.</ThisIsYour>
        </DeterminesHowTheContainer>
        <Percentages>
          
      <TokenSlider>
        <TokenSliderChild
          type="range"
          min="0"
          max="100"
          step="1"
          value={Token1Value}
          onChange={handleToken1Change}
          src="/vector5.svg"
        />
        <TokenSliderChild
          type="range"
          min="0"
          max="100"
          step="1"
          value={Token2Value}
          onChange={handleToken2Change}
          src="/vector5.svg"
        />
        <TokenLabels>
          <TokenLabel labelColor="red">Context: {Token1Value}</TokenLabel>
          <TokenLabel labelColor="black">History: {100 - ((100 - Token2Value) + Token1Value)}</TokenLabel>
          <TokenLabel labelColor="yellow">Response: {100 - Token2Value}</TokenLabel>
        </TokenLabels>
      </TokenSlider>
          
          
        </Percentages>
      </Token>
    </CustomizeBotRoot>
  );
};

export default CustomizeBot;

