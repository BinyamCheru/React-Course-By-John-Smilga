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

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => {
  return <img src="./images/book-2.jpg" alt="The Let Them Theory" />;
};
const Title = () => <h2>The Let Them Theory</h2>;
const Author = () => <h3>Mel Robbins</h3>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
