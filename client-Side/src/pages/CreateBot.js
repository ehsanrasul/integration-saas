import styled from "styled-components";
import { Link } from 'react-router-dom';

const CreateBotChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 580px);
  border-radius: var(--br-xl);
  background: linear-gradient(120.34deg, #fff, rgba(255, 255, 255, 0) 99.97%);
  width: 1160px;
  height: 721px;
`;
const WhatDoYou = styled.b`
  position: absolute;
  top: 84px;
  left: calc(50% - 165px);
  text-decoration: underline;
`;
const PromptChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 326.5px);
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 2px solid var(--color-black);
  box-sizing: border-box;
  width: 653px;
  height: 152px;
`;
const Prompt1 = styled.b`
  position: absolute;
  top: 26px;
  left: calc(50% - 42.5px);
`;
const CreateYourOwn = styled.div`
  position: absolute;
  top: 72px;
  left: calc(50% - 279.5px);
  color: var(--color-black);
`;

const Prompt2 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 326.5px);
  width: 653px;
  height: 152px;
`;
const CreateYourOwn1 = styled.div`
  position: absolute;
  top: 73px;
  left: calc(50% - 308.5px);
`;
const Bot1 = styled.b`
  position: absolute;
  top: 27px;
  left: calc(50% - 19.5px);
  color: var(--color-gray-400);
`;
const Bot = styled.div`
  position: absolute;
  top: 180px;
  left: calc(50% - 326.5px);
  width: 653px;
  height: 152px;
  color: var(--color-black);
`;
const PromptParent = styled.div`
  position: absolute;
  top: 195px;
  left: calc(50% - 326px);
  width: 653px;
  height: 332px;
`;


const CreateBotRoot = styled.div`
  position: relative;
  border-radius: var(--br-31xl);
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.18);
  width: 100%;
  height: 721px;
  text-align: center;
  font-size: var(--font-size-3xl);
  color: var(--color-gray-400);
  font-family: var(--font-poppins);
`;
const CreateBot = () => {
  return (
    <CreateBotRoot>
      <CreateBotChild />
      <WhatDoYou>What Do You Want To Create:</WhatDoYou>
      <PromptParent>
        <Link to="/prompt">
        <Prompt2>
          <PromptChild />
          <Prompt1>{`Prompt `}</Prompt1>
          <CreateYourOwn>
            Create your own prompt and save it in your library.
          </CreateYourOwn>
        </Prompt2>
        </Link>
        <Link to="/customize-bot">
        <Bot>
          <PromptChild />
          <CreateYourOwn1>{`Create your own assistant, with his mood and own data. `}</CreateYourOwn1>
          <Bot1>Bot</Bot1>
        </Bot>
        </Link>
      </PromptParent>
    </CreateBotRoot>
  );
};

export default CreateBot;
