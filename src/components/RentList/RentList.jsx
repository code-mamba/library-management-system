import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import lmsUrl from "../../AxiosURL";
import "./RentList.css";

const RentList = () => {
  const [rentList, setRentList] = useState([]);
  const [profileId, setProfileId] = useState("");
  const [res, setRes] = useState([]);
  const navigate = useNavigate();
  const today = new Date();
  useEffect(() => {
    lmsUrl
      .get("rented-books")
      .then((res) => {
        res.data.forEach((book) => {
          setProfileId(book.userId);
          console.log(profileId);
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
        setRentList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    profileData();
  }, []);

  const profileData = async () => {
    const response = await lmsUrl.get(`users`);
    setRes(response.data);
  };

  return (
    <div className="rentedList">
      {rentList &&
        rentList.map((book) => {
          rentList.sort((a, b) => {
            console.log(new Date(a.returnDate), new Date(b.returnDate));
            return new Date(a.returnDate) - new Date(b.returnDate);
          });

          console.log("new", rentList);
          console.log("userid", rentList.userId);

          return (
            <div className="card1" key={book.id}>
              {console.log(
                "userId",
                book.userId,
                book.id,
                book.bookTitle,
                book.userName,
                book.rentDate
              )}
              <div className="card-body1">
                <h3 className="card-title">{book.bookTitle}</h3>
                <h4 className="customerName">CustomerName: {book.userName}</h4>

                {res
                  .filter((e) => {
                    if (e.id == book.userId) {
                      return e;
                    }
                  })
                  .map((e) => (
                    <p key={""} className="card-text">
                      Customer Contact: {e.userMobile}
                    </p>
                  ))}

                {res
                  .filter((e) => {
                    if (e.id == book.userId) {
                      return e;
                    }
                  })
                  .map((e) => (
                    <p key={""} className="card-text">
                      CustomerAddress: {e.userAddress}
                    </p>
                  ))}
                <p className="card-text">
                  RentDate: {book.rentDate.slice(0, 10)}
                </p>
                <p className="card-text">
                  ReturnDate: {book.returnDate.slice(0, 10)}
                </p>
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
                <button
                  onClick={() => navigate("/notify-customer/" + book.userId)}
                >
                  Notify
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default RentList;
