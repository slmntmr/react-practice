import React from 'react';
import { Alert } from 'react-bootstrap';
import { FaBeer, FaGrinWink, FaGuitar, FaHandPointRight, FaHippo } from 'react-icons/fa';

const AlertPage = () => {
  return (
    <>
      <Alert variant="primary">
        Hello
      </Alert>
      <h3>Let's go for a <FaBeer />?</h3>
      <h3><FaGrinWink /></h3>
      <h3><FaGuitar /></h3>
      <h3><FaHandPointRight /></h3>
      <h3><FaHippo /></h3>




    </>
  );
}

export default AlertPage;
