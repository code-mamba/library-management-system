/* eslint-disable no-undef */
import { render } from "@testing-library/react";

import LoginProtector from "./LoginProtector";
import Login from "../Login/Login";
import { MemoryRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  Navigate: new (class {})(),
}));

describe("testcases for LoginProtected", () => {
  test("render LoginProtector", () => {
    render(
      <MemoryRouter>
        <LoginProtector>
          <Login />
        </LoginProtector>
      </MemoryRouter>
    );
    sessionStorage.setItem("userName", "d");

    render(
      <MemoryRouter>
        <LoginProtector> 
          <Login />
        </LoginProtector>
      </MemoryRouter>
    );
  });
});
