import * as types from "./actionType";
import lmsUrl from "../AxiosURL";
import { SucessMessage, SuccessfullyEdited, RejectMessage } from "../Toastify";
// import { DeleteBook } from "../Toastify";
import myApi from "../services/api";
const getBooks = (books) => ({
  type: types.GET_BOOKS,
  payload: books,
});
const bookDeleted = () => ({
  type: types.DELETE_BOOK,
});
const bookAdded = () => ({
  type: types.ADD_BOOK,
});
const bookUpdated = () => ({
  type: types.UPDATE_BOOK,
});
const getBook = (book) => ({
  type: types.SINGLE_BOOK_DETAIL,
  payload: book,
});

export const loadBooks = () => {
  return function (dispatch) {
    lmsUrl
      .get("/books")
      .then((res) => {
        dispatch(getBooks(res.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const deleteBook = (id) => {
  return function (dispatch) {
    // deleteBookDetails(id)
    myApi
      .deleteBookDetails(id)
      .then((res) => {
        dispatch(bookDeleted());
        dispatch(loadBooks());
        SucessMessage(res.data.message);
      })
      .catch((err) => {
        RejectMessage(err);
      });
  };
};
export const addBook = (book) => {
  return function (dispatch) {
    myApi
      .AddingBooks(book)
      // AddingBooks(book)
      .then((res) => {
        dispatch(bookAdded());
        dispatch(loadBooks());
        SucessMessage(res.data.message);
        // SuccessfullyBookAdded();
      })
      .catch((err) => {
        console.log(err.response.data.error);
        let errMessage = err.response.data.error;
        RejectMessage(errMessage);
      });
  };
};
export const singleBookDetail = (id) => {
  return function (dispatch) {
    // getBookDetails(id)
    myApi
      .getBookDetails(id)
      .then((res) => {
        console.log(res);
        dispatch(getBook(res.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const updateBook = (book, id) => {
  console.log("updateBookId", id);
  return function (dispatch) {
    myApi
      .updateBookDetail(id, book)
      // updateBookDetail(id, book)
      .then(() => {
        dispatch(bookUpdated());
        dispatch(loadBooks());
        SuccessfullyEdited();
      });
  };
};
