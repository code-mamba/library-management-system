import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/AddBooks.css'
import axios from "axios";
const AddBooks = () => {
    const[bookName, setbookName] = useState('')
    const[bookType, setbookType] = useState('')
    const[description, setDesc] = useState('')
    const[author, setAuthor] = useState('')
    const[year,setbookYear] = useState('')
    const[Edition, setbookEdition] = useState('')
    const[language,setbookLanguage] = useState('')
    const[quantity, setQuantity] = useState(0)
    const[pages, setbookPages] = useState('')
    const[volume, setbookVolume] = useState('')
    const navigate = useNavigate()

    const addBooks = (e)=>{
        e.preventDefault()
        const book = {bookName,bookType,description,author, quantity,"isAvailable":true};
        axios.post('http://localhost:8000/books',book).then(res=>{res.navigate('/');}).catch((err)=>{console.log(err);})
        // fetch('http://localhost:8000/books',{
        //     method:'POST',
        //     headers:{'Content-Type':'application/json'},
        //     body:JSON.stringify(books)
        // }).then(navigate('/home')).catch((err)=>{console.log(err)})
    }
    return ( 
             <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Add Books</h2>
          <div className="text-center mb-5 text-dark">LMS</div>
          <div className="card my-5">
  
            <form className="card-body cardbody-color p-lg-5" onSubmit={addBooks}>
  
  
              <div className="mb-3">

                <label>Add Book Name</label>
                <input type="text" className="form-control" id="bookName"
    
            placeholder="Add Book Name" value={bookName} onChange={e=>{setbookName(e.target.value)}}/>
              </div>
              <div className="mb-3">
                <label>Add Book Volume</label>
                  <input type="text" className = 'form-control' id ="addAuthor" placeholder="Add Author"
                  value={volume} onChange={(e)=>{setbookVolume(e.target.value)}} ></input>
              </div>
              <div className="mb-3">
                <label>Add Author Name</label>
                  <input type="text" className = 'form-control' id ="addAuthor" placeholder="Add Author"
                  value={author} onChange={(e)=>{setAuthor(e.target.value)}} ></input>
              </div>
              <div className="mb-3">
                <label>Add Book Type</label>
                <input type="text" className="form-control" id="addCategory" placeholder="Add Book Category"value={bookType}
                onChange={(e)=>{setbookType(e.target.value)}}/>
              </div>
              <div className="mb-3">
                <label>Add Year</label>
                <input type="text" className="form-control" id="editYear" placeholder="Add Book Year"value={year}
                onChange={(e)=>{setbookYear(e.target.value)}}/>
              </div>
              <div className="mb-3">
                <label>Add Book Edition</label>
                <input type="text" className="form-control" id="addEdition" placeholder="Add Book Edition"value={Edition}
                onChange={(e)=>{setbookEdition(e.target.value)}}/>
              </div>
              <div className="mb-3">
                <label>Add Book Language</label>
                <input type="text" className="form-control" id="AddLanguage" placeholder="Add Book Language"value={language}
                onChange={(e)=>{setbookLanguage(e.target.value)}}/>
              </div>
              <div className="mb-3">
                <label>Add Description</label>
                <textarea className="form-control" id="editDescription" placeholder="Add Book Description"value={description}
                onChange={(e)=>{setDesc(e.target.value)}}/>
              </div>
              <div className="mb-3">
                <label>Add Book Pages</label>
                <input type="number" className="form-control" id="AddPages" placeholder="Add Book Pages"value={pages}
                onChange={(e)=>{setbookPages(e.target.value)}}/>
              </div>
              <div className="mb-3">
                <label>Add Quantity</label>
                <input className="form-control" id="addQuantity" type="number" placeholder="Add Book Quantity"value={quantity}
                onChange={(e)=>{setQuantity(e.target.value)}}/>
              </div>
              <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Add Book</button></div>
              
            </form>
          </div>

        </div>
      </div>
    </div>

        // <>
        // <h1>Add User</h1>
        // <div className="add-books">
            
        //     <form className="addBookContainer" onSubmit={addBooks}>
        //         <div className="input-container">
        //         <label htmlFor="bookName" >Book Name</label>
        //         <input type="text" required value={bookName} onChange={(e)=>setbookName(e.target.value)}></input>
                
        //         <br></br>
        //         <label htmlFor="Auth">Author name</label>
        //         <input type="text" required value={author} onChange={(e)=>setAuthor(e.target.value)}></input>
        //         <br></br>
        //         <label htmlFor="bookType" required>Type</label>
        //         <input type="text" required value={bookType} onChange={(e)=>setbookType(e.target.value)}></input>
        //         <br></br>
        //         <label htmlFor="desc">Book Description</label>
        //         <input type="text" required value={description} onChange = {(e)=>setDesc(e.target.value)}></input>
        //         <br></br>
        //         <label>Book quantity</label>
        //         <input type="number" required value={quantity} onChange={(e)=>setQuantity(e.target.value)}></input>
        //         </div>
        //         <button className = "AddBookBut"type="submit">submit</button>
        //     </form>
        // </div>
        // </>
    );
}
 
export default AddBooks;