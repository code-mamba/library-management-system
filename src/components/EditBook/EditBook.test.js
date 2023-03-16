/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import EditBook from "./EditBook";
import MockAdapter from "axios-mock-adapter";
import lmsUrl from "../../AxiosURL";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { MemoryRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();

describe("Edit component", () => {
  test("render component", () => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockedUsedNavigate,
      Navigate: new (class {})(),
    }));
    render(
      <MemoryRouter>
        <Provider store={store}>
          <EditBook />
        </Provider>
      </MemoryRouter>
    );
  });
  test("EditBooks", () => {
    var mock = new MockAdapter(lmsUrl);
    const data = { response: 200 };
    mock.onGet("books/undefined").reply(200, data);
    render(
      <MemoryRouter>
        <Provider store={store}>
          <EditBook />
        </Provider>
      </MemoryRouter>
    );
    const categoryInp = screen.getByTestId("addCategory");
    fireEvent.change(categoryInp, { target: { value: "q" } });
    expect(categoryInp.value).toBe("q");
  });
});
