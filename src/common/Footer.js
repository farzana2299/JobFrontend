import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <Row style={{ backgroundColor: '#008000' }}>
        <Col lg={3} md={4}>

          <div className='text-center p-5'>
            <h4 id='d' className='my-3 '>PERFECT RECRUITER</h4>
            <p className='text-white'>Companies can add their job vaccancies here.
              As well as jobseekers can View,apply,save the jobs which is suitable for their qualification. </p>
          </div>

        </Col>
        <Col lg={3} md={4} className='p-5' style={{ position: 'relative', top: '22px' }}>
          <h4 id='d'><i class="fa-solid fa-link"></i>LINKS</h4>
          <Link className='text-white' style={{ textDecoration: 'none' }}><b>Home</b></Link><br />
          <Link className='text-white' style={{ textDecoration: 'none' }}><b>Login</b></Link><br />
          <Link className='text-white' style={{ textDecoration: 'none' }}><b>SignUp</b></Link>
        </Col>
        <Col lg={3} md={4}>
          <div className='p-5' style={{ position: 'relative', top: '22px' }}>
            <h3 id='d'>TOP COMPANIES</h3>
            <h5 className='text-white'>Amazon</h5>
            <h5 className='mt-3 text-white'>TCS</h5>
            <h5 className='text-white'>Wipro</h5>
          </div>
        </Col>
        <Col lg={3} md={4}>
          <div className='p-5' style={{ position: 'relative', top: '22px' }}>
            <h4 id='d'>CONNECT WITH US</h4>
            <label htmlFor="">
              <input type="email" className='form-control' placeholder='email address' />
              <i class="fa-solid fa-envelope ms-2 border p-2 text-white"
                style={{ position: 'relative', bottom: '35px', left: '200px' }}></i>
            </label>
            <Row>
              <Col>
            <div className=' text-center'>
              <i class="fa-brands fa-linkedin fa-2x me-2 text-white"></i>
              <i class="fa-brands fa-instagram fa-2x me-2 text-white"></i>
              <i class="fa-brands fa-facebook fa-2x me-2 text-white"></i>
              <i class="fa-brands fa-twitter fa-2x me-2 text-white"></i>
              <i class="fa-brands fa-github fa-2x me-2 text-white"></i>
            </div>
            </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Footer