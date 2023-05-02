import { useEffect, useState } from "react";
import lmsUrl from "../../AxiosURL";
import "./RentList.css";

const RentList = () => {
  const [rentList, setRentList] = useState([]);
  const [profileId, setProfileId] = useState("");
  const [res, setRes] = useState([]);
  const today = new Date();
  useEffect(() => {
    lmsUrl
      .get("rentedBooks", { withCredentials: true })
      .then((res) => {
        res.data.data.forEach((book) => {
          setProfileId(book.userId);
          var returnDay = new Date(book.returnDate);
          if (returnDay < today) {
            book.rentExpired = true;
            const oneDay = 24 * 60 * 60 * 1000;
            var differenceInDays = Math.round(
              Math.abs((today - returnDay) / oneDay)
            );
            book.penalty = differenceInDays * 50;
          }
        });
        setRentList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    profileData();
  }, []);

  const profileData = async () => {
    const response = await lmsUrl.get(`auth/users`, { withCredentials: true });
    setRes(response.data.data);
  };
  console.log(profileId);
  console.log(rentList);
  return (
    <div className="rentedList">
      {rentList &&
        rentList.map((book) => {
          rentList.sort((a, b) => {
            return new Date(a.returnDate) - new Date(b.returnDate);
          });
          return (
            <div className="card1" key={book.id}>
              <div className="card-body1">
                <h3 className="card-title">{book.title}</h3>
                <h4 className="customerName">CustomerName: {book.userName}</h4>
                {res
                  .filter((e) => {
                    if (e._id == book.userId) {
                      return e;
                    }
                  })
                  .map((e) => (
                    <p key={e._id} className="card-text">
                      Customer Contact: {e.userMobile}
                    </p>
                  ))}

                {res
                  .filter((e) => {
                    if (e._id == book.userId) {
                      return e;
                    }
                  })
                  .map((e) => (
                    <p key={e._id} className="card-text">
                      CustomerAddress: {e.userAddress}
                    </p>
                  ))}
                {console.log(book.rentedDate)}
                <p className="card-text">
                  RentDate: {book.rentedDate || book.rentDate}
                </p>
                <p className="card-text">ReturnDate: {book.returnDate}</p>
                <p className="card-text">
                  Borrowed Quantity:{book.borrowedQuantity}
                </p>
                <p className="card-text">
                  {book.rentExpired && (
                    <p style={{ color: "red" }}>Rent expired</p>
                  )}
                  {book.rentExpired && (
                    <p style={{ color: "red" }}>
                      Penalty Amount is:{book.penalty}
                    </p>
                  )}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default RentList;
