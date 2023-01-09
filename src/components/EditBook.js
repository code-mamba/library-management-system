const EditBook = ()=>{
    return(
        <div>
            <h1>Edit book</h1>
                <form>
                <label>Edit Book Name</label>
                <input type="text"></input>
                <br></br>
                <label>Edit Author Name</label>
                <input type="text"></input>
                <br></br>
                <label>Edit Book Type</label>
                <input type="text"></input>
                <br></br>
                <label>Edit Description</label>
                <input type="text"></input>
                <br></br>
                <label>Edit Quantity</label>
                <input type="number"></input>
                <br></br>
                <button>Submit Change</button>
                </form>
            
        </div>
    )
}
export default EditBook