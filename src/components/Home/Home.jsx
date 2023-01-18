import { useEffect, useState } from "react";
import BookList from "../BookList/BookList";
import axios from "axios";
import './Home.css'


const Home = ({isAdmin}) => {
        const[books,setBooks]=useState(null); 
        const[searchTerm,setSearchTerm] = useState('')
        
        
        

        useEffect(()=>{
            axios.get('http://localhost:8000/books').then((res)=>{
                setBooks(res.data);
                {books&&books.filter((book)=>{
                    if(searchTerm == ""){
                      return book
                    }
                    else if(book.title.toLowerCase().includes(searchTerm.toLowerCase())){
                      return book;
                    }
                  }).map((book,key)=>{
                    return <div>{book.title} </div>
                  })}
             
                
            }).catch((err)=>{console.log(err)});
            // fetch('http://localhost:8000/books').then((res)=>{
            //     return res.json();
            // }).then((data)=>{
            //     setBooks(data);
                
            // }).catch((err)=>{console.log(err)})
        },[]);
    return ( 
        <div className="home" style={{backgroundColor:'#c8dcff'}}>
            <input type="text" placeholder="Search..." value={searchTerm} onChange={e=>{setSearchTerm(e.target.value)}} ></input>
           {books&&<BookList books={books} isAdmin={isAdmin} setBooks={setBooks}/>}
         
           
        </div> 
    );
}
 
export default Home;