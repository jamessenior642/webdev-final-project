import {useRef, useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import * as service from "../../services/auth-service";

const SignUp = () => {
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [err, setError] = useState(false);
    const [userType, setUserType] = useState('Buyer');
    {/*Need to implement button for signup */}
    
    const signup = () => {
        if (
        !(
            emailRef.current.value === "" ||
            usernameRef.current.value === "" ||
            passwordRef.current.value === ""
        )
        ) {
        service
            .signup(
            emailRef.current.value,
            usernameRef.current.value,
            passwordRef.current.value
            )
            .then(() => navigate("/"))
            .catch((e) => console.log(e) && setError(true));
        } else {
        setError(true);
        }
    };



    return (
        <div>
        <h1>SignUp</h1>
        <div>
        <button onClick={() => setUserType('Buyer')}>Buyer</button>
        <button onClick={() => setUserType('Seller')}>Seller</button>
        </div>
        Email
            <input 
        type="email" 
        ref={emailRef}
        placeholder="johndoe@webdev.com"
        className="form-control"
        />
        Username
        <input
        type="text"
        ref={usernameRef}
        placeholder="jdoe17"
        className="form-control"
      />
      Password
      <input
        type="password"
        ref={passwordRef}
        placeholder="supersecretpassword"
        className="form-control"
      />
        {err && (    
        <div className="alert alert-danger alert-dismissible" role="alert">
            Please fill out all fields!
        </div>
        )}
        <button onClick={signup} className="btn btn-primary">
            Sign Up
        </button>
        <br/>
        <Link to="/login">Already have an account?</Link>

        
        </div>
    )
}

export default SignUp;