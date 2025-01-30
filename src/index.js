import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const img = "./images/book-2.jpg";
const title = "The Let Them Theory";
const author = "Mel Robbins";

const BookList = () => {
  return (
    <section className="bookList">
      <Book img={img} title={title} author={author} />
      <Book img={img} title={title} author={author} />
      <Book img={img} title={title} author={author} />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
