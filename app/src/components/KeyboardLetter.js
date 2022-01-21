import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

function KeyboardLetter({label, keydownHandler, keyboardState, ...props}){

  const letterState = keyboardState[label] || 0 ;

  return (
    <KeyBox 
      {...props}
      letterstate={letterState}
      onClick={()=>keydownHandler({key: label})}
      className="text-center align-middle"
    >
      {label.toUpperCase()} - {letterState}
    </KeyBox>
    )
  }


  const KeyBox = styled(Col)`
  margin-top: 10px;
  border: 1px solid grey;
  height: 4rem;
  background-color: ${ (props) =>  props.theme[props.letterstate]   };
  `
  
  KeyboardLetter.propTypes = {
    label: PropTypes.string.isRequired,
    keydownHandler: PropTypes.func.isRequired,
    keyboardState: PropTypes.object.isRequired
    // user: PropTypes.shape({
      //   phoneNumber: null
      // })
    }
    
    export default KeyboardLetter