import axios from 'axios'
import{useNavigate} from 'react-router-dom'
import '../styles/BookList.css'
import Image from '../Assets/library.jpg'

const BookList = ({books,isAdmin,setBooks}) => {
const navigate = useNavigate()
    
 
const edit = (id) =>{
    navigate('/edit-books/'+id)
}

const deleteBook = (id)=>{
    axios.delete("http://localhost:8000/books/"+id).then(()=>{
        var newBooks=books.filter(book=>{return book.id!==id});
        setBooks(newBooks)
    }).catch(err=>console.log(err))
    // fetch("http://localhost:8000/books/"+id,{
    //     method:'DELETE'
    // }).then(()=>{
    //     var newBooks=books.filter(book=>{return book.id!==id});
    //     setBooks(newBooks)
    // }).catch(err=>console.log(err))
}
const rent =(id)=>{
    navigate('/rent-books/'+id)
    
}
    return ( 
        <div className="book-list">
            {
                
                books.map((book)=>{
                    return( 
                        <>
                        <nav className='container mt-5'>
                            <div className='card'>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <img title="the value" src = {Image} className='img-fluid'></img>
                                        </div>
                                        <div className='col-md-8 mb-3 ' >
                                            <h5 className='card-title mt-3'>Title:{book.title}</h5>
                                            <p>Categories: {book.categories}</p>
                                            <p>Author: {book.author}</p>
                                            <p>Description: {book.description}</p>
                                            <p>Year:{book.year}</p>
                                            <p>Availability: {book.available}</p>
                                            {isAdmin&&<button className='btn btn-primary' onClick={()=>{edit(book.id)}}>Edit</button>}
                                            {isAdmin&&<button className='btn btn-danger' onClick={()=>{deleteBook(book.id)}}>Delete</button>}
                                            {!isAdmin&&<button className='btn btn-success' onClick={()=>{rent(book.id)}}>Rent Book</button>}

                                        </div>
                                    </div>
                            </div>

                        </nav>
                        {/* {book.quantity&&<section className='container' >
                            <div className='card'key={book.id}>
                                <div className='card-image'>
                                
                                </div>   
                                
                                <h4>Booktitle:{book.title}</h4>
                                    <p>Category: {book.categories}</p>
                                    <p>{book.description}</p>
                                    <p>Author: {book.author}</p>
                                    <p>Quantity:{book.quantity}</p>
                                    <p>Year:{book.year}</p>
                                    <p>Availabilty: {book.available}</p>
                                    {isAdmin&&<button onClick={()=>{edit(book.id)}}>Edit</button>}
                         {isAdmin &&<button onClick={()=>{deleteBook(book.id)}}>Delete</button>}
                         {!isAdmin &&<button onClick={()=>rent(book.id)}>Rent</button>}

                                    
                            </div>
                        </section>} */}
                        </>
                    //    <>
                    //     <div className="card" key={book.id}>
                    //     <div className="container">
                    //     <h4 id='Title'><b>Booktitle: {book.title}</b></h4> 
                    //     <p>{book.categories}</p> 
                    //     <p>{book.description}</p>
                    //     <p>{book.author}</p>
                    //     <p>{book.quantity}</p>
                    //     <p>{book.Availability}</p>
                    //     <button>Read more</button>
                    //     {isAdmin&&<button onClick={()=>{edit(book.id)}}>Edit</button>}
                    //     {isAdmin &&<button onClick={()=>{deleteBook(book.id)}}>Delete</button>}
                    //     {!isAdmin &&<button onClick={()=>rent(book.id)}>Rent</button>}
                    //     </div>
                    //     </div>
                    //     </>


                   )
                })
            }
        </div>
     );
    }
export default BookList;