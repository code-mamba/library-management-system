import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './RentBooks.css'

const RentBook =()=>{
    const {id}=useParams();
    const [book,setBook]=useState(null);
    const [rentDays,setRentDays]=useState();
    const navigate=useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/books/'+id).then((res)=>{
            setBook(res.data);
        }).catch((err)=>{console.log(err)});
    },[]);
   
    const rentBook=(e)=>{
        var  today =new Date();
        var returnDate=new Date();
        returnDate.setDate(today.getDate()+parseInt(rentDays))
        e.preventDefault();
        book.quantity=book.quantity-1;
        var myRent={"bookTitle":book.title,"bookId":book.id,"rentDays":rentDays,"rentDate":today.toISOString(),"returnDate":returnDate.toISOString(),"userId":sessionStorage.getItem("id"),"rentExpired":false,"userName":sessionStorage.getItem("userName")};
        axios.post("http://localhost:8000/rented-books",myRent).then((res)=>{
        }).catch(err=>console.log(err));
        axios.put("http://localhost:8000/books/"+id,book).then((res)=>{
            navigate('/home')
        }).catch(err=>console.log(err));
    }

    return(

        <div className="card">
            <div className="container">
                
             {book&&<h3>Book Title:{book.title}</h3>}
             {book&&<h3>Book Author:{book.author}</h3>}
             {book&&<h3>Book Category:{book.categories}</h3>}
             {book&&<h3>Book Year:{book.year}</h3>}
             {book&&<h3>Book Description:{book.description}</h3>}
             {book&&<h3>Book Edition:{book.edition}</h3>}
             {book&&<h3>Book Language:{book.language}</h3>}
             {book&&<h3>Book pages:{book.pages}</h3>}
             {book&&<h3>No.of Available Books:{book.quantity}</h3>}
             <form onSubmit={rentBook}>
                <label>Number Of Days of Rent:</label>
                <input type="number" value={rentDays} onChange={(e)=>{setRentDays(e.target.value)}} />
                <button className="btn" type="submit">Rent</button>
             </form>
            </div>


         </div>
        
    )
}
export default RentBook