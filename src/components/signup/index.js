import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as service from "../../services/auth-service";
import { useProfile } from "../../context/profile-context";

const SignUp = () => {
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [err, setError] = useState(false);
    const [userType, setUserType] = useState("Buyer");

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
                    passwordRef.current.value,
                    userType
                )
                .then(() => navigate("/"))
                .catch((e) => console.log(e) && setError(true));
        } else {
            setError(true);
        }
    };

    const { login } = useProfile();

    const loginSubmit = async () => {
        if (
          !(
            emailRef.current.value === "" ||
            passwordRef.current.value === ""
          )
        ) {
          try {
            await login(emailRef.current.value, passwordRef.current.value);
            navigate("/");
            navigate(0);
          } catch (e) {
            setError(true);
          }
        }
      };

      const handleSignUp = async () => {
        await signup();
        loginSubmit();
      };
    

    return (
        <div className="container"> 
            <div className="row justify-content-center"> 
                <div className="col-md-6"> 
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title text-center">Sign Up</h1>
                            <form>
                                <div className="form-group my-3">
                                    <label htmlFor="userType">User Type: </label>
                                    <div className="btn-group" role="group">
                                        <input
                                            onClick={() => setUserType("Buyer")}
                                            type="radio"
                                            className="btn-check"
                                            name="btnradio"
                                            id="btnradio1"
                                            autoComplete="off"
                                            checked={true}
                                        />
                                        <label className="btn btn-outline-primary" htmlFor="btnradio1">
                                            Buyer
                                        </label>

                                        <input
                                            onClick={() => setUserType("Seller")}
                                            type="radio"
                                            className="btn-check"
                                            name="btnradio"
                                            id="btnradio2"
                                            autoComplete="off"
                                        />
                                        <label className="btn btn-outline-primary" htmlFor="btnradio2">
                                            Seller
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        ref={emailRef}
                                        placeholder="johndoe@webdev.com"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        ref={usernameRef}
                                        placeholder="jdoe17"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        ref={passwordRef}
                                        placeholder="supersecretpassword"
                                        className="form-control"
                                    />
                                </div>
                                {err && (
                                    <div className="alert alert-danger alert-dismissible" role="alert">
                                        Please fill out all fields!
                                    </div>
                                )}
                                <button type="button" className="btn btn-primary btn-block" onClick={handleSignUp}>
                                    Sign Up
                                </button>
                            </form>
                            <div className="text-center mt-3">
                                <Link to="/login">Already have an account? Log in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
