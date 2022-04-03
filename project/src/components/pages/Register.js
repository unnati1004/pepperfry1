import React, {useState, useEffect} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
import {useHistory, Link,  useNavigate} from 'react-router-dom';
// import { registerInitiate } from '../redux/actions';
//import {AiOutlineDown} from 'react-icons/ai';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import "./Register.css";
import Pep12 from "./images/pep12.png";
import TextField from '@mui/material/TextField';
//import { useNavigation } from '@react-navigation/native';

const Register=()=>{

  const [state, setState] = useState({
    displayName: '',
    email:'',
    password:''
   });
   let navigate = useNavigate();
// const {currentUser} = useSelector((state) => state.user);

// const history = useHistory();

// useEffect(()=>{
//   if(currentUser){
//     history.push('/');
//   }
// },[currentUser, history]);


  //  const dispatch = useDispatch();

  const{email, mobile, password, displayName} = state;

  const handleSubmit =(e) =>{
    e.preventDefault();
    // if(password !== passwordConfirm){
    //   return alert("Passwords don't match");
    // }
    // dispatch (registerInitiate(email, mobile, password, displayName));
    setState({email:"", displayName: "", mobile: "", password: ""})
    alert ("You have successfully registered");
    navigate("/")
    };
  const handleChange =(e) =>{
    let {name, value} = e.target;
    setState({...state, [name]: value});
  };
  return (
    <div>
<section className="signup">
       <div className="container mt-5">
       <div className="signup-image">
       <img src={Pep12} alt=""/>
               </div>
           <div className="signup-content">
               <div className="signup-form" onSubmit={handleSubmit}>
                   <form className="register-form" id='register-form'>
                       <div className="form-group">
                           {/* <input type="text" name='name' id='name' autoComplete='off' placeholder='Name' /> */}
                           <TextField className="standard-basic" label="Name" name="displayName" type="text" variant="standard" color='warning' onChange={handleChange} value={displayName} required/>
                       </div>
                       <div className="form-group">
                       <TextField className="standard-basic" label="Mobile Number" name="mobile" type="number" variant="standard" color='warning' onChange={handleChange} value={mobile} required/>
                       </div>
                       <div className="form-group">
                       <TextField className="standard-basic" label="Email" type="email" name="email" variant="standard" color='warning' onChange={handleChange} value={email} required/>
                       </div>
                       <div className="form-group">
                       <TextField className="standard-basic" label="Password" type="password" name="password" variant="standard" color='warning' onChange={handleChange} value={password} required/>
                       </div>
                       <div className="form-group form-button">
                           <input type="submit" name='signup' id='signup' className='form-submit' value="REGISTER" />
                       </div>
                   </form>
                   <p>By registering you agree to our Terms & Conditions</p>
               </div>
               <div className="gotologin"><button>  <Link to={"/login"}>Exsisting User? Log In</Link></button></div>
               <div className="loginbyg"><p>OR Continue with <span><FacebookRoundedIcon fontSize='large'/> <GoogleIcon fontSize='large'/></span></p> </div>
           </div>
       </div>
   </section>
    </div>
  )
}

export default Register;