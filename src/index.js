import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const books = [
  {
    img: "./images/book-1.jpg",
    title: "The Let Them Theory",
    author: "Mel Robbins",
  },
  {
    img: "./images/book-2.jpg",
    title: "The Crash",
    author: "Freida McFadden",
  },
  {
    img: "./images/book-3.jpg",
    title: "Brimstone (Deluxe Limited Edition)",
    author: "Callie Hart",
  },
];

const names = ["john", "spencer", "peter"];
// const newNames = names.map((name) => {
//   console.log(name);
//   return <h1> {name} </h1>
// });

const BookList = () => {
  return (
    <section className="bookList">
      {names.map((name)=>{
        return <h1> {name} </h1>
      })}
    </section>
  );
};

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      {/* {children} */}
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
