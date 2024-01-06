
import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { userLoginApi } from '../../service/allApi';



function Login() {
    const navigate = useNavigate()
       // state to hold user data
       const [user, setUser] = useState({ email: "",psw: ""  })
const setDatas=(e)=>{
    const { value, name } = e.target
    setUser({ ...user, [name]: value });
}
console.log(user);
    const handleLogin=async(e)=>{
        e.preventDefault()
    const { psw, email } = user
        if (!psw || !email) {
            alert("Please fill all datas")
        }
        else
        {
             // api call
             const bodyData = { psw, email }
             const result = await userLoginApi(bodyData)
             console.log(result);
             if (result.status >= 200 && result.status < 300) {

                localStorage.setItem("currentUserId",JSON.stringify(result.data._id))
                localStorage.setItem("token",result.data.token)
               
                setUser({email:"",psw:""})   
              
                navigate('/user-home')
            }
            else {
                alert(result.response.data.message)
               
            }
        }
        
    }

  return (
    <div>
      
        <div className='mt-5 p-5'>
            {/* <h1>Authentication Component</h1> */}
            <div className='container w-50 mt-5 mb-5 shadow-lg p-5'>
                <Row>
                <h2 className='text-center'>LOGIN AS USER</h2>
                    <Col className='p-3'>
                        <Link style={{ textDecoration: 'none' }} to={'/'}><i class="fa-solid fa-backward fa-beat-fade"></i> Back to Home</Link>
                        <img src="https://i.postimg.cc/nLRyMhVV/userloin.gif" alt="" className='w-100 mt-5' />
                    </Col>
                    <Col>
                    <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={user.email} onChange={(e) => setDatas(e)} name='email' type="email" placeholder="Email" />
                                </FloatingLabel>
                            </>
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Password"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={user.psw} onChange={(e) => setDatas(e)} name='psw' type="password" placeholder="Password" />
                                </FloatingLabel>
                            </>
                          
                       
                            <Button onClick={(e)=>handleLogin(e)} className='btn btn-danger mt-5 px-5 py-3 mb-2 rounded-pill'>LOGIN</Button>
                         <p>New User? <Link to={'/register'} style={{ textDecoration: 'none',fontSize:'15px' }}>Register Here</Link></p>
                        <p>Login as Company <Link to={'/clogin'} style={{ textDecoration: 'none',fontSize:'15px' }}>Click Here</Link></p>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
  )
}

export default Login