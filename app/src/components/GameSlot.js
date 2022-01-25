import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import {  Col } from 'react-bootstrap';

function GameLetter({gameSlot, gameboardState, gameRow, activeLetter, setActiveLetter, ...props } ){

  

    // const letterState = gameState[slot][key] || 0;
    const slotKey = `row-${gameRow}__slot-${gameSlot}`
    const slotIndex = ( gameRow * gameboardState.slots ) + gameSlot
    const char = gameboardState.chars[slotIndex];

    return (
      <Col onClick={ () => setActiveLetter(slotKey) }>
        <SlotBox 
          className="col" 
          gameboardState={gameboardState}
          activeLetter={activeLetter}
          
          char={char}

          gameSlot={gameSlot}
          gameRow={gameRow}
          
          slotIndex={slotIndex}
          slotKey={slotKey}
          // letterstate={letterState}
        >
          {char.letter} : {char.status}
        </SlotBox>
        <span>{slotIndex}: {slotKey}</span>
      </Col>
    )
    
}

const SlotBox = styled.div`
  border: ${(props) => { return props.slotKey === props.activeLetter ? 3 : 1 }}px
      solid ${(props) => { return props.slotKey === props.activeLetter ? "red" : "grey" }
    };
  background-color: ${ (props) =>  props.theme[props.char.status]   };
  height: 6rem;
  font-size: 12px;
`
    


// GameLetter.propTypes = {
//   slot: PropTypes.number.isRequired,
//   activeLetter: PropTypes.number.isRequired,
//   setActiveLetter: PropTypes.func.isRequired,
//   gameState: PropTypes.array.isRequired,
//   setGameState: PropTypes.func.isRequired
//   // user: PropTypes.shape({
//   //   phoneNumber: null
//   // })
// }

export default GameLetter