import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { LoginErrorMessage, SucessMessage } from "../../Toastify";
import myApi from "../../services/api";
import jwtDecode from "jwt-decode";
import lmsUrl from "../../AxiosURL";

const Login = ({ setisAdmin, setisLoggedIn }) => {
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [errMsgEmail, seterrMsgEmail] = useState(null);
  const [errMsgPassword, setErrMsgPassword] = useState(null);
  const [credErr, setCredErr] = useState(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  function validateForm(email, password) {
    if ((email === "") | (email === null)) {
      seterrMsgEmail("Please fill the Email field");
    }
    if ((password === "") | (password === null)) {
      setErrMsgPassword("Please fill the  Password field");
    }
    if (
      email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g) &&
      password.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      )
    ) {
      return false;
    } else {
      return true;
    }
  }
  const login = (e) => {
    e.preventDefault();

    if (validateForm(userEmail, userPassword)) {
      setCredErr("Invalid User Name or Password");
      setisLoggedIn(false);
    } else {
      console.log("test1");
      myApi
        .ValidateTheUser(userEmail, userPassword)
        .then((res) => {
          if (res.data.success === true) {
            const token = res.data.token;
            seterrMsgEmail(null);
            const decoded = jwtDecode(token);
            const userId = decoded.id;
            setisLoggedIn(true);
            sessionStorage.setItem("userId", userId);
            SucessMessage(res.data.message);
            lmsUrl
              .get(`/auth/me/${userId}`, { withCredentials: true })
              .then((res) => {
                console.log("new res", res);
                res.data.data.isAdmin === true
                  ? setisAdmin(true)
                  : setisAdmin(false);
                sessionStorage.setItem("isAdmin", res.data.data.isAdmin);
                sessionStorage.setItem("userName", res.data.data.userName);
                console.log(res);
                navigate("/home");
              });
          } else {
            setisLoggedIn(false);
            LoginErrorMessage();
          }
        })
        .catch(() => {
          LoginErrorMessage();
        });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Login</h2>
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
                  data-testid="email-input"
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
                  data-testid="password-input"
                  value={userPassword}
                  onClick={(e) => {
                    e.target.focus(setCredErr(null), setErrMsgPassword(null));
                  }}
                  onChange={(e) => setuserPassword(e.target.value)}
                />
                <p
                  className="eye_icon"
                  data-testid="eye-icon"
                  onClick={() => setShow((prestate) => !prestate)}
                >
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
                <button
                  data-testid="Login-btn"
                  type="submit"
                  className="btn btn-color px-5 mb-5 w-100"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
