import React, { useContext } from "react";
import { Context } from "../context/Context";
import { useParams } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const BookDetails = () => {
  const { id } = useParams();
  const { addCart, books } = useContext(Context);

  const book = books.filter((book) => book.id === id);
  const {
    title,
    coverImageSrc,
    rating,
    genre,
    price,
    description,
    authorName,
  } = book[0];

  const handleAddCart = () => {
    addCart(id);
  };

  return (
    <div className="container">
      <div className="alt">
        <div className="book-details w-75 my-4 mx-auto my-detailsborder">
          <div className="row">
            <div className="book-img col-lg-5 col-12">
              <img
                className="w-100 h-60"
                src={coverImageSrc}
                alt=""
                style={{
                  borderRadius: "10px",
                  marginLeft: "-80px",
                  marginTop: "20px",
                }}
              />
            </div>
            <div
              className="contents col-lg-7 col-12"
              style={{
                marginTop: "20px",
              }}
            >
              <h4 style={{ fontWeight: 500 }}>
                By &nbsp;
                {authorName}
              </h4>

              <h1 className="text-muted ml-0">{title}</h1>
              <p className="text-capitalize">Genre: {genre.join(", ")}</p>
              <h5>
                Goodreads Rating:{" "}
                <i
                  className="fa fa-star"
                  style={{ color: "gold", marginRight: "2px" }}
                ></i>
                {rating}
              </h5>

              <p>{description}</p>

              <h4 style={{ marginBottom: "30px", fontWeight: 600 }}>
                Price: ${price}
              </h4>

              <button
                style={{ fontSize: "1.3rem" }}
                className="btn btn-outline-primary px-5 py-3 m-auto my-details"
                onClick={handleAddCart}
              >
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
