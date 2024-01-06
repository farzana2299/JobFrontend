import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
function Loader() {
  return (
    <div style={{position:'relative',left:'45%'}}>
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="success" />
        <br />
        <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
    </div>
  )
}

export default Loader