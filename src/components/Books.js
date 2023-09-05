import React, { useContext, Fragment } from "react";
import { Context } from "../context/Context";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Category from "./Category";
import BookCategory from "./BookCategory";
const Books = () => {
  const { categories } = useContext(Context);

  return (
    <>
      <div className="row">
        {categories.length > 0 ? (
          categories.map((category) => {
            const { id } = category;
            return <Category key={id} categoryDetails={category} />;
          })
        ) : (
          <BookCategory />
        )}
      </div>
    </>
  );
};

export default Books;
