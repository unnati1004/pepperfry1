import React, {useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
// import { googleSignInInitiate, loginInitiate } from '../redux/actions';
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
// const {currentUser} = useSelector((state) => state.user);

// const history = useHistory();

// useEffect(()=>{
//   if(currentUser){
//     history.push('/');
//   }
// },[currentUser, history]);

// const dispatch = useDispatch();

// const handleGoogleSignIn = () => {
//   dispatch(googleSignInInitiate());
// };
// const handleFBSignIn = () => {
//   dispatch(loginInitiate());
// };

  const handleSubmit =(e) =>{
    e.preventDefault();
    // if(!email || !password){
    //   return alert("Please fill in all fields");
    // }
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
 //if(!e.email){
 //return alert("Please enter a valid email");
    
// if(e.password !== password)
// return alert("Please enter a valid password");

  //  dispatch(loginInitiate(email, password));
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
      {/* <h1 className="realme">realme</h1>
        <div id= "logreg-forms">
          <form className="form-signin" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal" style={{textAlign:"center"}}>
              Sign in
              </h1> */}
              {/* <div className="social-login">
                <button 
                className="btn google-btn social-btn" 
                type="button" 
                onClick={handleGoogleSignIn}>

                  <span>
                    <i className="fab fa-google-plus-g"></i> Sign in with Google+
                  </span>
                  </button>

                  <button 
                className="btn facebook-btn social-btn" 
                type="button" 
                onClick={handleFBSignIn}>

                  <span>
                    <i className="fab fa-facebook-f"></i> Sign in with Facebook
                  </span>
                  </button>
              </div> */}
              {/* <p style={{textAlign:"center"}}>OR</p>
              <p className="signwithpass">Sign in with password</p>
              <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
              value={email}
              required
              />

            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={password}
              required
              />
              <button className="block-signin" type="submit">
                <i className="fas fa-sign-in-alt"></i> Sign In
              </button>
            
               <hr/>  */}
              {/* <p style={{textAlign:"center"}}>OR</p> */}
              {/* <p className="otherstyle" style={{textAlign:"center"}}>Other ways to sign in</p>
              <div className="social-login">
                <button 
                className="btn google-btn social-btn" 
                type="button" 
                onClick={handleGoogleSignIn}>

                  <span>
                    <i className="fab fa-google-plus-g"></i> Sign in with Google+
                  </span>
                  </button> */}

                  {/* <button 
                className="btn facebook-btn social-btn" 
                type="button" 
                onClick={handleFBSignIn}>

                  <span>
                    <i className="fab fa-facebook-f"></i> Sign in with Facebook
                  </span>
                  </button> */}
              {/* </div>

              <p className="otherstyle">Don't have an account</p>
              <Link to="/register">
              <button 
              className="block-newsignup" 
              type="button" 
              id="btn-signup"
              >
                <i className="fas fa-user-plus"></i>Create New Account
              </button>
                </Link>
          </form>
        </div> */}

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