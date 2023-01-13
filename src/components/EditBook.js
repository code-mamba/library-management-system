import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
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
    const[available,setAvailable]=useState()
    const navigate =useNavigate();
    const {id} =useParams();
    useEffect(()=>{
        axios.get('http://localhost:8000/books/'+id).then((res)=>{
            setTitle(res.data.title);
            setAuthor(res.data.author);
            setCategory(res.data.categories);
            setYear(res.data.year);
            setEdition(res.data.edition);
            setDesc(res.data.description);
            setLanguage(res.data.language);
            setPages(res.data.pages);
            setQuantity(res.data.quantity);
            setAvailable(res.data.available)
        }).catch((err)=>{console.log(err)});
        // fetch('http://localhost:8000/books/'+id).then((res)=>{
        //         return res.json();
        //     }).then((data)=>{
        //         setTitle(data.title);
        //         setAuthor(data.author);
        //         setCategory(data.categories);
        //         setYear(data.year);
        //         setEdition(data.edition);
        //         setDesc(data.description);
        //         setLanguage(data.language);
        //         setPages(data.pages);
        //         setQuantity(data.quantity);
        //         setAvailable(data.available)
        //     }).catch((err)=>{console.log(err)})
    },[]);
    const editBook=(e)=>{
        const book = {title,author,categories,year,edition,language,pages,description,available,quantity}
        e.preventDefault();
        axios.put('http://localhost:8000/books/'+id,book).then(navigate('/home')).catch((err)=>{console.log(err)})
        // fetch('http://localhost:8000/books/'+id,{
        //     method:'PUT',
        //     headers:{'Content-Type':'application/json'},
        //     body:JSON.stringify(book)
        // }).then(navigate('/home')).catch((err)=>{console.log(err)})

    }

    return(
        <div>
            <h1>Edit book</h1>
                <form onSubmit={editBook}>
                <label>Edit Book Name</label>
                <input type="text"value={title} onChange={(e)=>{setTitle(e.target.value)}}  ></input>
                <br></br>

                <label>Edit Author Name</label>
                <input type="text" value={author} onChange={(e)=>{setAuthor(e.target.value)}}></input>
                <br></br>

                <label>Edit Book Type</label>
                <input type="text" value={categories} onChange={(e)=>{setCategory(e.target.value)}}></input>
                <br></br>

                <label>Edit Year</label>
                <input type="text" value={year} onChange={(e)=>{setYear(e.target.value)}}></input>
                <br></br>

                <label>Edit Book Edition</label>
                <input type="text" value={edition} onChange={(e)=>{setEdition(e.target.value)}}></input>
                <br></br>

                <label>Edit language</label>
                <input type="text" value={language} onChange={(e)=>{setLanguage(e.target.value)}}></input>
                <br></br>

                <label>Edit Book pages</label>
                <input type="text" value={pages} onChange={(e)=>{setPages(e.target.value)}}></input>
                <br></br>

                <label>Edit Description</label>
                <textarea type="text" value={description} onChange={(e)=>setDesc(e.target.value)}></textarea>
                <br></br>

                <button type="submit">Submit Change</button>
                </form>
            
        </div>
    )
}
export default EditBook;