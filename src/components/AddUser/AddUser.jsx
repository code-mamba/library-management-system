import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../Login/Login.css";
import axios from "axios";
import lmsUrl from "../../AxiosURL";

const AddUser = () => {
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [errMsg, seterrMsg] = useState(null);
  const [credErr, setCredErr] = useState(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const validateForm = (email, password, name) => {
    if (
      (email == null) | (email == "") ||
      (password == null) | (password == "") ||
      name == "" ||
      name == null
    ) {
      seterrMsg("please fill all fields");
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
  const addUser = (e) => {
    e.preventDefault();
    if (validateForm(userEmail, userPassword, userName)) {
      setCredErr("Enter valid credentials");
    } else {
      const user = { userName, userEmail, userPassword, isAdmin: false };
      alert("Succesfully Signedin");
      lmsUrl
        .post("users", user)
        .then((res) => {
          setInterval(() => {
            navigate("/");
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Register Form</h2>
          <div className="text-center mb-5 text-dark">LMS</div>
          <div className="card my-5">
            <form
              className="card-body cardbody-color p-lg-5"
              onSubmit={addUser}
            >
              <div className="mb-3">
                <label htmlFor="Username">User Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="Username"
                  placeholder="Enter Your User Name"
                  value={userName}
                  onChange={(e) => {
                    setuserName(e.target.value);
                  }}
                  onClick={(e) => {
                    e.focus(setCredErr(null), seterrMsg(null));
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Usermail">User Mail:</label>
                <input
                  type="text"
                  className="form-control"
                  id="Usermail"
                  placeholder="Enter Your Mail"
                  value={userEmail}
                  onClick={(e) => {
                    e.focus(setCredErr(null), seterrMsg(null));
                  }}
                  onChange={(e) => {
                    setuserEmail(e.target.value);
                  }}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="password">Create password:</label>
                <input
                  type={show ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Enter Your password"
                  value={userPassword}
                  onChange={(e) => {
                    setuserPassword(e.target.value);
                  }}
                  onClick={(e) => {
                    e.focus(setCredErr(null), seterrMsg(null));
                  }}
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
              {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}
              {credErr && <p style={{ color: "red" }}>{credErr}</p>}
              <div className="text-center">
                <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                  Register
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
    </div>
  );
};

export default AddUser;
