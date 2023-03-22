/* eslint-disable no-undef */
import myApi from "./api";
describe("Api", () => {
  test("should return book details", async () => {
    const bookId = 1;
    const expectedBook = {
      id: bookId,
      title: "BookTitle",
      author: "BookAuthor",
      categories: "BookCategories",
      language: "BookLanguage",
      pages: "123",
      description: "BookDescription",
      available: true,
      image: "BookImage",
      quantity: "BookQuantity",
      volume: "BookVolume",
    };
    const response = await myApi.getBookDetails(bookId);
    expect(response.status).toEqual(undefined);
    expect(response.data).toEqual(expectedBook);
  });
  test("should return an error if book is not found", async () => {
    const bookId = 100;
    const response = await myApi.getBookDetails(bookId);
    expect(response.status).toEqual(404);
    expect(response.data).toEqual("Book not found");
  });
  test("Validate user", () => {
    const userEmail = "testuser@gmail.com";
    const response = myApi.ValidateTheUser(userEmail);
    expect(response.status).toBe(undefined);
  });
  test("signing in", () => {
    const user = {
      userName: "username",
      userEmail: "dhanush@gmail.com",
      userPassword: "Password@123",
      userMobile: "1234567890",
      userAddress: "userAddress",
      isAdmin: false,
    };
    const response = myApi.Signingin(user);
    expect(response.status).toBe(undefined);
  });
  test("AddingBooks", () => {
    const book = {
      title: "Book Title",
      categories: "BookCategory",
      description: "Book Description",
      author: "Book Author",
      year: "Book Year",
      edition: "Book Edition",
      language: "Book Language",
      quantity: "Book quantity",
      pages: "123",
      volume: "1",
      image: "Book Image",
    };
    const response = myApi.AddingBooks(book);
    expect(response.status).toBe(undefined);
  });
  test("Update Book Details", () => {
    const id = 123;
    const book = {
      title: "Book Title",
      categories: "Book Category",
      description: "Book Description",
      author: "Book Author",
      year: "BookYear",
      edition: "BookEdition",
      language: "BookLanguage",
      quantity: "BookQuantity",
      pages: "BookPages",
      volume: "BookVolume",
      image: "BookImage",
    };
    const response = myApi.updateBookDetail(id, book);
    expect(response.status).toBe(undefined);
  });
  test("deleteBookDetails", () => {
    const id = 123;
    const response = myApi.deleteBookDetails(id);
    expect(response.status).toBe(undefined);
  });
  test("deleteRentedBook", () => {
    const id = 123;
    const response = myApi.deleteRentedBook(id);
    expect(response.status).toBe(undefined);
  });
  test("postRentBook", () => {
    const myRent = {
      bookTitle: "Book title",
      bookId: "BookId",
      rentDays: "rentDays",
      rentDate: "rentDate",
      returnDate: "returnDate",
      userId: "userId",
      rentExpired: "bool",
      userName: "UserName",
      borrowedQuantity: "booksCount",
    };
    const response = myApi.postRentBook(myRent);
    expect(response.status).toBe(undefined);
  });
  test("putRentBook", () => {
    const id = 123;
    const book = {
      title: "Book Title",
      categories: "Book Category",
      description: "Book Description",
      author: "Book Author",
      year: "BookYear",
      edition: "BookEdition",
      language: "BookLanguage",
      quantity: "BookQuantity",
      pages: "BookPages",
      volume: "BookVolume",
      image: "BookImage",
    };
    const response = myApi.putBookDetail(id, book);
    expect(response.status).toBe(undefined);
  });
  test("putRentBook", () => {
    const id = 123;
    const book = {
      title: "Book Title",
      categories: "Book Category",
      description: "Book Description",
      author: "Book Author",
      year: "BookYear",
      edition: "BookEdition",
      language: "BookLanguage",
      quantity: "BookQuantity",
      pages: "BookPages",
      volume: "BookVolume",
      image: "BookImage",
    };
    const response = myApi.putRentBook(id, book);
    expect(response.status).toBe(undefined);
  });
  test("deleteRentedBookDetails", () => {
    const id = 123;
    const response = myApi.deleteRentedBookDetails(id);
    expect(response.status).toBe(undefined);
  });
});
