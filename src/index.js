import React from "react";
import ReactDOM from "react-dom/client";
// function Greeting() {
//   return <h1>My First Component</h1>;
// }

// we can use an arrow function also
const Greeting = () => {
  return (
    <div>
      <h1>Fruits: </h1>
      <ul>
        <li>Orange</li>
        <li>Banana</li>
        <li>Mango</li>
      </ul>
    </div>
    // <div><h2>Another div which is a parent this going to throw an error</h2></div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
