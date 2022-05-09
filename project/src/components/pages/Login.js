import React, {useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Pep13 from './images/pep13.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import TextField from '@mui/material/TextField';
import "./Login.css";
const Login=()=>{
  const [state, setState] = useState({
    email:'',
    password:'',
  });

const{email, password} = state;
let navigate = useNavigate();


  const handleSubmit =(e) =>{
    e.preventDefault();
if(password.length < 6){
  return alert("Password must be at least 6 characters");
}
if(email.length < 6){
  return alert("Email must be at least 6 characters");
}
if(!email.includes("@")){
  return alert("Please enter a valid email");
}
if(!email.includes(".")){
  return alert("Please enter a valid email");
}
 
    setState({email:"", password:""});
    alert ("You have successfully logged in");
    navigate("/");
  };

  const handleChange =(e) =>{
    let {name, value} = e.target;
    setState({...state, [name]: value });
  };
  return (
    <div>
      

<section className="login">
        <div className="container mt-5">
        <div className="login-image">
        <img src={Pep13} alt=""/>
                </div>
            <div className="login-content">
                <div className="login-form" onSubmit={handleSubmit}>
                    <form className="register-form" id='register-form'>
                        <div className="form-group">
                        <TextField id="standard-basic" label="Email ID" variant="standard" color='warning'  name="email" onChange={handleChange} value={email} required/>
                        </div>
                        <div className="form-group">
                        <TextField id="standard-basic" label="Password" type="password" variant="standard" color='warning' name="password" onChange={handleChange} value={password} required/>
                        </div>
                        <div className="form-group form-button">
                            <input type="submit" name='login' id='login' className='form-submit' value="LOG IN" />
                        </div>
                    </form>
                    <p>Forgot Password</p>
                </div>
                <div className="newdiv">
                <div className="gotologin"> <button> <Link to="/register">New to Pepperfry? Register Here</Link></button></div>
                <div className="loginbyg"><p>OR Continue with <span><FacebookRoundedIcon fontSize='large' type="button" /> <GoogleIcon fontSize='large' type="button" /></span></p> </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Login
