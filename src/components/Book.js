import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Book = ({ bookDetails }) => {
  const { addCart } = useContext(Context);
  const { id, title, coverImageSrc, rating, price, authorName } = bookDetails;

  const handleAddCart = () => {
    addCart(id);
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex flex-column my-2">
      <div className="cover-img">
        <img src={coverImageSrc} alt="" />
        <div className="details">
          <div className="content">
            <h5>
              <Link style={{ color: "#fff" }} to={"/book/details/" + id}>
                {title}
              </Link>
            </h5>
            <h6 style={{ color: "#fff" }}>By {authorName}</h6>
            <p>
              <i className="fa fa-star"></i> {rating}
            </p>
            <h4>Price: ${price}</h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <Link
          className="btn btn-outline-primary my-details"
          to={"/book/details/" + id}
        >
          Details
        </Link>
        <button
          onClick={handleAddCart}
          className="btn btn-outline-primary my-details"
        >
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default Book;
