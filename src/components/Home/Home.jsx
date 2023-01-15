import { useEffect, useState } from "react";
import BookList from "../BookList/BookList";
import axios from "axios";
import './Home.css'
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
        <div className="home" style={{backgroundColor:'#c8dcff'}}>
           {books&&<BookList books={books} isAdmin={isAdmin} setBooks={setBooks}/>}
        </div> 
    );
}
 
export default Home;