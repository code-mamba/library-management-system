import { useEffect, useState } from "react";
import BookList from "../BookList/BookList";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { loadBooks } from "../../redux/actions";

const Home = ({ isAdmin }) => {
  const { books } = useSelector((state) => state.data);
  const [mapBook, setMapBook] = useState(books);
  const [query, setQuery] = useState("");
  const [flag, setFlag] = useState(true);
  console.log("books", books, "type of", typeof books);
  let dispatch = useDispatch();
  const Searching = (e) => {
    setQuery(e.target.value);
    if (query === "") {
      setMapBook(books);
    }
    setFlag(false);
    var searchBook = books.filter((book) => {
      let title = book.title.toLowerCase();
      let searchTitle = query.toLowerCase();

      if (title.includes(searchTitle)) {
        return title;
      }
    });
    setMapBook(searchBook);
  };

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  return (
    <div className="home" style={{ backgroundColor: "#c8dcff" }}>
      <div className="search-box">
        <button className="btn-search">
          <i className="fas fa-search"></i>
        </button>
        <input
          type="text"
          className="input-search"
          data-testid="search"
          placeholder="Type to Search..."
          onChange={(e) => {
            Searching(e);
          }}
        ></input>
      </div>

      {/* {flag && <BookList books={books} isAdmin={isAdmin}></BookList>}
      {!flag && <BookList books={mapBook} isAdmin={isAdmin}></BookList>} */}
      <BookList books={flag ? books : mapBook} isAdmin={isAdmin}></BookList>
    </div>
  );
};

export default Home;
