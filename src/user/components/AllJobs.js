import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function AllJobs({newjob}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  
  return (
    <div>
      <div className=" container shadow-lg p-5 w-75 className='pb-5'" style={{ border: '1px solid black' }}>
        <Row>
          <Col lg={6}>
            <img src={newjob.logo} alt="company logo"
              style={{ width: '40px', height: '40px' }} />
            <p>{newjob.cname}</p>
            <h4 className='pt-3'>{newjob.title}</h4>
            <p>{newjob.location},{newjob.state}</p>
          </Col>

          <Col lg={6} >
            {/*<i class="fa-regular fa-star fa-2x" style={{ position: "relative", left: '65%' }}></i><br /> */}
            <br />
            <div style={{ position: "relative", left: '50%' }}>
          
              <Button variant="primary" onClick={handleShow}>View</Button>{' '}
            </div>
          </Col>
        </Row>
      </div>
 <br /><br />

  
      {/* model */}

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body>
        <div style={{position:'relative',left:'25%'}}>
        <a href="https://imgbb.com/">
          <img src="https://i.ibb.co/VgqHyZT/warning.png" alt="warning" border="0"/></a>
          <h2 className='text-danger'>Please Login!</h2>
          </div>
        </Modal.Body>
       
      </Modal>
    </div>
  )
}

export default AllJobs