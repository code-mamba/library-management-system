import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import lmsUrl from "../../AxiosURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginErrorMessage, LoginServerError, LoginSucessMessage } from "../../Toastify";

const Login = ({ setisAdmin, setisLoggedIn }) => {
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [errMsgEmail, seterrMsgEmail] = useState(null);
  const [errMsgPassword, setErrMsgPassword] = useState(null);
  const [credErr, setCredErr] = useState(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const validateForm = (email, password) => {
    if ((email === "") | (email === null)) {
      seterrMsgEmail("Please fill the Email field");
    }
    if ((password === "") | (password === null)) {
      setErrMsgPassword("Please fill the  Password field");
    }
    if (
      email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) &&
      password.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      )
    ) {
      return false;
    } else {
      return true;
    }
  };
  const login = (e) => {
    e.preventDefault();

    if (validateForm(userEmail, userPassword)) {
      setCredErr("Invalid User Name or Password");
      setisLoggedIn(false);
    } else {
      lmsUrl
        .get("users?userEmail=" + userEmail)
        .then((res) => {
          if (res.data[0].userPassword === userPassword) {
            LoginSucessMessage()
            seterrMsgEmail(null);
            res.data[0].isAdmin ? setisAdmin(true) : setisAdmin(false);
            setisLoggedIn(true);
            sessionStorage.setItem("id", res.data[0].id);
            sessionStorage.setItem("userName", res.data[0].userName);
            sessionStorage.setItem("isAdmin", res.data[0].isAdmin);
            // toast.success("Successfully Logged in !", {
            //   position: toast.POSITION.TOP_RIGHT,
            // });
            setTimeout(() => {
              navigate("/home");
            }, 2000);
          } else {
            
            setisLoggedIn(false);

            // toast.error("Invalid credentials!", {
            //   position: toast.POSITION.TOP_RIGHT,
            // });
          }
        })
        .catch((err) => {
          LoginErrorMessage()
          // LoginServerError()
        });
    }
  };

  // Toastify Error message


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Login</h2>
          <div className="text-center mb-5 text-dark">LMS</div>
          <div className="card my-5">
            <form className="card-body cardbody-color p-lg-5" onSubmit={login}>
              <div className="text-center"></div>

              <div className="mb-3">
                <label>Enter Your mail</label>
                <input
                  type="text"
                  className="form-control"
                  id="Username"
                  aria-describedby="emailHelp"
                  placeholder="User Email"
                  value={userEmail}
                  onChange={(e) => setuserEmail(e.target.value)}
                  onClick={(e) => {
                    e.target.focus(setCredErr(null), seterrMsgEmail(null));
                  }}
                />
              </div>
              <div className="mb-3">
                <label>Enter password</label>
                <input
                  type={show ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="password"
                  value={userPassword}
                  onClick={(e) => {
                    e.target.focus(setCredErr(null), setErrMsgPassword(null));
                  }}
                  onChange={(e) => setuserPassword(e.target.value)}
                />
                <p onClick={() => setShow((prestate) => !prestate)}>
                  {" "}
                  <i
                    className="fa fa-eye fa-fw"
                    id="togglePassword"
                    aria-hidden="true"
                  ></i>{" "}
                </p>
              </div>
              {errMsgEmail && <p style={{ color: "red" }}>{errMsgEmail}</p>}
              {errMsgPassword && (
                <p style={{ color: "red" }}>{errMsgPassword}</p>
              )}
              {credErr && <p style={{ color: "red" }}>{credErr}</p>}
              <div className="text-center">
                <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                  Login
                </button>
              </div>
              <ul>
                <li>
                  Minimum eight characters, at least one letter, one number and
                  one special character:
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
