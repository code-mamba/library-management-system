import { useEffect, useState } from "react";
import BookList from "./BookList";

const Home = () => {
        const[books,setBooks]=useState(null);
        useEffect(()=>{
            fetch('http://localhost:8000/books').then((res)=>{
                return res.json();
            }).then((data)=>{
                setBooks(data);
                
            }).catch((err)=>{console.log(err)})
        },[]);
    return ( 
        <div className="home">
           {books&&<BookList books={books}/>}
        </div> 
    );
}
 
export default Home;