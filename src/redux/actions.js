import * as types from "./actionType";
import lmsUrl from "../AxiosURL";
import { SuccessfullyBookAdded, SuccessfullyEdited } from "../Toastify";
import { DeleteBook } from "../Toastify";
import myApi from "../services/api";
// import myApi, {
//   // AddingBooks,
//   // deleteBookDetails,
//   // getBookDetails,
//   // updateBookDetail,
// } from "../services/api";
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
      .get("books")
      .then((res) => {
        dispatch(getBooks(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const deleteBook = (id) => {
  return function (dispatch) {
    // deleteBookDetails(id)
    myApi.deleteBookDetails(id).then(() => {
      dispatch(bookDeleted());
      dispatch(loadBooks());
      DeleteBook();
    });
  };
};
export const addBook = (book) => {
  return function (dispatch) {
    myApi
      .AddingBooks(book)
      // AddingBooks(book)
      .then(() => {
        dispatch(bookAdded());
        dispatch(loadBooks());
        SuccessfullyBookAdded();
      });
  };
};
export const singleBookDetail = (id) => {
  return function (dispatch) {
    // getBookDetails(id)
    myApi
      .getBookDetails(id)
      .then((res) => {
        dispatch(getBook(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const updateBook = (book, id) => {
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
