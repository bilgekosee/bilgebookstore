import React, { useContext, Fragment } from "react";
import Search from "./Search";
import { Context } from "../context/Context";
import { useParams } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Book from "../components/Book";

const BookCategory = () => {
  const { id } = useParams();
  const { books, clearSearch, searchedBooks, searchString } =
    useContext(Context);
  const filteredBooks = books.filter((book) => book.genre.includes(id));
  //console.log(filteredBooks);

  const filteredSearchedBooks = searchString
    ? filteredBooks.filter((book) =>
        book.title.toLowerCase().includes(searchString.toLowerCase())
      )
    : filteredBooks;

  return (
    <div className="container">
      <div className="container search-header px-3 py-3 mx-auto text-center mt-sm-5">
        <h1 className="display-4 my-search">Search Books</h1>
        <Search />
      </div>

      <h1
        style={{
          marginLeft: "20px",
          color: "#000",
          fontStyle: "normal",
          fontWeight: 300,
        }}
        className="display-4 text-center mb-3"
      >
        {searchString === null ? (
          <Fragment> {id.charAt(0).toUpperCase() + id.slice(1)} Books</Fragment>
        ) : (
          <Fragment>
            {" "}
            Searching for '{searchString}'
            <span onClick={() => clearSearch()} class="btn  ml-2 search-btn">
              X
            </span>
          </Fragment>
        )}
      </h1>

      <div className="row">
        {searchedBooks.length === 0
          ? filteredBooks.map((book) => {
              const { id } = book;
              return <Book key={id} bookDetails={book} />;
            })
          : filteredSearchedBooks.map((book) => {
              const { id } = book;
              return <Book key={id} bookDetails={book} />;
            })}
      </div>
    </div>
  );
};

export default BookCategory;
