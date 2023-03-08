import * as types from "./actionType";
import lmsUrl from "../AxiosURL";
import { SuccessfullyBookAdded, SuccessfullyEdited } from "../Toastify";
import { DeleteBook } from "../Toastify";

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
        console.log("res", res);
        dispatch(getBooks(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const deleteBook = (id) => {
  return function (dispatch) {
    lmsUrl.delete(`books/${id}`).then((res) => {
      console.log("res", res);
      dispatch(bookDeleted());
      dispatch(loadBooks());
      DeleteBook();
    });
  };
};
export const addBook = (book) => {
  return function (dispatch) {
    lmsUrl.post("books", book).then((res) => {
      console.log("res", res);
      dispatch(bookAdded());
      dispatch(loadBooks());
      SuccessfullyBookAdded();
    });
  };
};
export const singleBookDetail = (id) => {
  return function (dispatch) {
    lmsUrl
      .get(`books/${id}`)
      .then((res) => {
        console.log("res", res);
        dispatch(getBook(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const updateBook = (book, id) => {
  return function (dispatch) {
    lmsUrl.put(`books/${id}`, book).then((res) => {
      console.log("res", res);
      dispatch(bookUpdated());
      dispatch(loadBooks());
      SuccessfullyEdited();
    });
  };
};
