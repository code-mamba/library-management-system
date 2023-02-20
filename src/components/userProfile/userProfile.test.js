/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";

import UserProfile from "./userProfile";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe("render component", () => {
  test("render component", () => {
    render(<UserProfile />);
  });
  test("Edit Profile Button", () => {
    render(<UserProfile />);
    const button = screen.getByTestId("editProfile-btn");
    fireEvent.click(button);
  });
});
