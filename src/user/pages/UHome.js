import React, { useContext, useEffect, useState } from 'react'
import LHeader from '../../common/LHeader'
import { Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getAllJobApi, userDetailsApi } from '../../service/allApi';
import { addUpdateContext, deleteUpdateContext, editUpdateContext } from '../../service/ContextSharing';
import ViewSingleJob from '../components/ViewSingleJob';
import { Link } from 'react-router-dom';

function UHome() {

  const [search, setSearch] = useState("")

  const [AllJobs, setAllJobs] = useState([])
  const { addUpdate } = useContext(addUpdateContext)
  const { editUpdate } = useContext(editUpdateContext)
  const { deleteUpdate } = useContext(deleteUpdateContext)

  const getJobs = async () => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token")
      // console.log(token);
      const reqHeader = {
        "access_token": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
      const result = await getAllJobApi(reqHeader, search)
      setAllJobs(result.data.message)
    }
  }

  useEffect(() => {
    getJobs()
  }, [addUpdate, editUpdate, deleteUpdate, search])
  console.log(AllJobs);

  const [userDetails, setUserDetails] = useState(null)

  const getUserDetails = async () => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token")
      const reqHeader = {
        "access_token": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
      const result = await userDetailsApi(reqHeader)
      setUserDetails(result.data.message)
    }
  }
  useEffect(() => {
    if (userDetails === null) {
      getUserDetails()
    }

  }, [userDetails])
  console.log(userDetails);

  return (
    <div>
      <LHeader></LHeader>
      
      <div>
        <Row className='pt-5 pb-5 container w-100'>
          <Col lg={6} style={{ position: 'relative' }}>
            <Form.Control
              type="text" onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Job Here"
              // className="w-100 "
              style={{ width: '75%' }}
            /><Button style={{ position: 'relative', bottom: '50%', left: '78%' }} type="submit">SEARCH</Button>


          </Col>
          <Col lg={6} style={{ position: 'relative',left:'40%' }}>
            <Link to={`/appliedjob/:id`} style={{textDecoration:'none'}}><p> Applied Jobs <i class="fa-solid fa-briefcase"></i></p></Link>
          </Col>
        </Row>
        <Row className='pb-5 w-100 ps-5 pb-5'>
          {
            AllJobs?.length > 0 ?
              AllJobs.map(i => (
                <Col lg={4} md={6} sm={12}>

                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={i.logo} style={{ height: '120px' }} />
                    <Card.Body>

                      <Card.Title><h2> {i.title}</h2></Card.Title>
                      <Card.Text>
                        <h4>{i.cname}</h4>
                        <p>{i.location},{i.state}</p>
                      </Card.Text>
                      {
                        userDetails ?

                          <ViewSingleJob jobdetails={i} userdetails={userDetails}></ViewSingleJob>

                          : <h1>Loading....</h1>
                      }
                    </Card.Body>
                  </Card>
                  <br /><br />
                </Col>
              ))
              : <h1>Loading.......</h1>
          }
        </Row>
      </div>
    </div>
  )
}

export default UHome