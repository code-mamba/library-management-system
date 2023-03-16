import "./userProfile.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import lmsUrl from "../../AxiosURL";

const UserProfile = () => {
  var userId = parseInt(sessionStorage.getItem("id"));
  const [profileName, setProfileName] = useState("");
  const [phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    lmsUrl
      .get(`users/${userId}`)
      .then((res) => {
        setProfileName(res.data.userName);
        setPhone(res.data.userMobile);
        setAddress(res.data.userAddress);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="usercard">
          <div className="upper">
            <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid" />
          </div>

          <div className="user">
            <div className="profile">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
                className="rounded-circle"
                width="80"
              />
            </div>
          </div>

          <div className="text-center">
            <h4 className="mb-0">Hi {profileName}</h4>
            <span className="Address-label">
              <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
              Address:
            </span>
            <span className="text-muted d-block mb-2">{Address}</span>
            <span className="text-muted d-block mb-2">
              <span className="Address-label">
                <i className="fa fa-phone-square fa-2x" aria-hidden="true"></i>
                Contact:
              </span>
              <span className="text-muted d-block mb-2">{phone}</span>
            </span>
          </div>
          <div>
            <button
              data-testid="editProfile-btn"
              className="btn btn-color px-5 mb-5 w-100"
              onClick={() => {
                navigate("/edit-profile/" + userId);
              }}
            >
              Edit profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
