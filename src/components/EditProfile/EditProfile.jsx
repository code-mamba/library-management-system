import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProfileUpdated, ProfileUpdateErr } from "../../Toastify";
import lmsUrl from "../../AxiosURL";
const EditProfile = ({ title }) => {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [newpassword, setNewPassword] = useState(null);
  const [empNewPassword, setEmpNewPassword] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const [confirmPassword, setConfPassword] = useState("");
  const [confEmpPassword, setConfEmpPassword] = useState(null);
  const [unMatch, setUnmatch] = useState(null);
  const [show, setShow] = useState(false);
  const [confShow, setConfShow] = useState(false);
  const Admin = sessionStorage.getItem("isAdmin");
  const isAdmin = JSON.parse(Admin);

  const { userId } = useParams();
  const PasswordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  useEffect(() => {
    lmsUrl.get("users/" + userId).then((res) => {
      setUserName(res.data.userName);
      setUserEmail(res.data.userEmail);
    });
  }, []);

  const submitChanges = (e) => {
    if (newpassword == null || newpassword == "") {
      e.preventDefault();
      setEmpNewPassword("Please fill the field");
    } else if (confirmPassword == null || confirmPassword == "") {
      e.preventDefault();
      setConfEmpPassword("Please Fill the field");
    } else if (
      newpassword.match(PasswordRegex) &&
      confirmPassword.match(PasswordRegex)
    ) {
      if (newpassword == confirmPassword) {
        e.preventDefault();
        let userPassword = confirmPassword;
        const users = { userName, userEmail, userPassword, isAdmin };
        lmsUrl
          .put("users/" + userId, users)
          .then(() => {
            ProfileUpdated();
          })
          .then(() => {
            setNewPassword("");
            setConfPassword("");
          })
          .catch((err) => {
            ProfileUpdateErr();
          });
      } else {
        e.preventDefault();
        setUnmatch("new password and confirm password must be same");
      }
    } else {
      e.preventDefault();
      setPasswordErr(
        "The Password must be  Minimum eight characters, at least one letter, one number and one special character "
      );
    }
  };

  // const SuccessMessage = () => {
  //   toast.success("Profile Updated", {
  //     position: toast.POSITION.TOP_RIGHT,
  //   });
  // };

  // const ErrorMessage = () =>{
  //   toast.error(`cant't able to update the profile`,{
  //     position:toast.POSITION.TOP_RIGHT
  //   })
  // }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">{title}</h2>
          <div className="text-center mb-5 text-dark">LMS</div>
          <div className="card my-5">
            <form
              className="card-body cardbody-color p-lg-5"
              onSubmit={(e) => {
                submitChanges(e);
              }}
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
                    setUserName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="newPassword">New password:</label>
                <input
                  type={show ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Enter Your password"
                  value={newpassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                  onClick={(e) => {
                    e.target.focus(
                      setPasswordErr(null),
                      setEmpNewPassword(null),
                      setUnmatch(null)
                    );
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
                {empNewPassword && (
                  <p style={{ color: "red" }}>{empNewPassword}</p>
                )}

                <div className="mb-3">
                  <label htmlFor="confpassword">Confirm password</label>
                  <input
                    type={confShow ? "text" : "password"}
                    className="form-control"
                    id="Confpassword"
                    placeholder="Confirm Your password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfPassword(e.target.value);
                    }}
                    onClick={(e) => {
                      e.target.focus(
                        setPasswordErr(null),
                        setConfEmpPassword(null),
                        setUnmatch(null)
                      );
                    }}
                  />
                  <p onClick={() => setConfShow((prestate) => !prestate)}>
                    {" "}
                    <i
                      className="fa fa-eye fa-fw"
                      id="togglePassword"
                      aria-hidden="true"
                    ></i>{" "}
                  </p>
                  {confEmpPassword && (
                    <p style={{ color: "red" }}>{confEmpPassword}</p>
                  )}
                </div>
              </div>

              <div className="text-center">
                {passwordErr && <p style={{ color: "red" }}>{passwordErr}</p>}
                {unMatch && <p style={{ color: "red" }}>{unMatch}</p>}
                <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                  Submit Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
