/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./Login";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("<Login />", () => {
  test("render email input", () => {
    render(<Login />);
    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
  test("valid input  to test email", () => {
    render(<Login />);
    const inputEl = screen.getByTestId("email-input");
    fireEvent.change(inputEl, { target: { value: "dhanush@gmail.com" } });
    expect(screen.getByTestId("email-input")).toHaveValue("dhanush@gmail.com");
  });
  test("render password input", () => {
    render(<Login />);
    const inputEl2 = screen.getByTestId("password-input");
    expect(inputEl2).toBeInTheDocument();
    expect(inputEl2).toHaveAttribute("type", "password");
  });
  test("valid input to test password", () => {
    render(<Login></Login>);
    const inputEl2 = screen.getByTestId("password-input");
    fireEvent.change(inputEl2, { target: { value: "P" } });
    expect(screen.getByTestId("password-input")).toHaveValue("P");
  });
  test("Login button", () => {
    render(<Login />);
    const button = screen.getByTestId("Login_btn");
    fireEvent.click(button);
  });
});
