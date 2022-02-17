import React from 'react';

import { Button, Modal } from 'react-bootstrap';

const HelpModal = ({showModal, modalToggler}) => {

  return (
    <>
      <Modal show={showModal} onHide={modalToggler}>
        <Modal.Header closeButton>
          <Modal.Title>WordCheater Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>Word Cheater helps you cheat at word games like Wordle, scrabble, boggle, and more</Modal.Body>
        <Modal.Body>Just tap a position and a letter. </Modal.Body>
        <Modal.Body>Green letters are in the correct spot</Modal.Body>
        <Modal.Body>Yellow letters are in the word, but wrong spot</Modal.Body>
        <Modal.Body>Grey letters are not in the word</Modal.Body>
        <Modal.Body>White letters ignored (to fix)</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={modalToggler}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default HelpModal