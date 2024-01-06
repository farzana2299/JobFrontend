
import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { companyLoginApi, companyRegisterApi} from '../service/allApi';


function Auth({register}) {
    const navigate=useNavigate()

    const [cnameValid, setcnameValid] = useState(false)
    const [emailValid, setemailValid] = useState(false)
    const [pswValid, setpswValid] = useState(false)
    const [logoValid, setlogoValid] = useState(false)

// state to hold user data
const [user, setUser] = useState({
    cname: "",
    email: "",
   psw: "",
   logo:""
})
const setDatas=(e)=>{
    const { value, name } = e.target
    if(name === 'cname')
    {
        if (value.match(/^[a-zA-Z .]+$/)) {
            setcnameValid(false)
        } else {
            setcnameValid(true)
        }
    }
    if (name === 'email') {
        if (value.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)) {
            setemailValid(false)
        } else {
            setemailValid(true)
        }
    }
    if (name === 'psw') {
        if (value.match(/^[a-zA-Z0-9@]+$/)) {
            setpswValid(false)
        } else {
            setpswValid(true)
        }
    }
    if (name === 'logo') {
        if (value.match(/^(https?:\/\/.*\.(?:png|jpg|jpeg))$/)) {
            setlogoValid(false)
        } else {
            setlogoValid(true)
        }
    }
    setUser({ ...user, [name]: value }); 
}
// console.log(user);
//register api
const handleRegister=async(e)=>{
    e.preventDefault()
    const { cname, psw, email,logo } = user
    if(!cname||!psw||!email||!logo)
    {
        alert('Please fill all datas')
    }
    else{
        // api call 
        const result=await companyRegisterApi(user)
        // console.log(result);
        if (result.status >= 200 && result.status < 300)
        {
            alert("Company Registered Successfully")
           
            navigate('/clogin')
        }
        else{
            alert(result.response.data)
        }
    }
}

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
             const result = await companyLoginApi(bodyData)
             console.log(result);
             if (result.status>= 200 && result.status < 300) {
                localStorage.setItem("currentUser",JSON.stringify(result.data.cname))
                localStorage.setItem("currentUserId",JSON.stringify(result.data._id))
                localStorage.setItem("currentUserLogo",JSON.stringify(result.data.logo))
                localStorage.setItem("token",result.data.token)
               
                setUser({cname:"",email:"",psw:"",logo:""})   
              
                navigate('/company-home')
            }
            else {
                alert(result.response.data)
                
            }
        }

}
const isRegister = register ? true : false

  return (
    <div>
     
         <div className='mt-5 p-5'>
            {/* <h1>Authentication Component</h1> */}
            <div className='container w-50 mt-5 mb-5 shadow-lg p-5'>
                <Row>
                <h2 className='text-center'>{isRegister ? 'REGISTER AS COMPANY' : 'LOGIN AS COMPANY'}</h2>
                    <Col className='p-3'>
                        <Link style={{ textDecoration: 'none' }} to={'/'}><i class="fa-solid fa-backward fa-beat-fade"></i> Back to Home</Link>
                        <img src={isRegister ? "https://i.postimg.cc/4N2STNPX/reg.gif" : "https://i.postimg.cc/nLRyMhVV/userloin.gif"} alt="" className='w-100 mt-5' />
                    </Col>
                    <Col>
                       

                        {
                            isRegister &&
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Company Name"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={user.cname} name='cname' onChange={(e) => setDatas(e)} type="text" placeholder="Company Name" />
                                </FloatingLabel>
                                {cnameValid &&
                                    <p className='text-danger'>Invalid Company Name</p>
                                }
                            </>
                        }
<>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control value={user.email} name='email' onChange={(e) => setDatas(e)}  type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        {emailValid &&
                                    <p className='text-danger'>Invalid Email</p>
                                }
                        </>
                        <>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control value={user.psw} name='psw' onChange={(e) => setDatas(e)} type="password" placeholder="Password" />
                        </FloatingLabel>
                        {pswValid &&
                                    <p className='text-danger'>Invalid Password Format</p>
                                }
                        </>
                        {
                            isRegister &&
                            <>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Logo Url"
                                    className="mt-5 mb-3"
                                >
                                    <Form.Control value={user.logo} name='logo' onChange={(e) => setDatas(e)} type="text" placeholder="Logo Url" />
                                </FloatingLabel>
                                {logoValid &&
                                    <p className='text-danger'>Invalid Url</p>
                                }
                            </>
                        }
                       
                        {isRegister ? <Button onClick={(e)=>handleRegister(e)} className='btn btn-success mt-5 px-5 py-3 mb-2 rounded-pill'>Register</Button> :
                            <Button onClick={(e)=>handleLogin(e)} className='btn btn-success mt-5 px-5 py-3 mb-2 rounded-pill'>Login</Button>
                        }
                        <div style={{fontSize:'13px'}}>
                        {isRegister ? <p>Already register? <Link to={'/clogin'} style={{ textDecoration: 'none' }}>Click Here</Link></p> :
                         <p> <Link to={'/cregister'} style={{ textDecoration: 'none' }}>Register as Company</Link></p>
                        }
                        <p> <Link to={'/register'} style={{ textDecoration: 'none' }}>Register as User</Link></p>
                        </div>
                    </Col>
                </Row>
            </div>
           
        </div>
       
    </div>
    
  )
}

export default Auth