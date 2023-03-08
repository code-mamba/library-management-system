/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginProtector from "./LoginProtector";
import Login from "../Login/Login";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("testcases for LoginProtected", () => {
  test('render LoginProtector',()=>{
    render(<LoginProtector children={<Login/>} />);
    sessionStorage.setItem("userName","dhgfa")
    
  
    render(<LoginProtector children={<Login/>} />);
  })
  
});
