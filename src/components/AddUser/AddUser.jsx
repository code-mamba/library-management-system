import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import { SuccessfullySignedin, UnableToSignup } from "../../Toastify";
import myApi from "../../services/api";

const AddUser = () => {
  const [userName, setuserName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [credErr, setCredErr] = useState(null);
  const [show, setShow] = useState(false);
  const [passNotValid, setPassNotValid] = useState(null);
  const [userMobile, setUserMobile] = useState("");
  const [mobileErr, setMobileErr] = useState(null);
  const [mobileNotValid, setMobileNotValid] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [addressErr, setAddressErr] = useState(null);

  const navigate = useNavigate();
  const validateForm = (email, password, name, mobile, address) => {
    if ((name == null) | (name == "")) {
      setNameErr("Please fill the name field");
    }
    if ((userEmail == null) | (userEmail == "")) {
      setEmailErr("Please fill Email field");
    }
    if ((password == null) | (password == "")) {
      setPasswordErr("Please fill Password field");
    }
    if ((mobile == null) | (mobile == "")) {
      setMobileErr("Please fill Mobile field");
    }
    if ((address == null) | (address == "")) {
      setAddressErr("Please fill address field");
    }

    if (
      email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g) &&
      password.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      ) &&
      mobile.match(/^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/)
    ) {
      return false;
    } else {
      return true;
    }
  };
  const addUser = (e) => {
    e.preventDefault();
    if (
      validateForm(userEmail, userPassword, userName, userMobile, userAddress)
    ) {
      if (!userEmail.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        setEmailErr("Please enter valid email");
      }
      if (
        userPassword &&
        !userPassword.match(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        )
      ) {
        setPassNotValid(
          "Password must  Minimum eight characters, at least one letter, one number and one special character "
        );
      }
      if (
        userMobile &&
        !userMobile.match(/^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/)
      ) {
        setMobileNotValid("Please Enter a Valid Mobile Number");
      }
    } else {
      const user = {
        userName,
        userEmail,
        userPassword,
        userMobile,
        userAddress,
      };
      myApi
        .Signingin(user)
        // Signingin(user)
        .then(() => {
          SuccessfullySignedin();
        })
        .then(() => navigate("/"))
        .catch(() => {
          UnableToSignup();
        });
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Register Form</h2>
          <div className="card my-5">
            <form
              className="card-body cardbody-color p-lg-5"
              onSubmit={addUser}
            >
              <div className="mb-3">
                <label htmlFor="Username">User Name:</label>
                <input
                  data-testid="userName"
                  type="text"
                  className="form-control"
                  id="Username"
                  placeholder="Enter Your User Name"
                  value={userName}
                  onChange={(e) => {
                    setuserName(e.target.value);
                  }}
                  onClick={(e) => {
                    e.target.focus(setCredErr(null), setNameErr(null));
                  }}
                />
                {nameErr && <p style={{ color: "red" }}>{nameErr}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="Usermail">User Mail:</label>
                <input
                  data-testid="userEmail"
                  type="text"
                  className="form-control"
                  id="Usermail"
                  placeholder="Enter Your Mail"
                  value={userEmail}
                  onClick={(e) => {
                    e.target.focus(setCredErr(null), setEmailErr(null));
                  }}
                  onChange={(e) => {
                    setuserEmail(e.target.value);
                  }}
                ></input>
                {emailErr && <p style={{ color: "red" }}>{emailErr}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="userContact"> Contact Number:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="userContact"
                  placeholder="Enter Mobile Number"
                  data-testid="userMobile"
                  value={userMobile}
                  onChange={(e) => {
                    setUserMobile(e.target.value);
                  }}
                  onClick={(e) =>
                    e.target.focus(setMobileErr(null), setMobileNotValid(null))
                  }
                ></input>
                {mobileErr && <p style={{ color: "red" }}>{mobileErr}</p>}
                {mobileNotValid && (
                  <p style={{ color: "red" }}>{mobileNotValid}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password">Create password:</label>
                <input
                  data-testid="userPassword"
                  type={show ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Enter Your password"
                  value={userPassword}
                  onChange={(e) => {
                    setuserPassword(e.target.value);
                  }}
                  onClick={(e) => {
                    e.target.focus(
                      setCredErr(null),
                      setPasswordErr(null),
                      setPassNotValid(null)
                    );
                  }}
                />
                <p
                  className="eye_icon"
                  data-testid="eye_icon"
                  onClick={() => setShow((prestate) => !prestate)}
                >
                  {" "}
                  <i
                    className="fa fa-eye fa-fw"
                    id="togglePassword"
                    aria-hidden="true"
                  ></i>{" "}
                </p>
                {passwordErr && <p style={{ color: "red" }}>{passwordErr}</p>}
                {passNotValid && <p style={{ color: "red" }}>{passNotValid}</p>}
              </div>
              {credErr && <p style={{ color: "red" }}>{credErr}</p>}
              <div className="mb-3">
                <label htmlFor="address">Residential Address:</label>
                <textarea
                  className="form-control"
                  value={userAddress}
                  data-testid="userAddress"
                  onChange={(e) => {
                    setUserAddress(e.target.value);
                  }}
                  onClick={(e) => e.target.focus(setAddressErr(null))}
                ></textarea>
                {addressErr && <p style={{ color: "red" }}>{addressErr}</p>}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-color px-5 mb-5 w-100"
                  data-testid="signin-btn"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
