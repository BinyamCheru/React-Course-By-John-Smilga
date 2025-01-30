import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const BookList = () => {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const author = "Mel Robbins";
const Book = () => {
  const title = "The Let Them Theory";
  return (
    <article className="book">
      <img src="./images/book-2.jpg" alt="The Let Them Theory" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
