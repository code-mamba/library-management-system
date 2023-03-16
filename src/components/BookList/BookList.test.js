/* eslint-disable no-undef */
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookList from "./BookList";
import { Provider } from "react-redux";
import store from "../../redux/store";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe("BookList component", () => {
  test("render BookList", () => {
    render(
      <Provider store={store}>
        <BookList />
      </Provider>
    );
  });
  test("edit button", () => {
    render(<BookList />);
    const button = screen.getByTestId("editBook_btn");
    act(() => {
      button.click();
    });
  });
});
