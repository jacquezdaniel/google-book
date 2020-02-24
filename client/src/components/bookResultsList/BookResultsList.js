import React, { Component } from "react";
import BookResult from "../bookResult/BookResult";

class BookResultsList extends Component {
  render() {
    const { books } = this.props;
    return (
      <div className="container">
        {books.map(book => (
          <BookResult key={book.id} {...book} />
        ))}
      </div>
    );
  }
}

export default BookResultsList;
