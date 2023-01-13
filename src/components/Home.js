import { useEffect, useState } from "react";
import BookList from "./BookList";
import axios from "axios";
const Home = ({isAdmin}) => {
        const[books,setBooks]=useState(null);
        useEffect(()=>{
            axios.get('http://localhost:8000/books').then((res)=>{
                setBooks(res.data);
            }).catch((err)=>{console.log(err)});
            // fetch('http://localhost:8000/books').then((res)=>{
            //     return res.json();
            // }).then((data)=>{
            //     setBooks(data);
                
            // }).catch((err)=>{console.log(err)})
        },[]);
    return ( 
        <div className="home">
           {books&&<BookList books={books} isAdmin={isAdmin} setBooks={setBooks}/>}
        </div> 
    );
}
 
export default Home;