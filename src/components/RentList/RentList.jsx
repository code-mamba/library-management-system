import { useEffect, useState } from "react";
import lmsUrl from "../../AxiosURL";
import "./RentList.css";

const RentList = () => {
  const [rentList, setRentList] = useState([]);
  useEffect(() => {
    lmsUrl
      .get("rented-books")
      .then((res) => {
        setRentList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="rentedList">
      {rentList &&
        rentList.map((book) => {
          return (
            <div className="card1" key={book.id}>
              <div className="card-body1">
                <h4 className="card-title">{book.bookTitle}</h4>
                <h6 className="card-subtitle mb-2 text-muted">
                  UserName: {book.userName}
                </h6>
                <p className="card-text">
                  RentDate: {book.rentDate.slice(0, 10)}
                </p>
                <p className="card-text">
                  ReturnDate: {book.returnDate.slice(0, 10)}
                </p>
                <p className="card-text">
                  Borrowed Quantity:{book.borrowedQuantity}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default RentList;
