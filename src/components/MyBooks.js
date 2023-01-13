import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyBooks = () => {
    const navigate=useNavigate();
    const userId = sessionStorage.getItem("id");
    const [rentedBooks, setRentedBooks] = useState();
    const today=new Date();

    const returnBook =(id, bookId)=>{
            axios.delete('http://localhost:8000/rented-books/'+id).then(()=>{axios.get('http://localhost:8000/books/'+bookId).then((res)=>{res.data.quantity=res.data.quantity+1;axios.put('http://localhost:8000/books/'+bookId,res.data).then((res)=>{navigate('/home')})})});
    }
    useEffect(()=>{
        axios.get('http://localhost:8000/rented-books?userId='+userId)
        .then(res=>{res.data.forEach((book)=>{
            var returnDay=new Date(book.returnDate);
            if(returnDay<today){
                book.rentExpired=true;
            }
            });
            setRentedBooks(res.data);
        })
        .catch(err=>console.log(err));
    },[])
    return ( 
        <div className="mybooks">
           {rentedBooks&&
            rentedBooks.map((book)=>{
                return( 
                    <section className='container'>
                        <div className='card'>
                             
                            <h4>Booktitle:{book.bookTitle}</h4>
                            <p>Return Date: {book.returnDate.slice(0,10)}</p>
                            {book.rentExpired&&<p className="text-danger">Rent Expired</p>}
                            <button onClick={()=>{returnBook(book.id,book.bookId)}}>Return Book</button>
                            </div>
                    </section>
                )
            })
           }                     
        </div> 
    
    );
}
 
export default MyBooks;