import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import bananas from "./books";
import Book from "./Book";

const BookList = () => {
  return (
      <section className="bookList">
        {bananas.map((book) => {
          // return <Book book={book} key={book.id} />; this is option one without using spread operator
          return <Book {...book} key={book.id} />;
        })}
      </section>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
