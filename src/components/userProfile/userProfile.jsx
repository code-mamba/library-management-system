import "./userProfile.css";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  var isAdmin = sessionStorage.getItem("isAdmin");
  var userName = sessionStorage.getItem("userName");
  var userId = sessionStorage.getItem("id");
  const navigate = useNavigate();

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="usercard">
          <div className="upper">
            <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid" />
          </div>

          <div className="user text-center">
            <div className="profile">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
                className="rounded-circle"
                width="80"
              />
            </div>
          </div>

          <div className="mt-5 text-center">
            <h4 className="mb-0">{userName}</h4>
            <span className="text-muted d-block mb-2">Admin:{isAdmin}</span>
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
