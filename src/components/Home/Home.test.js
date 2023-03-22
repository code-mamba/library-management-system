/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Home from "./Home";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  Navigate: new (class {})(),
}));

describe("HomeComponent", () => {
  test("HomeComponent", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const search = screen.getByTestId("search");
    fireEvent.change(search, { target: { value: "q" } });
    expect(search.value).toBe("q");
  });
});
 