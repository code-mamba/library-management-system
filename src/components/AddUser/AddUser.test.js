/* eslint-disable no-undef */
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddUser from "./AddUser";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe("<AddUser />", () => {
  test("user name input value added", () => {
    render(<AddUser />);
    const userNameInp = screen.getByTestId("userName");
    fireEvent.change(userNameInp, { target: { value: "h" } });
    expect(userNameInp.value).toBe("h");
  });
  test("user email input value added", () => {
    render(<AddUser />);
    const userEmailInp = screen.getByTestId("userEmail");
    fireEvent.change(userEmailInp, { target: { value: "h" } });
    expect(userEmailInp.value).toBe("h");
  });
  test("user email input value added", () => {
    render(<AddUser />);
    const userPasswordInp = screen.getByTestId("userPassword");
    fireEvent.change(userPasswordInp, { target: { value: "h" } });
    expect(userPasswordInp.value).toBe("h");
  });
  test("clicking name input type", () => {
    render(<AddUser />);

    const inputClick = screen.getByTestId("userName");
    act(() => {
      inputClick.click();
    });
  });
  test("clicking Email input type", () => {
    render(<AddUser />);

    const emailClick = screen.getByTestId("userEmail");

    act(() => {
      emailClick.click();
    });
  });
  test("clicking Password input type", () => {
    render(<AddUser />);

    const passwordClick = screen.getByTestId("userPassword");

    act(() => {
      passwordClick.click();
    });
  });
  test("set userMobile, setUser Address setUserPassword", () => {
    render(<AddUser />);
    const userMobile = screen.getByTestId("userMobile");
    fireEvent.change(userMobile, { target: { value: "h" } });
    const userPasswordInp = screen.getByTestId("userPassword");
    fireEvent.change(userPasswordInp, { target: { value: "p" } });
    expect(userPasswordInp.value).toBe("p");
    const userAddress = screen.getByTestId("userAddress");
    fireEvent.change(userAddress, { target: { value: "d" } });
    expect(userAddress.value).toBe("d");
    console.log(userAddress);
  });
  test("Mobile clicking input type", () => {
    render(<AddUser />);
    const mobileClick = screen.getByTestId("userMobile");
    act(() => {
      mobileClick.click();
    });
  });
  test("Address clicking input type", () => {
    render(<AddUser />);
    const addressClick = screen.getByTestId("userAddress");
    act(() => {
      addressClick.click();
    });
  });
  test("eye icon click", () => {
    render(<AddUser />);
    const eyeClick = screen.getByTestId("eye_icon");
    act(() => {
      eyeClick.click();
    });
  });
  test("signup button", () => {
    render(<AddUser />);
    const button = screen.getByTestId("signin-btn");
    fireEvent.click(button);
  });
});
