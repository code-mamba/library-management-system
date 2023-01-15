import axios from 'axios'
import{useNavigate} from 'react-router-dom'
import './BookList.css'
import Image from '../../Assets/library.jpg'
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

}
const rent =(id)=>{
    navigate('/rent-books/'+id)
    
}
    return ( 
        <div className="book-list" style={{backgroundColor:'#c8dcff'}}>
            {
                
                books.map((book)=>{
                    return( 
                        <>
                        <nav className='container mt-5'>
                            <div className='card' style={{backgroundColor:'#e6e6e6'}}>
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
                                            <p>Volume:{book.volume}</p>
                                            <p>Availability: {book.available}</p>
                                            <p>Quantity:{book.quantity}</p>
                                            {isAdmin&&<button className='btn btn-primary' onClick={()=>{edit(book.id)}}>Edit</button>}
                                            {isAdmin&&<button className='btn btn-danger' onClick={()=>{deleteBook(book.id)}}>Delete</button>}
                                            {!isAdmin&&<button className='btn btn-success' onClick={()=>{rent(book.id)}}>Rent Book</button>}

                                        </div>
                                    </div>
                            </div>

                        </nav>
                
                        </>
                


                   )
                })
            }
        </div>
     );
    }
export default BookList;