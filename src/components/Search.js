import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/Context";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Search = () => {
  const [keywords, setKeywords] = useState("");
  const { getSearchedBooks, searchString } = useContext(Context);

  const handleChange = (e) => {
    setKeywords(e.target.value);
    getSearchedBooks(e.target.value);
  };

  useEffect(() => {
    if (searchString === null) {
      setKeywords("");
    }
  }, [searchString]);

  return (
    <input
      onChange={handleChange}
      style={{ width: "50%" }}
      className=" py-4 m-auto my-input"
      type="search"
      placeholder="To Search For..."
      value={keywords}
    />
  );
};

export default Search;
