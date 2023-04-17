import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyBooks.css";
import { ReturnedSuccessfully, ReturnError } from "../../Toastify";
import myApi from "../../services/api";
import { loadBooks } from "../../redux/actions";

const MyBooks = () => {
  const navigate = useNavigate();
  const userId = sessionStorage.getItem("userId");
  const [rentedBooks, setRentedBooks] = useState();

  const today = new Date();

  const returnBook = (id, bookId, index) => {
    console.log("new id", id, "bookId", bookId);
    myApi.deleteRentedBook(id).then(() => {
      myApi.getBookDetails(bookId).then((res) => {
        let totalBooks = res.data.data.quantity;
        console.log("totalBook before", totalBooks);
        console.log(
          "borrowedQuantity before",
          typeof rentedBooks.borrowedQuantity
        );
        totalBooks = totalBooks + rentedBooks[index].borrowedQuantity;
        console.log("totalbook after", totalBooks);

        myApi
          .putBookDetail(bookId, {
            quantity: totalBooks + rentedBooks[index].borrowedQuantity,
          })
          .then((res) => {
            console.log(res);
            ReturnedSuccessfully();
          })
          .then(() => {
            loadBooks();
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
        res.data.data.forEach((book) => {
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
        console.log(res.data.data);
        setRentedBooks(res.data.data);
      })
      .catch(() => {
        navigate("/fetch-err");
      });
  }, []);
  return (
    <div className="mybooks">
      {rentedBooks &&
        rentedBooks.map((book, index) => {
          return (
            <section className="container" key={book.id}>
              <div className="myBooks-card">
                <h4>Booktitle:{book.title}</h4>
                <p>Rented Date:{book.rentedDate.slice(0, 10)}</p>
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
                    returnBook(book._id, book.bookId, index);
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
