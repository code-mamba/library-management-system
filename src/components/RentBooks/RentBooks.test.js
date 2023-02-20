/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RentBook from "./RentBooks";

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
    expect(screen.getByTestId("NoOfDays").toHaveValue("2"));
  });
  test("borrow books value", () => {
    render(<RentBook />);
    const borrowBook = screen.getByTestId("borrowBook");
    fireEvent.change(borrowBook, { target: { value: 2 } });
    expect(screen.getByTestId("borrowBook").toHaveValue("2"));
  });
  it("Rent book", () => {
    render(<RentBook />);
    const button = screen.getByTestId("rent-btn");
    fireEvent.click(button);
  });
});
