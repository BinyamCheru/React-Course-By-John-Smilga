import React from "react";
import ReactDOM from "react-dom/client";
// function Greeting() {
//   return <h1>My First Component</h1>;
// }

// we can use an arrow function also
const Greeting = () => {
  return React.createElement("h2", {}, "Hello form React.createElement()");
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
