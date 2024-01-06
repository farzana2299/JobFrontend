import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import AllJobs from '../components/AllJobs';
import Header from '../../common/Header';
import { get4JobsApi } from '../../service/allApi';
import Modal from 'react-bootstrap/Modal';
function Landing() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const [jobs,setJobs]=useState([])

const getJobs = async () => {
 
    const result = await get4JobsApi()
    setJobs(result.data)
}

useEffect(() => {
  getJobs()
},[] )
console.log(jobs);

  return (
    <div>
      <Header></Header>
      <div className='p-5 container w-75' style={{position:'inherit',top:'100%',paddingTop:'25%'}}>
        <Row>
          <Col lg={3} md={6} className='ps-5 '>
            <Link style={{textDecoration:'none'}}>
            <div style={{width:'150px',height:'200px'}}>
              <a href="https://imgbb.com/">
                <img src="https://i.ibb.co/g6JrPKn/alltype.png" alt="alltype" border="0"/></a>
              <h4 className='text-dark'>All JOBS</h4>
              </div>
            </Link>
          </Col>

          <Col lg={3} md={6}>
            <Link style={{textDecoration:'none'}}>
            <div>
            <a href="https://imgbb.com/">
              <img  style={{width:'150px',height:'125px'}} src="https://i.ibb.co/t4RJd5c/full-time.png" alt="full-time" border="0"/></a>
              <h4 className='text-dark'>FULL-TIME JOBS</h4>
              </div>
            </Link>
          </Col>
          <Col lg={3} md={6}>
          <Link style={{textDecoration:'none'}}>
            <div>
            <a href="https://imgbb.com/">
              <img style={{position:'relative',bottom:'23px'}} src="https://i.ibb.co/J7kvBtw/download-14-removebg-preview-removebg-preview.png" alt="download-14-removebg-preview-removebg-preview" border="0"/></a>
              <h4 style={{position:'relative',bottom:'103px'}} className='text-dark'>PART-TIME JOBS</h4>
              </div>
            </Link>
          </Col>
          <Col lg={3} md={6}>
          <Link style={{textDecoration:'none'}}>
            <div style={{position:'relative',top:'20px'}}>
            <a href="https://imgbb.com/">
              <img  style={{width:'150px',height:'110px'}} src="https://i.ibb.co/0fJzJrF/contract-removebg-preview.png"   alt="contract-removebg-preview" border="0"/></a>
              <h4 className='text-dark'>CONTRACT JOBS</h4>
              </div>
            </Link>
          </Col>
        </Row>

        <br /><br /><br />
        {
          jobs?.length>0?
          jobs.map(i=>(
        <AllJobs newjob={i}></AllJobs>
        ))
        :<h1>Loading......</h1>
        }
      </div>
      <div onClick={handleShow} className='text-center'>
        <Link style={{textDecoration:'none'}}><p>View More<i class="fa-solid fa-arrow-right-long"></i></p></Link>
      </div>

      {/* modal  */}
      <Modal show={show} onHide={handleClose}>
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

export default Landing