import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginProtector from "./LoginProtector";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe('testcases for LoginProtected',()=>{
	render(<LoginProtector/>)
})