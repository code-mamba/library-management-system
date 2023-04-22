import lmsUrl from "../AxiosURL";
class Api {
  ValidateTheUser = (userEmail, userPassword) => {
    console.log("inside validate user");
    return lmsUrl.post(
      "/auth/login",
      { userEmail, userPassword },
      { withCredentials: true }
    );
  };
  getAllBooks = () => {
    return lmsUrl.get("/books");
  };
  Signingin = (user) => {
    return lmsUrl.post("/auth/register", user);
  };
  AddingBooks = (book) => {
    return lmsUrl.post("books/", book, { withCredentials: true });
  };
  GetMe = () => {
    return lmsUrl.get("auth/me", { withCredentials: true });
  };
  getBookDetails = (id) => {
    return lmsUrl.get(`books/${id}`);
  };
  updateBookDetail = (id, book) => {
    return lmsUrl.put(`books/${id}`, book, { withCredentials: true });
  };
  deleteBookDetails = (id) => {
    return lmsUrl.delete("books/" + id, { withCredentials: true });
  };
  deleteRentedBook = (id) => {
    return lmsUrl.delete("rentedBooks/" + id, { withCredentials: true });
  };
  rentBookDetails = (id) => {
    return lmsUrl.get("books/" + id);
  };
  postRentBook = (myRent) => {
    return lmsUrl.post("/rentedBooks", myRent, { withCredentials: true });
  };
  putRentBook = (id, quant) => {
    console.log("book", quant);
    return lmsUrl.put(`books/${id}`, quant, { withCredentials: true });
  };
  deleteRentedBookDetails = (id) => {
    return lmsUrl.put("rented-books/" + id);
  };
  putBookDetail = (bookId, data) => {
    console.log(bookId);
    console.log("data", "books/" + bookId, data);
    return lmsUrl.put("books/" + bookId, data, { withCredentials: true });
  };
  myRentedBookDetails = (userId) => {
    console.log(userId);
    return lmsUrl.get(`rentedBooks?userId=${userId}`, {
      withCredentials: true,
    });
  };
  getUserDetails = (userId) => {
    return lmsUrl.get("users/" + userId);
  };
  userLogout = () => {
    return lmsUrl.get("auth/logout", {
      withCredentials: true,
    });
  };
  bookCategories = (value) => {
    return lmsUrl.get(`books?categories=${value}`);
  };
  bookYear = (year, yearPlusten) => {
    return lmsUrl.get(`books?year[gt]=${year}&&year[lte]=${yearPlusten}`);
  };
}
const myApi = new Api();
export default myApi;
