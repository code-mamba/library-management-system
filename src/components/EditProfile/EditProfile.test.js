/* eslint-disable no-undef */
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import EditProfile from "./EditProfile";
import MockAdapter from "axios-mock-adapter";
import lmsUrl from "../../AxiosURL";

describe("<EditProfile>", () => {
  test("setusername", () => {
    render(<EditProfile />);
    const userName = screen.getByTestId("userName");
    fireEvent.change(userName, { target: { value: "q" } });
    expect(userName.value).toBe("q");
  });
  test("setNewPassword", () => {
    render(<EditProfile />);
    const newPassword = screen.getByTestId("newPassword");
    fireEvent.change(newPassword, { target: { value: "q" } });
    expect(newPassword.value).toBe("q");
  });
  test("setConfirmPassword", () => {
    render(<EditProfile />);
    const confPassword = screen.getByTestId("confPassword");
    fireEvent.change(confPassword, { target: { value: "q" } });
    expect(confPassword.value).toBe("q");
  });
  test("clicking new password input type", () => {
    render(<EditProfile />);

    const newPasswordClick = screen.getByTestId("newPassword");

    act(() => {
      newPasswordClick.click();
    });
  });
  test("clicking conf password input type", () => {
    render(<EditProfile />);

    const confPasswordClick = screen.getByTestId("confPassword");

    act(() => {
      confPasswordClick.click();
    });
  });
  test("Save change button", () => {
    render(<EditProfile />);
    const button = screen.getByTestId("submitChanges");
    fireEvent.click(button);
  });
  test("Mocking axios get", () => {
    var mock = new MockAdapter(lmsUrl);
    const data = { response: 200 };
    mock.onGet("users/undefined").reply(200, data);
    render(<EditProfile />);
  });
  test("new password and confirm password validation", () => {
    render(<EditProfile />);

    const button = screen.getByTestId("submitChanges");
    fireEvent.click(button);
    const newPassword = screen.getByTestId("newPassword");
    fireEvent.change(newPassword, { target: { value: "Password@123" } });
    fireEvent.click(button);
    const confPassword = screen.getByTestId("confPassword");
    fireEvent.change(confPassword, { target: { value: "Password@123" } });
    fireEvent.click(button);
  });   
});
test("setUserPassword setUserAddress", async () => {
  render(<EditProfile />);
  const userMobile = screen.getByTestId("userMobile");
  fireEvent.change(userMobile, { target: { value: "9" } });
  expect(userMobile.value).toBe("9");
  const userAddress = screen.getByTestId("userAddress");
  fireEvent.change(userAddress, { target: { value: "d" } });
  expect(userAddress.value).toBe("d");
  console.log(userAddress);
  act(() => {});
});
