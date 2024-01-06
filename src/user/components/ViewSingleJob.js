import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Row } from 'react-bootstrap';
import { applyJobApi } from '../../service/allApi';


function ViewSingleJob({ jobdetails, userdetails }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [job, setJob] = useState({
        cid: jobdetails.cid, cname: jobdetails.cname, logo: jobdetails.logo,
        title: jobdetails.title, category: jobdetails.category, role: jobdetails.role,
        location: jobdetails.location,
        state: jobdetails.state, salary: jobdetails.salary, jobtype: jobdetails.jobtype,
        experience: jobdetails.experience,jid:jobdetails._id
    })
    const [appliedJob, setappliedJob] = useState({
        jid:jobdetails._id,
        cid: jobdetails.cid, cname: jobdetails.cname, location: jobdetails.location, title: jobdetails.title,
        uid: userdetails._id, state: userdetails.state, email: userdetails.email, fname: userdetails.fname,
        lname: userdetails.lname, ph:userdetails.ph, resume: userdetails.resume
    })
    const handleApply =async (e) => {
        e.preventDefault()
        const { title, location, state, cid, jid, uid, cname, email, fname, lname, ph, resume } = appliedJob
        if (!title || !cid || !jid || !location || !state || !uid || !cname || !email || !fname || !lname || !ph || !resume) {
            console.log(appliedJob);
            alert('Please fill all datas')
        }
        else {
            const token = localStorage.getItem("token")
            const reqHeader = {
                "access_token": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("location", location)
            reqBody.append("state", state)
            reqBody.append("cid", cid)
            reqBody.append("jid", jid)
            reqBody.append("uid", uid)
            reqBody.append("ph", ph)
            reqBody.append("resume", resume)
            reqBody.append("cname", cname)
            reqBody.append("email", email)
            reqBody.append("lname", lname)
            reqBody.append("fname", fname)
        
        const result = await applyJobApi (reqHeader,reqBody)
            console.log(result); 
            if (result.status>= 200 && result.status < 300) {
                alert("Applied Successfully")

                setappliedJob({ ...appliedJob,  fname: "", lname: "",  state: "",
                  ph: "",resume: "",  email: "", location: "",title:"",cid:"",jid:"",uid:"",
                cname:""})
                 handleClose()
            }
            else {
                alert(result.response)
            }
        }
    }

    return (
        <div>
            <div style={{ position: 'relative', left: '60%' }}>
                <Button size="lg" onClick={handleShow} variant="primary">View</Button>
            </div>

            {/* modal   */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{job.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <ListGroup>
                                <ListGroup.Item><b>Company Name:</b> {job.cname}</ListGroup.Item>
                                <ListGroup.Item><b>Job Category:</b> {job.category}</ListGroup.Item>
                                <ListGroup.Item><b>Location:</b> {job.location}</ListGroup.Item>
                                <ListGroup.Item><b>Job Type:</b> {job.jobtype}</ListGroup.Item>

                            </ListGroup>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <ListGroup>
                                <ListGroup.Item><b>Job Role:</b> {job.role}</ListGroup.Item>
                                <ListGroup.Item><b>Salary:</b> {job.salary}</ListGroup.Item>
                                <ListGroup.Item><b>State:</b> {job.state}</ListGroup.Item>
                                <ListGroup.Item><b>Experience:</b> {job.experience}</ListGroup.Item>

                            </ListGroup>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={(e) => handleApply(e)}>
                        APPLY
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ViewSingleJob