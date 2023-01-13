import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/AddBooks.css'
import axios from "axios";
const AddBooks = () => {
    const[bookName, setbookName] = useState('')
    const[bookType, setbookType] = useState('')
    const[description, setDesc] = useState('')
    const[author, setAuthor] = useState('')
    const[quantity, setQuantity] = useState(0)
    const navigate = useNavigate()

    const addBooks = (e)=>{
        e.preventDefault()
        const book = {bookName,bookType,description,author, quantity,"isAvailable":true};
        axios.post('http://localhost:8000/books',book).then((res)=>{navigate('/');}).catch((err)=>{console.log(err);})
        // fetch('http://localhost:8000/books',{
        //     method:'POST',
        //     headers:{'Content-Type':'application/json'},
        //     body:JSON.stringify(books)
        // }).then(navigate('/home')).catch((err)=>{console.log(err)})
    }
    return ( 
        <>
        <h1>Add User</h1>
        <div className="add-books">
            
            <form className="addBookContainer" onSubmit={addBooks}>
                <div className="input-container">
                <label htmlFor="bookName" >Book Name</label>
                <input type="text" required value={bookName} onChange={(e)=>setbookName(e.target.value)}></input>
                
                <br></br>
                <label htmlFor="Auth">Author name</label>
                <input type="text" required value={author} onChange={(e)=>setAuthor(e.target.value)}></input>
                <br></br>
                <label htmlFor="bookType" required>Type</label>
                <input type="text" required value={bookType} onChange={(e)=>setbookType(e.target.value)}></input>
                <br></br>
                <label htmlFor="desc">Book Description</label>
                <input type="text" required value={description} onChange = {(e)=>setDesc(e.target.value)}></input>
                <br></br>
                <label>Book quantity</label>
                <input type="number" required value={quantity} onChange={(e)=>setQuantity(e.target.value)}></input>
                </div>
                <button className = "AddBookBut"type="submit">submit</button>
            </form>
        </div>
        </>
    );
}
 
export default AddBooks;