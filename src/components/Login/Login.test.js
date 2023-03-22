/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./Login";
import { act } from "react-dom/test-utils";

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
    fireEvent.change(inputEl2, { target: { value: "Password@123" } });
    expect(screen.getByTestId("password-input")).toHaveValue("Password@123");
  });
  test("Email clicking input type", () => {
    render(<Login />);

    const EmailClick = screen.getByTestId("email-input");

    act(() => {
      EmailClick.click();
    });
  });
  test("Password clicking input type", () => {
    render(<Login />);
    const PasswordClick = screen.getByTestId("password-input");
    act(() => {
      PasswordClick.click();
    });
  });
  test("eye icon click", () => {
    render(<Login />);
    const eyeClick = screen.getByTestId("eye-icon");
    act(() => {
      eyeClick.click();
    });
  });
  test("Login button", () => {
    render(<Login />);
    const button = screen.getByTestId("Login-btn");
    fireEvent.click(button);
  });
});
