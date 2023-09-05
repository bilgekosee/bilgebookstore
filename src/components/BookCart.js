import React, { useContext } from "react";
import { Context } from "../context/Context";
import BookCartItem from "./BookCartItem";
import BookCartCheckOut from "./BookCartCheckOut";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const BookCart = () => {
  const { carts } = useContext(Context);

  if (carts.length === 0) {
    return (
      <h1 className="display-4 text-center  my-card">
        It looks like your cart is empty. Please add a few items.
      </h1>
    );
  } else {
    return (
      <div className="text-center">
        <h1 className="display-4 my-bookcard4"> Book Cart</h1>
        <div className="container d-flex flex-column">
          {carts.map((cart) => (
            <BookCartItem key={cart.id} cart={cart} />
          ))}
        </div>
        <BookCartCheckOut />
      </div>
    );
  }
};

export default BookCart;
