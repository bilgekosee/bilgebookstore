import React, { Component } from "react";
import items from "../data/books.json";

const BookContext = React.createContext();

export default class BookProvider extends Component {
  state = {
    books: [],
    sortedBooks: [],
    price: 0,
    minPrice: 0,
    maxPrice: 0,
  };

  componentDidMount() {
    let books = this.formatData(items);
    let maxPrice = Math.max(...books.map((item) => item.price));
    this.setState({
      books,
      sortedBooks: books,
      price: maxPrice,
      maxPrice,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.id;

      let book = { id };
      return book;
    });
    return tempItems;
  }

  handleChange = () => {
    this.setState(this.filterBooks);
  };

  filterBooks = () => {
    let { books, price } = this.state;

    let tempBooks = [...books];
    price = parseInt(price);

    // filter by price
    tempBooks = tempBooks.filter((book) => book.price <= price);
    this.setState({
      sortedBooks: tempBooks,
    });
  };
  render() {
    return (
      <BookContext.Provider
        value={{
          ...this.state,
          getBook: this.getBook,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </BookContext.Provider>
    );
  }
}
const BookConsumer = BookContext.Consumer;

export { BookProvider, BookConsumer, BookContext };

export function withBookConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <BookConsumer>
        {(value) => <Component {...props} context={value} />}
      </BookConsumer>
    );
  };
}
