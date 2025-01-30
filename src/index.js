import React from "react";
import ReactDOM from "react-dom/client";
// function Greeting() {
//   return <h1>My First Component</h1>;
// }

// we can use an arrow function also
const Greeting = () => {
  return (
    <div>
      <Heading />
      <Paragraph />
    </div>
  );
};

const Heading = () => <h1>This Heading</h1>;
const Paragraph = () => {
  return (
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquam!</p>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
