/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import RentList from "./RentList";
import MockAdapter from "axios-mock-adapter";
import lmsUrl from "../../AxiosURL";

describe("<RentList/>", () => {
  test("render rentlist", () => {
    render(<RentList />);
  });
  test("Mocking axios get", () => {
    var mock = new MockAdapter(lmsUrl);
    const data = { response: 200 };
    mock.onGet("rented-books").reply(200, data);
    render(<RentList />);
  });
  test("Mocking axios get", () => {
    var mock = new MockAdapter(lmsUrl);
    const data = { response: 200 };
    mock.onGet("rented-books").reply(400, data);
    render(<RentList />);
  });
});
