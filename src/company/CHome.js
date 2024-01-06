import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import AddJob from './AddJob'
import EditJob from './EditJob'
import {  deleteJobApi, getCompanyJobApi } from '../service/allApi'
import LHeader from '../common/LHeader'
import { addUpdateContext, deleteUpdateContext, editUpdateContext } from '../service/ContextSharing'
import Loader from '../common/Loader'


function CHome() {

    const { addUpdate } = useContext(addUpdateContext)
    const { editUpdate } = useContext(editUpdateContext)
    const { deleteUpdate } = useContext(deleteUpdateContext)
    const [jobs, setJobs] = useState([])
  

    const getCompanyJob = async () => {
        if (localStorage.getItem("token")) {
            const token = localStorage.getItem("token")
            const reqHeader = {
                "access_token": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
            const result = await getCompanyJobApi(reqHeader)
            setJobs(result.data.message)
        }
    }
            
    useEffect(() => {
        getCompanyJob()
    }, [addUpdate, editUpdate,deleteUpdate])
    console.log(jobs);

    const removeJob=async(id)=>{
const result=await deleteJobApi(id)
console.log(result);
    }
    return (
        <div>
            <LHeader></LHeader>
            <AddJob></AddJob>
            <h1 className='text-center text-success'>DASHBOARD</h1>
            {jobs?.length > 0 ? jobs.map(i => (
                <div>
                    {/* <h1>Welcome {i.cname}...!</h1> */}
                    <div className=" w-75 container shadow-lg p-5 mt-5 mb-5" style={{ border: '1px solid black' }}>
                        <Row>

                            <Col lg={6}>
                                <img src={i.logo} alt="company logo"
                                    style={{ width: '40px', height: '40px' }} />
                                <p>{i.cname}</p>
                                <h4 className='pt-3'><b>{i.title}</b> </h4>
                                <Row>
                                    <Col lg={6}>

                                        <p>Category: {i.category}</p>
                                        <p>Salary: {i.salary}</p>
                                        <p>{i.location},{i.state}</p>
                                    </Col>
                                    <Col lg={6}>
                                        <p>Experience: {i.experience}</p>
                                        <p>Job Type: {i.jobtype}</p>

                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6}>
                                <br />
                                <div style={{ position: "relative", left: '50%' }}>
                                    <div jobdetails={i}>
                                        {/* <Link to={`/editjob/${i._id}`}> */}

                                        <EditJob jobdetails={i}></EditJob>
                                        {/* <Button  variant="primary">Edit</Button>{' '}
                                        </Link> */}
                                    </div>
                                    <div className='mt-4'>
                                        <Button onClick={()=>removeJob(i._id)} variant="danger">Delete</Button>{' '}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>


                </div>
            )) : <Loader></Loader>}
        </div>
    )
}

export default CHome