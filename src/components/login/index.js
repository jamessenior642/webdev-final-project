import { React, useRef, useState } from "react";
import { useProfile } from "../../context/profile-context";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { login } = useProfile();
  const [err, setError] = useState(false);

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

  return (
    <div className="container"> 
      <div className="row justify-content-center"> 
        <div className="col-md-6"> 
          <div className="card"> 
            <div className="card-body">
              <h1 className="card-title text-center">Login</h1>
              <form>
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
                    Please make sure you have a valid login!
                  </div>
                )}
                <button type="button" className="btn btn-primary btn-block" onClick={loginSubmit}>
                  Login
                </button>
              </form>
              <div className="text-center mt-3">
                <Link to="/signup">Don't have an account? Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
