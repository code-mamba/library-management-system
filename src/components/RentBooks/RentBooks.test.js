/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RentBook from "./RentBooks";
import MockAdapter from "axios-mock-adapter";
import lmsUrl from "../../AxiosURL";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("<RentBook/>", () => {
  test("Rent days value", () => {
    render(<RentBook />);
    const NoOfDays = screen.getByTestId("NoOfDays");
    fireEvent.change(NoOfDays, { target: { value: 2 } });
    expect(screen.getByTestId("NoOfDays")).toHaveValue(2);
  });
  test("Mock get", () => {
    var mock = new MockAdapter(lmsUrl);
    const data = { response: 200 };
    mock.onGet("books/undefined").reply(200, data);
    render(<RentBook />);
  });
  test("Mocking get error", () => {
    var mock = new MockAdapter(lmsUrl);
    const data = {};
    mock.onGet("books/undefined").reply(404, data);
    render(<RentBook />);
  });
  test("borrow books value", () => {
    render(<RentBook />);
    const borrowBook = screen.getByTestId("borrowBook");
    fireEvent.change(borrowBook, { target: { value: 2 } });
    expect(screen.getByTestId("borrowBook")).toHaveValue(2);
  });
  it("Rent book", () => {
    render(<RentBook />);
    const button = screen.getByTestId("rent-btn");
    fireEvent.click(button);
  });
  test("Mock postRentBook", () => {
    var mock = new MockAdapter(lmsUrl);
    const data = { response: 200 };
    const myRent = {
      bookTitle: "dh",
      bookId: "1",
      rentDays: "3",
      rentDate: "2",
      returnDate: "w",
      userId: "1",
      rentExpired: false,
      userName: "dha",
      borrowedQuantity: "2",
    };
    mock.onPost("rented-books", myRent).reply(200, data);
  });
});
