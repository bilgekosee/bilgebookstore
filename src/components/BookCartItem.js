import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const BookCartItem = ({ cart }) => {
  const { books, updateCart, removeCart } = useContext(Context);
  const { id, quantity } = cart;
  const [newQuantity, setNewQuantity] = useState(quantity);

  const book = books.filter((book) => book.id === id);
  const { title, coverImageSrc, price, authorName } = book[0];

  const handleCartRemove = () => {
    removeCart(id);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setNewQuantity(newQuantity);
      updateCart(id, newQuantity);
    } else {
      alert("Please enter a value greater than or equal to 1");
    }
  };

  return (
    <div className="book-item mt-4">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12 col-12 inline-block">
          <div className="product-cover w-50 m-auto">
            <img className="img-fluid" src={coverImageSrc} alt="" />
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
          <h4>
            <Link style={{ color: "black" }} to={"/book/details/" + id}>
              {title}
            </Link>
          </h4>
          <h6>By {authorName}</h6>
          <h5>Price: ${price}</h5>
          <h5>Total Price: ${(price * newQuantity).toFixed(2)}</h5>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-12 p-1">
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            className="btn btn-primary my-plus"
          >
            +
          </button>
          <input
            type="text"
            value={quantity}
            onChange={(e) => {
              const newQuantity = parseInt(e.target.value);
              handleQuantityChange(newQuantity);
            }}
            className="my-control"
          />

          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            className="btn btn-primary my-minus"
          >
            -
          </button>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
          <button onClick={handleCartRemove} className="btn my-remove">
            <span>Remove &#128465;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCartItem;
