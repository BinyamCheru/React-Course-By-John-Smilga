import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const books = [
  {
    img: "./images/book-1.jpg",
    title: "The Let Them Theory",
    author: "Mel Robbins",
    id: 1,
  },
  {
    img: "./images/book-2.jpg",
    title: "The Crash",
    author: "Freida McFadden",
    id: 2,
  },
  {
    img: "./images/book-3.jpg",
    title: "Brimstone (Deluxe Limited Edition)",
    author: "Callie Hart",
    id: 3,
  },
];

const BookList = () => {
  return (
    <>
      <EventExample />
      <section className="bookList">
        {books.map((book) => {
          // return <Book book={book} key={book.id} />; this is option one without using spread operator
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
};

const EventExample = () => {
  const handleFormInput = (event) => {
    console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.value);

    console.log("Handle Form Input.");
  };
  const handleButtonClick = () => {
    alert("Handle Click Event");
  };
  const handleFormSubmission = (event) => {
    event.preventDefault();
    console.log("Form Submitted.");
  };
  return (
    <section style={{ margin: "2rem" }}>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>Click Me</button>
    </section>
  );
};
const Book = (props) => {
  const { img, title, author } = props;
  // const { img, title, author } = props.book; without using spread operator
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
