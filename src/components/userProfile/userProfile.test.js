/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import lmsUrl from "../../AxiosURL";

import UserProfile from "./userProfile";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe("render component", () => {
  test("Edit Profile Button", () => {
    var mock = new MockAdapter(lmsUrl);
    const data = {
      userName: "Name",
      userEmail: "email@gmail.com",
      userPassword: "Password@123",
      userMobile: "98",
      userAddress: "d",
      isAdmin: true,
      id: "2",
    };
    mock.onGet("users/NaN").reply(200, data);
    render(<UserProfile />);
    const button = screen.getByTestId("editProfile-btn");
    fireEvent.click(button);
  });
  test("Mocking axios get", () => {
    var mock = new MockAdapter(lmsUrl);
    const data = {
      userName: "Name",
      userEmail: "email@gmail.com",
      userPassword: "Password@123",
      userMobile: "98",
      userAddress: "d",
      isAdmin: true,
      id: "2",
    };
    mock.onGet("users/NaN").reply(200, data);
    render(<UserProfile />);
  });
  test("Mocking get error", () => {
    var mock = new MockAdapter(lmsUrl);
    const data = {};
    mock.onGet("users/NaN").reply(404, data);
    render(<UserProfile />);
  });
});    
