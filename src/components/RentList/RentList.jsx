import axios from "axios";
import { useEffect, useState } from "react";
import './RentList.css'

const RentList = ()=>{
    const[rentList, setRentList] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/rented-books')
        .then((res)=>{
            setRentList(res.data)
        }).catch((err)=>{console.log(err)})
    },
    [])
    return(
        <div className="rentedList">
            
           {rentList&&
           rentList.map((book)=>{
            return(
            
            <div class="card1" >
            <div className="card-body1">
              <h4 className="card-title">{book.bookTitle}</h4>
              <h6 className="card-subtitle mb-2 text-muted">UserName: {book.userName}</h6>
              <p className="card-text">RentDate: {book.rentDate.slice(0,10)}</p>
              <p className="card-text">ReturnDate: {book.returnDate.slice(0,10)}</p>
              
            </div>
          </div>
          )
           })}
        </div>
    
    )
}
export default RentList
 // <section className="container">
                //     <h4>BookTitle: {book.bookTitle}</h4>
                //     <h3>UserName: {book.userName}</h3>
                //     <p>RentDate: {book.rentDate.slice(0,10)}</p>
                //     <p>ReturnDate: {book.returnDate.slice(0,10)}</p>

                // </section>