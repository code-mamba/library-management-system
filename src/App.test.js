/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store";

describe("render App", () => {
  const mockedUsedNavigate = jest.fn();
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
    Navigate: new (class {})(),
  }));
  test("render", () => {
    sessionStorage.setItem("userName", "Dhan");
    sessionStorage.setItem("id", "dh");
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App></App>
        </MemoryRouter>
      </Provider>
    );
    act(() => {
      screen.getByText("Logout").click();
    });
  });
});
