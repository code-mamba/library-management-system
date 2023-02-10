import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import './EditBook.css'
import lmsUrl from "../../AxiosURL";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SuccessfullyEdited, UnableToEdit } from "../../Toastify"; 

const EditBook = ()=>{
    const[title, setTitle] = useState()
    const[author, setAuthor]= useState()
    const[categories, setCategory] = useState()
    const[year, setYear] = useState()
    const[edition, setEdition] = useState()
    const[language, setLanguage] = useState()
    const[pages,setPages] = useState()
    const[description,setDesc] = useState();
    const[quantity,setQuantity]=useState();
    const[available,setAvailable]=useState();
    const[image, setImage] = useState();
    const[volume, setVolume] = useState();
    const navigate =useNavigate();
    const {id} =useParams();
    useEffect(()=>{
        lmsUrl.get('books/'+id).then((res)=>{
            setTitle(res.data.title);
            setAuthor(res.data.author);
            setCategory(res.data.categories);
            setYear(res.data.year);
            setEdition(res.data.edition);
            setDesc(res.data.description);
            setLanguage(res.data.language);
            setPages(res.data.pages);
            setQuantity(res.data.quantity);
            setVolume(res.data.volume);
            setImage(res.data.image)
            setAvailable(res.data.available)
        }).catch((err)=>{console.log(err)});

    },[]);
    const editBook=(e)=>{
        const book = {title,author,categories,year,edition,language,pages,description,available,image,quantity}
        e.preventDefault();
        lmsUrl.put('books/'+id,book).then(()=>{SuccessfullyEdited()}).catch((err)=>{UnableToEdit()})

    }


    return(
        <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Edit Books</h2>
          <div className="text-center mb-5 text-dark">LMS</div>
          <div className="card my-5">
  
            <form className="card-body cardbody-color p-lg-5" onSubmit={editBook}>
  
  
              <div className="mb-3">

                <label>Edit Book Name</label>
                <input type="text" className="form-control" id="bookName"
    
            placeholder="Edit Book Name" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
              </div>
              <div className="mb-3">
                <label>Edit Author Name</label>
                  <input type="text" className = 'form-control' id ="editAuthor" placeholder="Edit Author"
                  value={author} onChange={(e)=>{setAuthor(e.target.value)}} ></input>
              </div>
              <div className="mb-3">
                <label>Edit Book Type</label>
                <input type="text" className="form-control" id="editCategory" placeholder="Edit Book Category"value={categories}
                onChange={(e)=>{setCategory(e.target.value)}}/>
              </div>
              <div className="mb-3">
                <label>Edit Year</label>
                <input type="number" className="form-control" id="editYear" placeholder="Edit Book Year"value={year}
                onChange={(e)=>{setYear(e.target.value) }} min='1'/>
              </div>
              <div className="mb-3">
                <label>Edit Book Edition</label>
                <input type="text" className="form-control" id="editEdition" placeholder="Edit Book Edition"value={edition}
                onChange={(e)=>{setEdition(e.target.value)}}/>
              </div>
              <div className="mb-3">
                <label>Edit Book Language</label>
                <input type="text" className="form-control" id="editEdition" placeholder="Edit Book Language"value={language}
                onChange={(e)=>{setLanguage(e.target.value)}}/>
              </div>
              <div className="mb-3">
                <label>Edit Book Volume</label>
                <input type="text" className="form-control" id="editVolume" placeholder="Edit Book Volume"value={volume}
                onChange={(e)=>{setVolume(e.target.value)}}/>
              </div>
              <div className="mb-3">
                <label>Edit Book Pages</label>
                <input type="number" className="form-control" id="editEdition" placeholder="Edit Book Language"value={pages}
                onChange={(e)=>{setPages(e.target.value)}} min = "1"/>
              </div>
              <div className="mb-3">
                <label>Edit Description</label>
                <textarea className="form-control" id="editDescription" placeholder="Edit Book Description"value={description}
                onChange={(e)=>{setDesc(e.target.value)}}/>
              </div>
              <div className="mb-3" >
                <label>Book Quantity</label>
                <input type='number' className ="form-control" placeholder = "Book Quantity" value = {quantity} onChange={e=>{setQuantity(e.target.value)}} ></input>
              </div>
              <div className="mb-3">
                <label>Edit Image</label>
                <input type="text" className="form-control" id="editEdition" placeholder="Edit Book Language"value={image}
                onChange={(e)=>{setImage(e.target.value)}}/>
              </div>
              <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Save Changes</button></div>
              
            </form>
          </div>

        </div>
      </div>
      <ToastContainer/>
    </div>
    )
}
export default EditBook;