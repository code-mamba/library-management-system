import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function LoginSucessMessage() {
  return toast.success("Successfully Logged in ", {
    position: toast.POSITION.TOP_RIGHT,
  });
}
export function LoginErrorMessage() {
  return toast.error("Unable to Login credential error", {
    position: toast.POSITION.TOP_RIGHT,
  });
}
export function LoginServerError() {
  toast.error("Something Went Wrong Server Error :(", {
    position: toast.POSITION.TOP_RIGHT,
  });
}
export function SuccessfullySignedin() {
  toast.success("SuccessFully Signing in", {
    position: toast.POSITION.TOP_RIGHT,
  });
}
export function UnableToSignup() {
  toast.error("Unable to Sinup", {
    position: toast.POSITION.TOP_RIGHT,
  });
}
export function SuccessfullyBookAdded() {
  toast.success("Book Added Successfully", {
    position: toast.POSITION.TOP_RIGHT,
  });
}
export function UnableToAddBooK() {
  toast.error("Unable To Add Book");
}
export function DeleteBook() {
  toast.success("Book Deleted", {
    position: toast.POSITION.TOP_RIGHT,
  });
}
export function unableToDeleteBook() {
  toast.error("unable to delete the book", {
    position: toast.POSITION.TOP_RIGHT,
  });
}
export function SuccessfullyEdited() {
  toast.success("Book updated", {
    position: toast.POSITION.TOP_RIGHT,
  });
}
export function UnableToEdit() {
  toast.error("unable to edit", {
    position: toast.POSITION.TOP_RIGHT,
  });
}
export function UnableToEditError() {
  toast.error("Unable to edit server error", {
    position: toast.POSITION.TOP_RIGHT,
  });
}
export function ReturnedSuccessfully() {
  toast.success("Book Returned Successfully", {
    position: toast.POSITION.TOP_RIGHT,
  });
}
export function ReturnError() {
  toast.success("unable to return", {
    position: toast.POSITION.TOP_RIGHT,
  });
}
export function successfullyRented() {
  toast.success("Successfully Rented", {
    position: toast.POSITION.TOP_RIGHT,
  });
}
export function unabletoRent() {
  toast.error("unable to rent", {
    position: toast.POSITION.TOP_RIGHT,
  });
}
export function ProfileUpdated() {
  toast.success("Profile Updated Successfully", {
    position: toast.POSITION.TOP_RIGHT,
  });
}
export function ProfileUpdateErr() {
  toast.error("Unable to update profile", {
    position: toast.POSITION.TOP_RIGHT,
  });
}
