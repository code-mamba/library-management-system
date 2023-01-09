import{useNavigate} from 'react-router-dom'
import EditBook from './EditBook'

const BookList = ({books}) => {
    
    console.log("hi",books)

 
const Edit = () =>{
    const navigate = useNavigate()
    navigate('/edit-books')
}
    return ( 
        <div className="book-list">
            {
                
                books.map((book)=>{
                    return( 
                        <div className="book">
                    <ul>
                        <li>Title : {book.bookName}</li>
                        <li>Category : {book.bookType}</li>
                        <li>Description:{book.description}</li>
                        <li>Author:{book.Author}</li>
                        <li>quantity:{book.quantity}</li>
                        <li>Availability : {book.available}</li>
                        
            
                    </ul>
                    <button onClick={Edit}>Edit</button>
                    <button>Delete</button>
                    <hr></hr>
                </div>
                   )
                })
            }
        </div>
     );
    }
export default BookList;