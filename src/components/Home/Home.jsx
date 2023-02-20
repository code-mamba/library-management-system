/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import BookList from "../BookList/BookList";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import lmsUrl from "../../AxiosURL";

const navigate = useNavigate;
const Home = ({ isAdmin }) => {
  const [books, setBooks] = useState(null);
  const [query, setQuery] = useState("");

  const Searching = (e) => {
    setQuery(e.target.value);
    console.log(query);
    var SearchBooks = books.filter((book) => {
      if (query == "") {
        return books;
      } else if (book.title.toLowerCase().includes(query.toLowerCase())) {
        return book;
      }
    });
    setBooks(SearchBooks);
  };

  const categoryChange = (e) => {
    lmsUrl.get("books").then((res) => {
      var FilteredBooks = res.data.filter((book) => {
        return book.categories == e.target.value;
      });
      setBooks(FilteredBooks);
    });
  };
  useEffect(() => {
    lmsUrl
      .get("books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch(() => {
        navigate("/fetch-err");
      });
  }, [query == ""]);

  return (
    <div className="home" style={{ backgroundColor: "#c8dcff" }}>
      <div className="boxContainer">
        <div className="elementsContainer">
          <input
            type="text"
            className="search"
            placeholder="Search Books..."
            onChange={(e) => Searching(e)}
          ></input>
        </div>
      </div>

      <select className="Select-Button" onChange={categoryChange}>
        <option value="technologies">Technologies</option>
        <option value="self-help">Self help</option>
        <option value="adventure">Adventure</option>
        <option value="Romance">Romance</option>
      </select>

      {books && (
        <BookList books={books} isAdmin={isAdmin} setBooks={setBooks} />
      )}
    </div>
  );
};

export default Home;
