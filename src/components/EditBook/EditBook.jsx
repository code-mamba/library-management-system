import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { singleBookDetail, updateBook } from "../../redux/actions";

const EditBooks = () => {
  const [state, setState] = useState({
    title: "",
    categories: "",
    description: "",
    author: "",
    year: "",
    edition: "",
    language: "",
    quantity: "",
    pages: "",
    volume: "",
    image: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  const { book } = useSelector((state) => state.data);
  const {
    title,
    categories,
    description,
    author,
    year,
    edition,
    language,
    quantity,
    pages,
    volume,
    image,
  } = state;

  useEffect(() => {
    dispatch(singleBookDetail(id));
  }, []);

  useEffect(() => {
    if (book) {
      setState({ ...book });
    }
  }, [book]);
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const EditBook = (e) => {
    e.preventDefault();
    dispatch(updateBook(state, id));
    navigate("/home");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5" data-testid="add-books">
            EditBooks
          </h2>
          <div className="card my-5">
            <form
              className="card-body cardbody-color p-lg-5"
              onSubmit={EditBook}
            >
              <div className="mb-3">
                <label>Add Book Name</label>
                <input
                  data-testid="book-name"
                  type="text"
                  className="form-control"
                  id="bookName"
                  placeholder="Add Book Name"
                  name="title"
                  value={title || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label>Add Book Volume</label>
                <input
                  data-testid="book-volume"
                  type="text"
                  className="form-control"
                  id="addVolume"
                  placeholder="Book Volume"
                  name="volume"
                  value={volume || ""}
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label>Add Author Name</label>
                <input
                  data-testid="addAuthor"
                  type="text"
                  className="form-control"
                  id="addAuthor"
                  placeholder="Add Author"
                  name="author"
                  value={author || ""}
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label>Add Book Type</label>
                <input
                  type="text"
                  data-testid="addCategory"
                  className="form-control"
                  id="addCategory"
                  placeholder="Add Book Category"
                  name="categories"
                  value={categories || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label>Add Year</label>
                <input
                  data-testid="addYear"
                  type="text"
                  className="form-control"
                  id="editYear"
                  placeholder="Add Book Year"
                  name="year"
                  value={year || ""}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Add Book Edition</label>
                <input
                  data-testid="addBookEdition"
                  type="text"
                  className="form-control"
                  id="addEdition"
                  placeholder="Add Book Edition"
                  name="edition"
                  value={edition || ""}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Add Book Language</label>
                <input
                  data-testid="bookLang"
                  type="text"
                  className="form-control"
                  id="AddLanguage"
                  placeholder="Add Book Language"
                  name="language"
                  value={language || ""}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Add Description</label>
                <textarea
                  data-testid="addDesc"
                  className="form-control"
                  id="editDescription"
                  placeholder="Add Book Description"
                  name="description"
                  value={description || ""}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Add Book Pages</label>
                <input
                  data-testid="addPages"
                  type="number"
                  className="form-control"
                  id="AddPages"
                  placeholder="Add Book Pages"
                  name="pages"
                  value={pages || ""}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Add Quantity</label>
                <input
                  data-testid="addQuant"
                  className="form-control"
                  id="addQuantity"
                  type="number"
                  placeholder="Add Book Quantity"
                  name="quantity"
                  value={quantity || ""}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Image Url</label>
                <input
                  data-testid="addImg"
                  className="form-control"
                  id="imageUrl"
                  type="text"
                  placeholder="image url"
                  name="image"
                  value={image || ""}
                  onChange={handleInputChange}
                  required
                ></input>
              </div>

              <div className="text-center">
                <button
                  data-testid="editBook-btn"
                  type="submit"
                  className="btn btn-color px-5 mb-5 w-50"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBooks;
