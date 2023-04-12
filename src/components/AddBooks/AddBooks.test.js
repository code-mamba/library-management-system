/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddBooks from "./AddBooks";
import MockAdapter from "axios-mock-adapter";
import lmsUrl from "../../AxiosURL";
import { Provider } from "react-redux";
import store from "../../redux/store";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  Navigate: new (class {})(),
}));
describe("<AddBooks/>", () => {
  test("testing  value", () => {
    var mock = new MockAdapter(lmsUrl);
    const data = { response: 200 };
    const book = {
      title: "",
      author: "",
      categories: "q",
      volume: "",
      year: "",
      edition: "",
      language: "",
      pages: "",
      description: "",
      quantity: "",
      image: "",
    };
    mock.onPost("books", book).reply(200, data);
    mock.onGet("books").reply(200, {});
    render(
      <Provider store={store}>
        <AddBooks />
      </Provider>
    );
    const categoryInp = screen.getByTestId("addCategory");
    fireEvent.change(categoryInp, { target: { value: "q" } });
    expect(categoryInp.value).toBe("q");
    const button = screen.getByTestId("addBook-btn");
    fireEvent.click(button);
  });
});
