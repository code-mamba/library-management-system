/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import lmsUrl from "../../AxiosURL";
import RentList from "./RentList";

describe("RentList", () => {
  render(<RentList />);
  test("RentList", () => {
    var mock = new MockAdapter(lmsUrl);
    const data = {
      bookTitle: "BookTitle",
      bookId: "BookId",
      rentDays: "rentDays",
      rentDate: "rentDate",
      returnDate: "returnDate",
      userId: "userId",
      rentExpired: false,
      userName: "userName",
      borrowedQuantity: "BorrowedQuantity",
      id: "id",
    };
    mock.onGet("rented-list").reply(undefined, data);
    render(<RentList />);
  });
});   
