/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import lmsUrl from "../../AxiosURL";
import NotifyCustomer from "./NotifyCustomer";
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  Navigate: new (class {})(),
}));

describe("render Notify customer", () => {
  test("onchange", () => {
    render(<NotifyCustomer />);
    const Message = screen.getByTestId("message");
    fireEvent.change(Message, { target: { value: "d" } });
  });
  //   test("post", () => {
  //     const mail = {
  //       userId: "userId",
  //       from: "from",
  //       date: "Date",
  //       message: "message",
  //     };
  //     const response = lmsUrl.post(mail);
  //     expect(response.status).toBe(undefined);
  //   });
  //   test("signing in", () => {
  //     const user = {
  //       userName: "username",
  //       userEmail: "dhanush@gmail.com",
  //       userPassword: "Password@123",
  //       userMobile: "1234567890",
  //       userAddress: "userAddress",
  //       isAdmin: false,
  //     };
  //     const response = myApi.Signingin(user);
  //     expect(response.status).toBe(undefined);
  //   });
});
