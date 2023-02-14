import { useEffect, useState } from "react";
import BookList from "../BookList/BookList";
import { useNavigate } from "react-router-dom";
import './Home.css'
import lmsUrl from "../../AxiosURL";

const navigate = useNavigate
const Home = ({isAdmin}) => {
        const[books,setBooks]=useState(null); 
        const[query,setQuery] = useState("")
        
const Searching = (e) =>{
      setQuery(e.target.value)
      console.log(query)
      var SearchBooks = books.filter((book)=>{
        if(query == ""){
          return books
        }
        else if(book.title.toLowerCase().includes(query.toLowerCase())){
          return book
        }
      })
      setBooks(SearchBooks)
 }       
        
const categoryChange = (e) =>{
  
  lmsUrl.get('books').then((res)=>{
    var FilteredBooks = res.data.filter((book)=>{return book.categories == e.target.value})
    setBooks(FilteredBooks)
    
  })
 }        
          useEffect(()=>{
            lmsUrl.get('books') .then((res)=>{
                setBooks(res.data);
                 }).catch((err)=>{navigate('/fetch-err')});
      
        },[query==""]);

        
    return ( 
        <div className="home"  style={{backgroundColor:'#c8dcff'}}>
          <div className="boxContainer">
            <div className="elementsContainer">
          <input type= 'text' className = "search" placeholder = "Search Books..." onChange={e=>Searching(e)}  ></input>
          {/* <svg className="searchIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 18 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg> */}
          </div>
          </div>
                   
            
          <select className="Select-Button" onChange={categoryChange}>
            
            <option value="technologies">Technologies</option>
            <option value="self-help">Self help</option>
            <option value = "adventure">Adventure</option>
            <option value="Romance">Romance</option>
          </select>
        
          

          {books&&<BookList books={books} isAdmin={isAdmin} setBooks={setBooks}/>}
         
           
        </div> 
    );
}
 
export default Home;