import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './RentBooks.css'
import lmsUrl from "../../AxiosURL";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RentBook =()=>{
    const {id}=useParams();
    const [book,setBook]=useState(null);
    const [rentDays,setRentDays]=useState();
    const[booksCount, setBookCount] = useState(0)
    
    
    useEffect(()=>{
        lmsUrl.get('books/'+id) .then((res)=>{
            setBook(res.data)
        
        }).catch((err)=>{console.log(err)});
    },[]);

    const rentBook=(e)=>{
        var  today =new Date();
        var returnDate=new Date();
        returnDate.setDate(today.getDate()+parseInt(rentDays))
        e.preventDefault();
        book.quantity=book.quantity-booksCount;
        var myRent={"bookTitle":book.title,"bookId":book.id,"rentDays":rentDays,"rentDate":today.toISOString(),"returnDate":returnDate.toISOString(),"userId":sessionStorage.getItem("id"),"rentExpired":false,"userName":sessionStorage.getItem("userName"),"borrowedQuantity":booksCount};
        lmsUrl.post('rented-books',myRent).then((res)=>{lmsUrl.put('books/'+id,book)})
        .then(()=>{successfullyRented()})
        .then(()=>{setRentDays('');setBookCount(0)})
        .catch((err)=>{unabletoRent()})
        
    }
    function successfullyRented(){
        toast.success('Successfully Rented',{
            position:toast.POSITION.TOP_RIGHT
        })
    }
    function unabletoRent(){
        toast.error('unable to rent',{
            position:toast.POSITION.TOP_RIGHT
        })
    }
    return(

        <div className="card">
            <div className="container">
                
             {book&&<h5>Book Title:{book.title}</h5>}
             {book&&<h5>Book Author:{book.author}</h5>}
             {book&&<h5>Book Category:{book.categories}</h5>}
             {book&&<h5>Book Year:{book.year}</h5>}
             {book&&<p><strong>Book Description: </strong>{book.description}</p>}
             {book&&<h5>Book Edition:{book.edition}</h5>}
             {book&&<h5>Book Language:{book.language}</h5>}
             {book&&<h5>Book pages:{book.pages}</h5>}
             {book&&<h5>No.of Available Books:{book.quantity}</h5>}
             <form onSubmit={rentBook}>
                <label>Number Of Days of Rent:</label>
                <input type="number" value={rentDays} min='1' max='10' onChange={(e)=>{setRentDays(e.target.value)}} />
                <br></br>
                <label>No of Books to borrow</label>
                <input type='number' value={booksCount} min='1' max={book && book.quantity}  onChange={(e)=>{setBookCount(e.target.value)}}/>
                <h5 style={{color:'red'}}>You can get rent maximum 10 days</h5>
                <button className="rent-btn" type="submit" >Rent</button>
             </form>
            </div>

        <ToastContainer/>
         </div>
        
    )
}
export default RentBook