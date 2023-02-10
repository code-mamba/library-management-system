import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function LoginSucessMessage(){
		return toast.success('Successfully Logged in ',{
			position:toast.POSITION.TOP_RIGHT
		})
	}
export function LoginErrorMessage(){
	return toast.error('Unable to Login credential error',{
		position: toast.POSITION.TOP_RIGHT
	})
}
export function LoginServerError() {
    toast.error("Something Went Wrong Server Error :(", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
export function SuccessfullySignedin(){
	toast.success('SuccessFully Signing in',{
		position:toast.POSITION.TOP_RIGHT
	})
}
export function SuccessfullyBookAdded(){
	toast.success('Book Added Successfully',{
		position:toast.POSITION.TOP_RIGHT
	})
}
export function DeleteBook(){
	toast.success('Book Deleted Dhanush',{
		position:toast.POSITION.TOP_RIGHT
	})
}
export function SuccessfullyEdited(){
	toast.success('Book updated dhanush',{
	  position:toast.POSITION.TOP_RIGHT
	})
  }
export function UnableToEdit(){
	toast.error('unable to edit dhanush',{
	 position:toast.POSITION.TOP_RIGHT
	})
 }
 export function ReturnedSuccessfully(){
	toast.success('Book Returned Successfully',{
		position: toast.POSITION.TOP_RIGHT
	})
 }
 export function ReturnError(){
	toast.success('unable to return',{
		position:toast.POSITION.TOP_RIGHT
	})
 }
//  export function successfullyRented(){
// 	toast.success('Successfully Rented dhanush',{
// 		position:toast.POSITION.TOP_RIGHT
// 	})
// }
// export function unabletoRent(){
// 	toast.error('unable to rent dhanush',{
// 		position:toast.POSITION.TOP_RIGHT
// 	})
// }