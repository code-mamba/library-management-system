/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import lmsUrl from "../../AxiosURL";
import MyBooks from "./MyBooks";
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  Navigate: new (class {})(),
}));
describe("Render MyBooks", () => {
  test("render MyBooks", () => {
    render(<MyBooks />);
  });
  test("Mocking axios get", () => {
    var mock = new MockAdapter(lmsUrl);
    const data = { response: 200 };
    mock.onGet("rented-books?userId=").reply(200, data);
    render(<MyBooks />);
  });
  test("trigger return book", () => {
    render(<MyBooks />);
    const ReturnButton = screen.getByTestId("returnBook");
    fireEvent.click(ReturnButton);
    var mock = new MockAdapter(lmsUrl);
    const data = { response: 200 };
    mock.onDelete("rented-books/userId").reply(200, data);
    render(<MyBooks />);
  });
  test("returnBook", () => {
    render(<MyBooks />);
    const button = screen.getByTestId("returnBook");
    fireEvent.click(button);
  });
});
