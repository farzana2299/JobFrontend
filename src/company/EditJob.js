import React, { useContext } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {  useParams } from 'react-router-dom';
import { editJobApi } from '../service/allApi';
import Modal from 'react-bootstrap/Modal';
import { editUpdateContext } from '../service/ContextSharing';


function EditJob({ jobdetails }) {

    const{setEditUpdate}=useContext(editUpdateContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [titleValid, settitleValid] = useState(false)
    const [categoryValid, setcategoryValid] = useState(false)
    const [roleValid, setroleValid] = useState(false)
    const [locationValid, setlocationValid] = useState(false)
    const [stateValid, setstateValid] = useState(false)
    const [salaryValid, setsalaryValid] = useState(false)
    const [jobtypeValid, setjobtypeValid] = useState(false)
    const [experienceValid, setexperienceValid] = useState(false)

    const [job, setJob] = useState({
        cid: jobdetails.cid, cname: jobdetails.cname, logo: jobdetails.logo,
        title: jobdetails.title, category: jobdetails.category, role: jobdetails.role,
        location: jobdetails.location,
        state: jobdetails.state, salary: jobdetails.salary, jobtype: jobdetails.jobtype,
        experience: jobdetails.experience
    })

    const setDatas = (e) => {
        const { value, name } = e.target

        if (name === 'title') {
            if (value.match(/^[a-zA-Z .]+$/)) {
                settitleValid(false)
            } else {
                settitleValid(true)
            }
        }

        if (name === 'category') {
            if (value.match(/^[a-zA-Z .]+$/)) {
                setcategoryValid(false)
            } else {
                setcategoryValid(true)
            }
        }

        if (name === 'role') {
            if (value.match(/^[a-zA-Z .]+$/)) {
                setroleValid(false)
            } else {
                setroleValid(true)
            }
        }

        if (name === 'location') {
            if (value.match(/^[a-zA-Z .]+$/)) {
                setlocationValid(false)
            } else {
                setlocationValid(true)
            }
        }

        if (name === 'state') {
            if (value.match(/^[a-zA-Z .]+$/)) {
                setstateValid(false)
            } else {
                setstateValid(true)
            }
        }

        if (name === 'salary') {
            if (value.match(/^[0-9a-zA-Z .]+$/)) {
                setsalaryValid(false)
            } else {
                setsalaryValid(true)
            }
        }

        if (name === 'jobtype') {
            if (value.match(/^[a-zA-Z .]+$/)) {
                setjobtypeValid(false)
            } else {
                setjobtypeValid(true)
            }
        }

        if (name === 'experience') {
            if (value.match(/^[a-zA-Z0-9- .]+$/)) {
                setexperienceValid(false)
            } else {
                setexperienceValid(true)
            }
        }

        setJob({ ...job, [name]: value });
    }
    // console.log(job);

   

    const handleEdit = async (e) => {
        e.preventDefault()
        
        const { title, category, role, location, state, salary, jobtype, experience } = job

        if (title === "") {
            alert("Title required")
        }
        else if (category === "") {
            alert("category required")
        }
        else if (role === "") {
            alert("Jrole required")
        }
        else if (location === "") {
            alert("Jlocation required")
        }
        else if (state === "") {
            alert("state required")
        }
        else if (salary === "") {
            alert("salary required")
        }
        else if (jobtype === "") {
            alert("jobtype required")
        }
        else if (experience === "") {
            alert("experience required")
        }


        else {

            const token = localStorage.getItem("token")
            const reqHeader = {
                "access_token": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
            const reqBody = {
                "title": title, "category": category, "role": role, "location": location,
                 "state": state,   "salary": salary, "jobtype": jobtype, "experience": experience
            }
          
            const result = await editJobApi(jobdetails._id,reqHeader, reqBody)
            console.log(result);
            if (result.status >= 200 && result.status < 300) {
                // alert(result.data)

                setEditUpdate(result.data)
                setJob({
                    ...job, cid: "", cname: "", logo: "",
                    title: "", category: "", role: "", location: "", state: "", salary: "", jobtype: "",
                    experience: ""
                })
                handleClose()
            }
            else {
                alert(result.response.data)
            }
        }
       
        }
    
    return (
        <div>

      <Button  onClick={handleShow} variant="primary">Edit</Button>{' '}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <h3 className='text-center text-success'><b> EDIT JOB DETAILS</b></h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
                       
                        <Col lg={6} md={6} sm={12}>

                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Job Title"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={job.title} name='title' onChange={(e) => setDatas(e)} type="text" placeholder="Job Title" />
                                </FloatingLabel>
                                {titleValid &&
                                    <p className='text-danger'>Invalid Job Title</p>
                                }
                            </>
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Job Role"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={job.role} name='role' onChange={(e) => setDatas(e)} type="text" placeholder="Job Role" />
                                </FloatingLabel>
                                {roleValid &&
                                    <p className='text-danger'>Invalid Job Role</p>
                                }
                            </>
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="State"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={job.state} name='state' onChange={(e) => setDatas(e)} type="text" placeholder="State" />
                                </FloatingLabel>
                                {stateValid &&
                                    <p className='text-danger'>Invalid State</p>
                                }
                            </>
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Job Type"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={job.jobtype} name='jobtype' onChange={(e) => setDatas(e)} type="text" placeholder="Job Type" />
                                </FloatingLabel>
                                {jobtypeValid &&
                                    <p className='text-danger'>Invalid Job Type</p>
                                }
                            </>

                        </Col>
                        <Col lg={6} md={6} sm={12}>

                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Category"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={job.category} name='category' onChange={(e) => setDatas(e)} type="text" placeholder="Category" />
                                </FloatingLabel>
                                {categoryValid &&
                                    <p className='text-danger'>Invalid Category</p>
                                }
                            </>
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Location"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={job.location} name='location' onChange={(e) => setDatas(e)} type="text" placeholder="Location" />
                                </FloatingLabel>
                                {locationValid &&
                                    <p className='text-danger'>Invalid Location</p>
                                }
                            </>
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Salary"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={job.salary} name='salary' onChange={(e) => setDatas(e)} type="text" placeholder="Salary" />
                                </FloatingLabel>
                                {salaryValid &&
                                    <p className='text-danger'>Invalid Salary Format</p>
                                }
                            </>
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Experience"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={job.experience} name='experience' onChange={(e) => setDatas(e)} type="text" placeholder="Experience" />
                                </FloatingLabel>
                                {experienceValid &&
                                    <p className='text-danger'>Invalid Experience</p>
                                }
                            </>
                            {/* <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Job Id"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={job.jId} name='jId' onChange={(e) => setDatas(e)} type="text" placeholder="Job ID" />
                                </FloatingLabel>
                              
                            </> */}
                        </Col>
                        {/* <Button onClick={(e) => handleEdit(e)} variant="success"><b>Save</b></Button>{' '} */}
                    </Row>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(e) => handleEdit(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        </div>
    )
}

export default EditJob