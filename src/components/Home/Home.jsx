import { useEffect, useState } from "react";
import BookList from "../BookList/BookList";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { loadBooks } from "../../redux/actions";
import myApi from "../../services/api";

const Home = ({ isAdmin }) => {
  const { books } = useSelector((state) => state.data);
  const [mapBook, setMapBook] = useState(books);
  const [query, setQuery] = useState("");
  const [flag, setFlag] = useState(true);
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
  const handleFilterInput = (e) => {
    let value = e.target.value;
    value == null || value == ""
      ? myApi.getAllBooks().then((res) => {
          setMapBook(res.data.data);
        })
      : myApi.bookCategories(value).then((res) => {
          console.log(res);
          setMapBook(res.data.data);
        });
  };
  const handleFilterYear = (e) => {
    let year = e.target.value;
    let yearPlusten = parseInt(year) + 10;
    year == null || year == ""
      ? myApi.getAllBooks().then((res) => {
          setMapBook(res.data.data);
        })
      : myApi.bookYear(year, yearPlusten).then((res) => {
          setMapBook(res.data.data);
        });
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
      <div>
        <select
          className="categories"
          id="category-select"
          onChange={handleFilterInput}
        >
          <option value="">All Books</option>
          <option value="Romance">Romance</option>
          <option value="adventure">Adventure</option>
          <option value="self-help">SelfHelp</option>
          <option value="Computer">Computer</option>
        </select>
      </div>
      <div>
        <select className="year" id="year-select" onChange={handleFilterYear}>
          <option value="">Year</option>
          <option value="1990">1990-2000</option>
          <option value="2000">2000-2010</option>
          <option value="2010">2010-2020</option>
        </select>
      </div>
      <BookList books={flag ? books : mapBook} isAdmin={isAdmin}></BookList>
    </div>
  );
};

export default Home;
