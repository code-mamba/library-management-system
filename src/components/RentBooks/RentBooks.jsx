import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './RentBooks.css'
import lmsUrl from "../../AxiosURL";

const RentBook =()=>{
    const {id}=useParams();
    const [book,setBook]=useState(null);
    const [rentDays,setRentDays]=useState();
    const[booksCount, setBookCount] = useState(0)
    const navigate=useNavigate();
    
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
        
        setTimeout(()=>{lmsUrl.post('rented-books',myRent).then((res)=>{}).catch(err=>{console.log(err)})},1000)
        

         lmsUrl.put('books/'+id,book) .then((res)=>{
            navigate('/home')
        }).catch(err=>console.log(err));
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


         </div>
        
    )
}
export default RentBook