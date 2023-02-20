/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import EditBook from "./EditBook";
import MockAdapter from "axios-mock-adapter";
import { act } from "react-dom/test-utils";
import lmsUrl from "../../AxiosURL";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe("<EditBooks/>", () => {
  test("book name input value", () => {
    render(<EditBook />);
    const bookTitle = screen.getByTestId("bookTitle");
    fireEvent.change(bookTitle, { target: { value: "q" } });
    expect(bookTitle.value).toBe("q");
  });

  test("book author name value", () => {
    render(<EditBook />);
    const bookAuthor = screen.getByTestId("bookAuthor");
    fireEvent.change(bookAuthor, { target: { value: "q" } });
    expect(bookAuthor.value).toBe("q");
  });
  test("book author name value", () => {
    render(<EditBook />);
    const bookCategory = screen.getByTestId("bookCategory");
    fireEvent.change(bookCategory, { target: { value: "q" } });
    expect(bookCategory.value).toBe("q");
  });
  test("book category value", () => {
    render(<EditBook />);
    const bookCategory = screen.getByTestId("bookCategory");
    fireEvent.change(bookCategory, { target: { value: "q" } });
    expect(bookCategory.value).toBe("q");
  });
  test("book year value", () => {
    render(<EditBook />);
    const bookYear = screen.getByTestId("bookYear");
    fireEvent.change(bookYear, { target: { value: 2000 } });
    expect(bookYear.value).toBe("2000");
  });
  test("Mocking axios get", () => {
    var mock = new MockAdapter(lmsUrl);
    const data = { response: 200 };
    mock.onGet("books/undefined").reply(200, data);
    render(<EditBook />);
    const button = screen.getByTestId("editBook-btn");
    act(() => {
      fireEvent.click(button);
    });
  });
  test("Mocking axios get catch", async () => {
    var mock = new MockAdapter(lmsUrl);
    const data = {};
    mock.onGet("books/undefined").reply(404, data);
    render(<EditBook />);
    const button = screen.getByTestId("editBook-btn");
    await act(async () => {
      fireEvent.click(button);
    });
  });
  test("book Edition value", () => {
    render(<EditBook />);
    const bookEdition = screen.getByTestId("bookEdition");
    fireEvent.change(bookEdition, { target: { value: "paperback" } });
    expect(bookEdition.value).toBe("paperback");
  });
  test("book language value", () => {
    render(<EditBook />);
    const bookLang = screen.getByTestId("bookLang");
    fireEvent.change(bookLang, { target: { value: "eng" } });
    expect(bookLang.value).toBe("eng");
  });
  test("book volume value", () => {
    render(<EditBook />);
    const bookVolume = screen.getByTestId("bookVolume");
    fireEvent.change(bookVolume, { target: { value: "1" } });
    expect(bookVolume.value).toBe("1");
  });
  test("book pages value", () => {
    render(<EditBook />);
    const bookPages = screen.getByTestId("bookpages");
    fireEvent.change(bookPages, { target: { value: 300 } });
    expect(bookPages.value).toBe("300");
  });
  test("book description value", () => {
    render(<EditBook />);
    const bookDesc = screen.getByTestId("bookDesc");
    fireEvent.change(bookDesc, { target: { value: 300 } });
    expect(bookDesc.value).toBe("300");
  });
  test("book quantity value", () => {
    render(<EditBook />);
    const bookQuant = screen.getByTestId("bookQuant");
    fireEvent.change(bookQuant, { target: { value: 300 } });
    expect(bookQuant.value).toBe("300");
  });
  test("book Image value", () => {
    render(<EditBook />);
    const bookImg = screen.getByTestId("bookImg");
    fireEvent.change(bookImg, { target: { value: "d" } });
    expect(bookImg.value).toBe("d");
  });
  test("Edit button", () => {
    render(<EditBook />);
    const button = screen.getByTestId("editBook-btn");
    fireEvent.click(button);
  });
});
