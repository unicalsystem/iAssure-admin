import React, { useState, } from 'react';
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CFormInput, CInputGroup, CInputGroupText, CRow,} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons';
import { useNavigate } from 'react-router-dom';
// import Axios from 'axios';
import  IassureLogo  from '../../../assets/images/iAssure_Circularimage.png'

const Login = () => {
  // const [code, setCode] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

//   useEffect(() => {
//     createCaptcha();
// }, []);
const navigate = useNavigate();

const LogIn = (e) => {
  e.preventDefault();
  navigate("/home")
//   Axios.post("http://localhost:3003/login", {
//     username: username,
//     password: password,
//  }).then((response) => {
//    console.log('called ',response)
//    if(response.data && response.data.status===200 && document.getElementById('cpatchaTextBox').value === code){
//      window.location.assign("home")
//    } else {
//      alert("invalid user user doesn't exist")
//      window.location.reload();
//    }
//  }).catch((error) => {
//   console.error(error);
//   alert("Error during login");
// });

}

// const createCaptcha = () => {
//   document.getElementById('captcha').innerHTML = '';
// const charsArray ='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*';
//   const lengthOtp = 6;
//   const captcha = [];

// for (let i = 0; i < lengthOtp; i++) {
//     const index = Math.floor(Math.random() * charsArray.length + 1);
//     if (captcha.indexOf(charsArray[index]) === -1) captcha.push(charsArray[index]);
//     else i--;
// }

//   const canv = document.createElement('canvas');
//   canv.id = 'captcha';
//   canv.width = 120;
//   canv.height = 40;
//   const ctx = canv.getContext('2d');
//   ctx.font = '30px Georgia';
//   ctx.strokeText(captcha.join(''), 0, 30);

//   setCode(captcha.join(''));

//   document.getElementById('captcha').appendChild(canv); 
// };


  return (
    <div className="bg-primary min-vh-100 d-flex flex-row align-items-center">
      <CContainer >
        <h1 style={{textAlign:'center', color:'white'}}>Welcome to the iAssure</h1>
        <CRow className="justify-content-center">
          <CCol md={10}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser}  />
                      </CInputGroupText>
                      <CFormInput placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value)} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    </CInputGroup>
                    <CInputGroup>
                    <div className='box-captcha'>
                    <div id="captcha"></div>
                    </div>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput placeholder="Enter Captcha Here" id="cpatchaTextBox" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={LogIn}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-black p-2"  >
                <CCardBody className="text-center">
                  <img width={300} src={IassureLogo}  alt="logo"  />
                </CCardBody>
                <p style={{fontSize:12}}><strong>Enter some thing here: </strong><a href="mailto:info@unicalsystems.com">info[at]unicalsystems.com</a></p>
                <p style={{fontSize:12}}>Access to<strong> iAssure<sup>TM</sup></strong> is restricted solely to authorized users. 
                  User activities may be monitored for administrative and security reasons. 
                  By logging into the system , the user expressly consents to such monitoring. 
                  Any use of this system must be in compliance with<strong> Unical System&apos;</strong>s Information Security Policy and applicable laws. 
                  Unauthorized access or any unauthorized use may subject the user to criminal and civil penalties under state, federal, or other applicable laws.</p>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
