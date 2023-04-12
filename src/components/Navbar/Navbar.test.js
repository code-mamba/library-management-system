/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";
describe("render navbar component", () => {
  it("render navbar component", () => {
    render(<Navbar />);
  });
  test("render navbar", () => {
    render(<Navbar isAdmin={true} isloggedIn={true} />);
  });
  test("render navbar", () => {
    render(<Navbar isAdmin={false} isloggedIn={true} />);
  });
  test("render navbar", () => {
    render(<Navbar isAdmin={true} isloggedIn={false} />);
  });
  test("render navbar", () => {
    render(<Navbar isAdmin={false} isloggedIn={false} />);
  });
});
