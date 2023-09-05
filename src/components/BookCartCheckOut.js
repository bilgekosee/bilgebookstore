import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const BookCartCheckOut = () => {
  const { books, carts } = useContext(Context);
  const localLogin = localStorage.getItem("login");
  const localUsername = localStorage.getItem("username");
  const [totalPrice, setTotalPrice] = useState(0);
  const shippingCost = 5;

  const getSubtotal = (books, carts) => {
    let subtotal = 0;
    carts.forEach((cart) => {
      books.forEach((book) => {
        if (book.id === cart.id) {
          subtotal = subtotal + book.price * cart.quantity;
        }
      });
    });

    return subtotal.toFixed(2);
  };

  let subtotal = getSubtotal(books, carts);
  let tempTotal = (parseFloat(subtotal) + shippingCost).toFixed(2);

  useEffect(() => {
    setTotalPrice(tempTotal);
  }, [tempTotal]);

  const handleCheckLogIn = () => {
    if (!localLogin) {
      alert("Please login to buy books");
    } else {
      alert("Thank you for your purchase " + localUsername + " 😊");
      localStorage.removeItem("carts");
      window.location.href = "/";
    }
  };

  return (
    <div className="container my-bookcard">
      <div className="checkout-area w-75 mx-auto my-5">
        <h1 className="heading text-center my-total">Total Price</h1>
        <table className="table">
          <tbody>
            <tr>
              <td className="my-table">Subtotal</td>
              <td className="my-table">${subtotal}</td>
            </tr>
            <tr>
              <td className="my-table">Shipping Cost</td>
              <td className="my-table">${shippingCost}</td>
            </tr>
            <tr className="text-primary h4">
              <td className="my-table">Total</td>
              <td className="my-table">${totalPrice}</td>
            </tr>
            <tr>
              <td className="white">
                <Link className="btn my-button" to="/">
                  Back To Shopping
                </Link>
              </td>
              <td className="white">
                <button className="btn my-button" onClick={handleCheckLogIn}>
                  Pay
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookCartCheckOut;
