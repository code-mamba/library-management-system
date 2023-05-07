import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./RentBooks.css";
import "react-toastify/dist/ReactToastify.css";
import { SucessMessage, unabletoRent } from "../../Toastify";
import myApi from "../../services/api";
import { loadBooks } from "../../redux/actions";

const RentBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [rentDays, setRentDays] = useState(0);
  const [booksCount, setBookCount] = useState(0);
  const [errMsg, setErrMsg] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // rentBookDetails(id)
    myApi
      .getBookDetails(id)
      // .rentBookDetails(id)
      .then((res) => {
        setBook(res.data.data);
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
    book.quantity = book.quantity - parseInt(booksCount);
    var myRent = {
      title: book.title,
      bookId: book._id,
      rentDays: rentDays,
      rentDate: today.toISOString(),
      returnDate: returnDate.toISOString(),
      userId: sessionStorage.getItem("userId"),
      rentExpired: false,
      userName: sessionStorage.getItem("userName"),
      borrowedQuantity: parseInt(booksCount),
    };
    console.log("Book.quantity", book.quantity);
    if (rentDays > 0 && rentDays < 10) {
      myApi
        .postRentBook(myRent)
        .then((res) => {
          myApi.putRentBook(id, { quantity: book.quantity });
          SucessMessage(res.data.message);
        })
        .then(() => {
          loadBooks();
        })
        .then(() => {
          navigate("/home");
        })
        .catch(() => {
          unabletoRent();
        });
    } else {
      setErrMsg("rentDays should not be more than 10 days");
    }
  };
  const increament = () => {
    setErrMsg(null);
    setRentDays(rentDays + 1);
  };
  const decrement = () => {
    setErrMsg(null);
    setRentDays(rentDays - 1);
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
                <button
                  className="decrease"
                  onClick={() => {
                    decrement();
                  }}
                >
                  -
                </button>
                <label>Number Of Days of Rent:{rentDays}</label>
                <button
                  className="increase"
                  onClick={() => {
                    increament();
                  }}
                >
                  +
                </button>
                {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}
                {/* <input
                  data-testid="NoOfDays"
                  type="number"
                  value={rentDays}
                  min="1"
                  max="10"
                  onChange={(e) => {
                    setRentDays(e.target.value);
                  }}
                /> */}
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
