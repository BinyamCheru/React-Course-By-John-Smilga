import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstBook = {
  img: "./images/book-1.jpg",
  title: "The Let Them Theory",
  author: "Mel Robbins",
};
const secondBook = {
  img: "./images/book-2.jpg",
  title: "The Crash",
  author: "Freida McFadden",
};
const thirdBook = {
  img: "./images/book-3.jpg",
  title: "Brimstone (Deluxe Limited Edition)",
  author: "Callie Hart",
};

const BookList = () => {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      />
    </section>
  );
};

const Book = (props) => {
  // or here simply pass const Book = ({ img, title, author }) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
