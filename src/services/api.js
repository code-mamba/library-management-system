import lmsUrl from "../AxiosURL";

export function ValidateTheUSer(userEmail) {
  return lmsUrl.get("users?userEmail=" + userEmail);
}
export function Signingin(user) {
  return lmsUrl.post("users", user);
}
// Add Books
export function AddingBooks(book) {
  return lmsUrl.post("books", book);
}
export function getBookDetails(id) {
  return lmsUrl.get("books/" + id);
}
export function updateBookDetail(id, book) {
  return lmsUrl.put("books/" + id, book);
}
export function deleteBookDetails(id) {
  return lmsUrl.delete("books/" + id);
}
export function deleteRentedBookDetails(id) {
  return lmsUrl.delete("rented-books/" + id);
}
export function rentBookDetails(id) {
  return lmsUrl.get("books/" + id);
}
export function postRentBook(myRent) {
  return lmsUrl.post("rented-books", myRent);
}
export function putRentBook(id, book) {
  return lmsUrl.put("books/" + id, book);
}

export function deleteRentedBook(id) {
  return lmsUrl.delete("rented-books/" + id);
}
export function putBookDetail(bookId, data) {
  return lmsUrl.put("books/" + bookId, data);
}
export function myRentedBookDetails(userId) {
  return lmsUrl.get("rented-books?userId=" + userId);
}
// user edit profile
export function getUserDetails(userId) {
  return lmsUrl.get("users/" + userId);
}
