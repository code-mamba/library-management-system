import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./RentBooks.css";
import "react-toastify/dist/ReactToastify.css";
import { successfullyRented, unabletoRent } from "../../Toastify";
import myApi from "../../services/api";

const RentBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [rentDays, setRentDays] = useState();
  const [booksCount, setBookCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // rentBookDetails(id)
    myApi
      .rentBookDetails(id)
      .then((res) => {
        setBook(res.data);
      })
      .catch(() => {
        navigate("/fetch-err");
      });
  }, []);

  const rentBook = (e) => {
    var today = new Date();
    var returnDate = new Date();
    returnDate.setDate(today.getDate() + parseInt(rentDays));
    e.preventDefault();
    book.quantity = book.quantity - booksCount;
    var myRent = {
      bookTitle: book.title,
      bookId: book.id,
      rentDays: rentDays,
      rentDate: today.toISOString(),
      returnDate: returnDate.toISOString(),
      userId: sessionStorage.getItem("id"),
      rentExpired: false,
      userName: sessionStorage.getItem("userName"),
      borrowedQuantity: booksCount,
    };
    // postRentBook(myRent)
    myApi
      .postRentBook(myRent)
      .then(() => {
        myApi.putRentBook(id, book);
        // putRentBook(id, book);
      })
      .then(() => {
        successfullyRented();
      })
      .then(() => {
        navigate("/home");
      })
      .catch(() => {
        unabletoRent();
      });
  };

  return (
    <div className="card">
      <div className="container2">
        <div className="con">
          <div className="rentBookImg">
            <div>
              {book && (
                <img
                  style={{
                    marginLeft: "5px",
                    marginTop: "60px",
                    height: "700px",
                    width: "600px",
                  }}
                  src={book.image}
                ></img>
              )}
            </div>
            <div className="container1">
              {book && <p className="para1">Book Title:{book.title}</p>}
              {book && <p className="para1">Book Author:{book.author}</p>}
              {book && <p className="para1">Book Category:{book.categories}</p>}
              {book && <p className="para1">Book Year:{book.year}</p>}
              {book && (
                <p className="para2">
                  <strong>Book Description: </strong>
                  {book.description}
                </p>
              )}
              {book && <h5>Book Edition:{book.edition}</h5>}
              {book && <h5>Book Language:{book.language}</h5>}
              {book && <h5>Book pages:{book.pages}</h5>}
              {book && <h5>No.of Available Books:{book.quantity}</h5>}
              <form onSubmit={rentBook}>
                <label>Number Of Days of Rent:</label>
                <input
                  data-testid="NoOfDays"
                  type="number"
                  value={rentDays}
                  min="1"
                  max="10"
                  onChange={(e) => {
                    setRentDays(e.target.value);
                  }}
                />
                <br></br>
                <label>No of Books to borrow</label>
                <input
                  data-testid="borrowBook"
                  type="number"
                  value={booksCount}
                  min="1"
                  max={book && book.quantity}
                  onChange={(e) => {
                    setBookCount(e.target.value);
                  }}
                />
                <h5 style={{ color: "red" }}>
                  You can get rent maximum 10 days
                </h5>
                <button
                  data-testid="rent-btn"
                  className="rent-btn"
                  type="submit"
                >
                  Rent
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RentBook;
