import { useState } from "react";
import "./AddBooks.css";
import { SuccessfullyBookAdded, UnableToAddBooK } from "../../Toastify";
import { AddingBooks } from "../../services/api";
const AddBooks = () => {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [description, setDesc] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setbookYear] = useState("");
  const [edition, setbookEdition] = useState("");
  const [language, setbookLanguage] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [pages, setbookPages] = useState("");
  const [volume, setbookVolume] = useState("");
  const [image, setImage] = useState("");

  const addBooks = (e) => {
    e.preventDefault();
    const book = {
      title,
      author,
      categories,
      volume,
      year,
      edition,
      language,
      pages,
      description,
      quantity,
      isAvailable: true,
      image,
    };

    AddingBooks(book)
      .then(() => {
        SuccessfullyBookAdded();
      })
      .then(() => {
        setTitle("");
        setCategories("");
        setDesc("");
        setAuthor("");
        setbookYear("");
        setbookEdition("");
        setbookLanguage("");
        setQuantity(0);
        setbookPages("");
        setbookVolume("");
        setImage("");
      })

      .catch(() => {
        UnableToAddBooK();
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5" data-testid="add-books">
            Add Books
          </h2>
          <div className="Logo">LMS</div>
          <div className="card my-5">
            <form
              className="card-body cardbody-color p-lg-5"
              onSubmit={addBooks}
            >
              <div className="mb-3">
                <label>Add Book Name</label>
                <input
                  data-testid="book-name"
                  type="text"
                  className="form-control"
                  id="bookName"
                  placeholder="Add Book Name"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
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
                  value={volume}
                  onChange={(e) => {
                    setbookVolume(e.target.value);
                  }}
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
                  value={author}
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
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
                  value={categories}
                  onChange={(e) => {
                    setCategories(e.target.value);
                  }}
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
                  value={year}
                  onChange={(e) => {
                    setbookYear(e.target.value);
                  }}
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
                  value={edition}
                  onChange={(e) => {
                    setbookEdition(e.target.value);
                  }}
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
                  value={language}
                  onChange={(e) => {
                    setbookLanguage(e.target.value);
                  }}
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
                  value={description}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
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
                  value={pages}
                  onChange={(e) => {
                    setbookPages(e.target.value);
                  }}
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
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
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
                  value={image}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                  required
                ></input>
              </div>

              <div className="text-center">
                <button
                  data-testid="addBook-btn"
                  type="submit"
                  className="btn btn-color px-5 mb-5 w-50"
                >
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
