import React from "react";
import ReactDOM from "react-dom";

// Import Stylesheet
import "./index.css";

// const Greeting = () => {
//   return (
//     // <div>
//     //   <h1> Blog Title </h1>
//     //   <p> Blog Content </p>
//     // </div>
//     // <section>
//     //   <h2>Blog Post</h2>
//     //   <p>Blog Content</p>
//     // </section>

//     // Nested Component
//     // <section>
//     //   <Person />
//     //   <Message />
//     // </section>
//   );
// };

//mini-component1
// const Person = () => <h2>John Doe</h2>;
// const Message = () => (
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nam?</p>
// );

// Mini-Book Project
// Import the books list from book.js
// import { books } from "./books";
// // Import Book component from Book.js
// import Book from "./Book";

// // Main component
// const BookList = () => {
//   return (
//     // Use the map function to render each book
//     // gotten from the books array.
//     <section className="bookList">
//       {books.map((book) => {
//         // return <Book key={book.id} book={book} />;
//         // use the spread operator
//         return <Book key={book.id} {...book} />;
//       })}
//     </section>
//   );
// };

// // a book component: reusable
import Setup from "./tutor/10-propTypes";
// useBasic

// ReactDOM.render(<BookList />, document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Setup />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
