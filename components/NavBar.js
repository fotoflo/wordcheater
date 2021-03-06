import React from "react";


import styled from "styled-components";

import ThemeToggleSwitch from './ThemeToggleSwitch';
import {Navbar, Container} from 'react-bootstrap'

import { FaLightbulb, FaRegQuestionCircle } from 'react-icons/fa';
import { DEFAULT_THEME } from "../next.config";


// import {FaSignOutAlt} from 'react-icons/fa'

function NavBar({
  theme,
  helpModalToggler,
  hintToggler,
  themeToggler,
  wordLength,
  wordLengthToggler 
}) {
 
  const getDefaultThemeToggleSwitchColor = () => {
    return DEFAULT_THEME === 'light' ? true : false; 
  }

  return (
    <StyledNavbar variant={theme} className="justify-content-between">
      <Container>
        <Navbar.Brand onClick={helpModalToggler}
          data-test-id="call-help-modal">
          <FaRegQuestionCircle />
        </Navbar.Brand>
      </Container>
      <Container>
        <Navbar.Brand href="#home">WordCheater</Navbar.Brand>
      </Container>
      <Container className="justify-content-end">
        <WordLengthToggler 
          data-testid={'navWordLength' }
          onClick={wordLengthToggler}>{wordLength}
        </WordLengthToggler>
        <ThemeToggleSwitch defaultValue={getDefaultThemeToggleSwitchColor()} toggleFn={themeToggler} />
        <HintToggler onClick={hintToggler}>
          <FaLightbulb/>
        </HintToggler>
      </Container>
    </StyledNavbar>
  );
}


const HintToggler = styled.div`
  color: ${ props => props.theme.fontColor};
  padding-bottom: 2px;
  margin-left: 10px;
`;

const WordLengthToggler = styled.div`
  margin-right: 10px;
`

const StyledNavbar = styled(Navbar)`
  border-bottom: 1px solid ${ props => props.theme.fontColor};
  color: ${ props => props.theme.fontColor };
  left: 50%;
  transform: translatex(-50%);
  width:95%;
  margin-bottom: 2rem;
`


export default NavBar;
