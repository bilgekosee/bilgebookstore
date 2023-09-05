import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Navbar = () => {
  const { carts } = useContext(Context);
  const localLogin = localStorage.getItem("login");

  const logout = () => {
    localStorage.removeItem("login");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="bg-white border-bottom sticky-top shadow-sm p-3 px-md-4 mb-3">
        <div className="container d-flex flex-column flex-md-row align-items-center ">
          <Link
            className="heading my-0 mr-md-auto font-weight-normal"
            style={{
              textDecoration: "none",
              color: "#850585",
              fontWeight: 500,
              fontSize: "2rem",
              fontFamily: "Source Code Pro, monospace",
            }}
            to="/"
          >
            BookWorld
          </Link>

          <nav className="my-2 my-md-0 mr-md-3 container d-flex flex-column flex-md-row align-items-center justify-content-end ">
            <Link className="aboutstyle" to="/all-books">
              All Books
            </Link>

            <Link className="aboutstyle" to="/about">
              About
            </Link>

            {localLogin ? (
              <Link onClick={logout} className="aboutstyle" to="/login">
                Logout
              </Link>
            ) : (
              <div style={{ display: "flex" }}>
                <Link className="aboutstyle" to="/register">
                  Register
                </Link>
                <Link className="aboutstyle" to="/login">
                  Login
                </Link>
              </div>
            )}

            <Link
              className="btn btn-outline-primary my-button d-flex flex-column flex-md-row  align-items-center justify-content-end"
              to="/book-cart"
            >
              🛒 Book Cart (
              <span style={{ color: "#47391c", fontWeight: 900 }}>
                {carts.length !== 0 ? carts.length : 0}
              </span>
              )
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
