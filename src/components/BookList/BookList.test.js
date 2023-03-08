/* eslint-disable no-undef */
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookList from "./BookList";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe("BookList component", () => {
  test("render BookList", () => {
    render(<BookList />);
  });
  test("edit button", () => {
    render(<BookList />);
    const button = screen.getByTestId("editBook_btn");
    act(() => {
      button.click();
    });
  });
});
