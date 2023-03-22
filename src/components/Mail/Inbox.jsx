import { useEffect, useState } from "react";
import lmsUrl from "../../AxiosURL";

const Inbox = () => {
  const [myInbox, setMyInbox] = useState([]);
  useEffect(() => {
    var userId = sessionStorage.getItem("id");
    lmsUrl.get(`mail?userId=${userId}`).then((res) => setMyInbox(res.data));
  });
  const DeleteMessage = (messageId) => {
    lmsUrl.delete("mail/" + messageId);
  };

  return (
    <div>
      {myInbox &&
        myInbox.map((inbox) => {
          return (
            <section key={inbox.id} className="container">
              <div className="myBooks-card">
                <p>from: {inbox.from}</p>
                <p>Date:{inbox.date.slice(0, 10)}</p>
                <h4>{inbox.message}</h4>
                <button onClick={() => DeleteMessage(inbox.id)}>Delete</button>
              </div>
            </section>
          );
        })}
    </div>
  );
};
export default Inbox;
