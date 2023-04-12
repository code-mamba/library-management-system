import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import lmsUrl from "../../AxiosURL";

const NotifyCustomer = () => {
  let { id } = useParams();
  const from = sessionStorage.getItem("userName");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const userId = id;
  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    console.log(id);
    const mail = { userId, from, date, message };
    lmsUrl.post("mail", mail).then(() => navigate("/rent-list"));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Mail</h2>
          <div className="card my-5">
            <form
              className="card-body cardbody-color p-lg-5"
              onSubmit={handleSubmit}
            >
              <div className="text-center"></div>

              <div className="mb-3">
                <label>From</label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  aria-describedby="emailHelp"
                  value={from}
                />
              </div>
              <textarea
                className="form-control"
                value={message}
                data-testid="message"
                placeholder="Type message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>

              <div className="text-center">
                <button
                  data-testid="Login-btn"
                  type="submit"
                  className="btn btn-color px-5 mb-5 w-100"
                >
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotifyCustomer;
