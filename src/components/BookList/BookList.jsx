import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookList.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../redux/actions";

const BookList = ({ books, isAdmin }) => {
  const navigate = useNavigate();
  const booksPerPage = 5;
  const numOfTotalPages = Math.ceil(books.length / booksPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const visibleBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const dispatch = useDispatch();

  const prevPageHandler = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPageHandler = () => {
    if (currentPage != numOfTotalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const edit = (id) => {
    navigate("/edit-books/" + id);
  };
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you wanted to delete book?")) {
      dispatch(deleteBook(id));
    }
  };

  const rent = (id) => {
    navigate("/rent-books/" + id);
  };

  return (
    <div className="book-list" style={{ backgroundColor: "#c8dcff" }}>
      {visibleBooks.map((book) => {
        return (
          <nav className="container mt-5" key={book.id}>
            <div className="card" style={{ backgroundColor: "#e6e6e6" }}>
              <div className="row">
                <div className="col-md-4">
                  <img
                    title="the value"
                    src={book.image}
                    height="1200px"
                    width="1100px"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="col-md-8 mb-3" id={book.id}>
                  <h5 className="card-title mt-3">Title:{book.title}</h5>
                  <p>Categories: {book.categories}</p>
                  <p>Author: {book.author}</p>
                  <p> Year:{book.year}</p>
                  <p>Language: {book.language}</p>
                  <p>Volume:{book.volume}</p>
                  <p>Quantity:{book.quantity}</p>
                  {isAdmin && (
                    <button
                      data-testid="editBook-btn"
                      className="btn btn-primary"
                      onClick={() => {
                        edit(book.id);
                      }}
                    >
                      Edit
                    </button>
                  )}
                  {isAdmin && (
                    <button
                      data-testid="deleteBook-btn"
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(book.id);
                      }}
                    >
                      Delete
                    </button>
                  )}
                  {!isAdmin && (
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        rent(book.id);
                      }}
                    >
                      Rent Book
                    </button>
                  )}
                </div>
              </div>
            </div>
          </nav>
        );
      })}
      <div className="paginationElement">
        <span className="previous" onClick={prevPageHandler}>
          Prev
        </span>
        <p>
          {pages.map((page) => (
            <span
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`${currentPage === page ? "active" : ""}`}
            >{` ${page} |`}</span>
          ))}
        </p>
        <span className="next" onClick={nextPageHandler}>
          Next
        </span>
      </div>
      <ToastContainer />
    </div>
  );
};
export default BookList;
