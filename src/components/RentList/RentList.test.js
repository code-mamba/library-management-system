/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import RentList from "./RentList";
import MockAdapter from "axios-mock-adapter";
import lmsUrl from "../../AxiosURL";

describe("rentList", () => {
  render(<RentList />);
  test("rentLiscomponent", () => {
    var mock = new MockAdapter(lmsUrl);
    const data = { response: 200 };
    mock.onGet("rented-books").reply(200, data);
    render(<RentList />);
  });
});
