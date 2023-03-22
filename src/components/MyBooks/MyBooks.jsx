import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyBooks.css";
import { ReturnedSuccessfully, ReturnError } from "../../Toastify";
import myApi from "../../services/api";

const MyBooks = () => {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("id");
  const [rentedBooks, setRentedBooks] = useState();

  const today = new Date();

  const returnBook = (id, bookId) => {
    // deleteRentedBookDetails(id)
    myApi.deleteRentedBook(id).then(() => {
      myApi.getBookDetails(bookId).then((res) => {
        res.data.quantity = res.data.quantity + 1;
        myApi
          .putBookDetail(bookId, res.data)
          .then(() => {
            ReturnedSuccessfully();
          })
          .then(() => {
            navigate("/home");
          })
          .catch(() => {
            ReturnError();
          });
      });
    });
  };
  useEffect(() => {
    myApi
      .myRentedBookDetails(userId)
      .then((res) => {
        res.data.forEach((book) => {
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
        setRentedBooks(res.data);
      })
      .catch(() => {
        navigate("/fetch-err");
      });
  }, []);
  return (
    <div className="mybooks">
      {rentedBooks &&
        rentedBooks.map((book) => {
          return (
            <section className="container" key={book.id}>
              <div className="myBooks-card">
                <h4>Booktitle:{book.bookTitle}</h4>
                <p>Rented Date:{book.rentDate.slice(0, 10)}</p>
                <p>Return Date: {book.returnDate.slice(0, 10)}</p>
                <p>Borrowed Books: {book.borrowedQuantity}</p>
                {book.rentExpired && (
                  <p
                    className="text-danger"
                    style={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    Rent Expired
                  </p>
                )}
                {book.rentExpired && (
                  <p className="text-danger">
                    Penalty amount is ₹{book.penalty}.
                  </p>
                )}
                <button
                  className="button"
                  data-testid="returnBook"
                  onClick={() => {
                    returnBook(book.id, book.bookId);
                  }}
                >
                  Return Book
                </button>
              </div>
            </section>
          );
        })}
    </div>
  );
};

export default MyBooks;
