import axios from "axios"
import { useEffect, useState } from "react"

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
                <section className="container">
                    <h4>BookTitle: {book.bookTitle}</h4>
                    <h3>UserName: {book.userName}</h3>
                    <p>RentDate: {book.rentDate.slice(0,10)}</p>
                    <p>ReturnDate: {book.returnDate.slice(0,10)}</p>

                </section>
            )
           })}
        </div>
    
    )
}
export default RentList