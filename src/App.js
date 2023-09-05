import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "./context/Context";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import About from "./components/About";
import BookCart from "./components/BookCart";
import BookDetails from "./components/BookDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookCategory from "./components/BookCategory";
import AllBooks from "./components/AllBooks";
import Register from "./auth/Register";
import Login from "./auth/Login";

function App() {
  return (
    <Provider>
      <Header />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/book-cart" element={<BookCart />} />
          <Route path="/book/details/:id" element={<BookDetails />} />
          <Route path="/books/category/:id" element={<BookCategory />} />
          <Route path="/all-books" element={<AllBooks />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
