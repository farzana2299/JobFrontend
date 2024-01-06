import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { userRegisterApi } from '../../service/allApi';

function Register() {
    const navigate = useNavigate()

    const [usernameValid, setusernameValid] = useState(false)
    const [fnameValid, setfnameValid] = useState(false)
    const [lnameValid, setlnameValid] = useState(false)
    const [categoryValid, setcategoryValid] = useState(false)
    const [stateValid, setstateValid] = useState(false)
    const [genderValid, setgenderValid] = useState(false)
    const [phValid, setphValid] = useState(false)
    const [pswValid, setpswValid] = useState(false)
    const [emailValid, setemailValid] = useState(false)
    const [locationValid, setlocationValid] = useState(false)
   

    const [user, setUser] = useState({
        username: "", fname: "", lname: "", category: "", state: "", dob: "", gender: "", ph: "",
        resume: "", psw: "", email: "", location: ""
    })
    const setDatas = (e) => {
        const { value, name } = e.target
        if(name === 'username')
    {
        if (value.match(/^[a-zA-Z .]+$/)) {
            setusernameValid(false)
        } else {
            setusernameValid(true)
        }
    }
        if (name === 'email') {
            if (value.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)) {
                setemailValid(false)
            } else {
                setemailValid(true)
            }
        }
        if(name === 'fname')
    {
        if (value.match(/^[a-zA-Z .]+$/)) {
            setfnameValid(false)
        } else {
            setfnameValid(true)
        }
    }
    if(name === 'lname')
    {
        if (value.match(/^[a-zA-Z .]+$/)) {
            setlnameValid(false)
        } else {
            setlnameValid(true)
        }
    }
    if(name === 'category')
    {
        if (value.match(/^[a-zA-Z .]+$/)) {
            setcategoryValid(false)
        } else {
            setcategoryValid(true)
        }
    }
    if(name === 'state')
    {
        if (value.match(/^[a-zA-Z .]+$/)) {
            setstateValid(false)
        } else {
            setstateValid(true)
        }
    }

    if(name === 'gender')
    {
        if (value.match(/^[a-zA-Z .]+$/)) {
            setgenderValid(false)
        } else {
            setgenderValid(true)
        }
    }
    if(name === 'ph')
    {
        if (value.match(/^[0-9 .]+$/)) {
            setphValid(false)
        } else {
            setphValid(true)
        }
    }
   
    if(name === 'psw')
    {
        if (value.match(/^[a-zA-Z .]+$/)) {
            setpswValid(false)
        } else {
            setpswValid(true)
        }
    }
    if(name === 'location')
    {
        if (value.match(/^[a-zA-Z .]+$/)) {
            setlocationValid(false)
        } else {
            setlocationValid(true)
        }
    }


        setUser({ ...user, [name]: value });
    }
    console.log(user);
    const handleRegister = async(e) => {
        e.preventDefault()
        const { username,fname,lname,category,state,dob,gender,ph,resume,psw,email,location } = user
        if (!username || !fname|| !lname || !category || !state || !dob || !gender || !ph || !resume || !psw || !email || !location) 
        {
            alert("Please fill all datas")
        }
        else {
         
            const reqHeader = {
               
                "Content-Type": "multipart/form-data"
            }
         
            const reqBody = new FormData()
            reqBody.append("username",username)
            reqBody.append("fname", fname)
            reqBody.append("lname", lname)
            reqBody.append("category",category)
            reqBody.append("gender", gender)
            reqBody.append("ph", ph)
            reqBody.append("resume", resume)
            reqBody.append("psw",psw)
            reqBody.append("email", email)
            reqBody.append("location",location)
            reqBody.append("state",state)
            reqBody.append("resume",resume)
            
            const result = await userRegisterApi(reqBody, reqHeader)
            console.log(result); 
            if (result.status>= 200 && result.status < 300) {
                alert("Registered Successfully")

                setUser({ ...user,  fname: "", lname: "", category: "", state: "",
                 dob: "", gender: "", ph: "",resume: "",  email: "", location: ""})
                 navigate('/login')
            }
            else {
                alert(result.response.data.message)
            }

        }
       
    }
    return (
        <div>
            
            <div className='mdiv container'>
                <Form className='container w-75 shadow-lg mt-5 mb-5 p-5'>
                    <Row>
                        <Link style={{ textDecoration: 'none' }} to={'/'}><i class="fa-solid fa-backward fa-beat-fade"></i> Back to Home</Link>
                        <h3 className='text-center text-success'><b> USER REGISTRATION</b></h3>
                        <Col lg={6} md={6} sm={12}>
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="First Name"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={user.fname} onChange={(e) => setDatas(e)} name='fname' type="text" placeholder="First Name" />
                                </FloatingLabel>
                                {fnameValid &&
                                    <p className='text-danger'>Invalid fname</p>
                                }
                            </>
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={user.email} onChange={(e) => setDatas(e)} name='email' type="text" placeholder="Email" />
                                </FloatingLabel>
                                {emailValid &&
                                    <p className='text-danger'>Invalid email</p>
                                }

                            </>
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Resume"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={user.resume} onChange={(e) => setDatas(e)} name='resume' type="file" placeholder="Resume" />
                                </FloatingLabel>
                                {/* {resumeValid &&
                                    <p className='text-danger'>Invalid resume</p>
                                } */}
                            </>
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="State"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={user.state} onChange={(e) => setDatas(e)} name='state' type="text" placeholder="State" />
                                </FloatingLabel>
                                {stateValid &&
                                    <p className='text-danger'>Invalid state</p>
                                }
                            </>
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Gender"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={user.gender} onChange={(e) => setDatas(e)} name='gender' type="text" placeholder="Gender" />
                                </FloatingLabel>
                                {genderValid &&
                                    <p className='text-danger'>Invalid gender</p>
                                }
                            </>
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Password"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={user.psw} onChange={(e) => setDatas(e)} name='psw' type="password" placeholder="Password" />
                                </FloatingLabel>
                                {pswValid &&
                                    <p className='text-danger'>Invalid psw</p>
                                }
                            </>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Last Name"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={user.lname} onChange={(e) => setDatas(e)} name='lname' type="text" placeholder="Last Name" />
                                </FloatingLabel>
                                {lnameValid &&
                                    <p className='text-danger'>Invalid lname</p>
                                }
                            </>
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Username"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={user.username} onChange={(e) => setDatas(e)} name='username' type="text" placeholder="Username" />
                                </FloatingLabel>
                                {usernameValid &&
                                    <p className='text-danger'>Invalid username</p>
                                }
                            </>
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Country"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={user.location} onChange={(e) => setDatas(e)} name='location' type="text" placeholder="Country" />
                                </FloatingLabel>
                                {locationValid &&
                                    <p className='text-danger'>Invalid location</p>
                                }
                            </>
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Date of Birth"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={user.dob} onChange={(e) => setDatas(e)} name='dob' type="date" placeholder="Date of Birth" />
                                </FloatingLabel>
                                {/* {dobValid &&
                                    <p className='text-danger'>Invalid dob</p>
                                } */}
                            </>
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Phone"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={user.ph} onChange={(e) => setDatas(e)} name='ph' type="text" placeholder="Phone Number" />
                                </FloatingLabel>
                                {phValid &&
                                    <p className='text-danger'>Invalid ph</p>
                                }
                            </>
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Job Category"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={user.category} onChange={(e) => setDatas(e)} name='category' type="text" placeholder="Job Category" />
                                </FloatingLabel>
                                {categoryValid &&
                                    <p className='text-danger'>Invalidcategory</p>
                                }
                            </>
                        </Col>
                        <Button onClick={(e) => handleRegister(e)} variant="success"><b>Submit</b></Button>{' '}
                        <div style={{ fontSize: '13px' }} className='text-center pt-3'>
                            <p>Already have an account?<Link to={'/login'} style={{ textDecoration: 'none' }}>Login Here</Link></p>
                        </div>
                    </Row>

                </Form>
            </div>
        </div>
    )
}

export default Register