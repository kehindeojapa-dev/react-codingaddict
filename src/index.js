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

// Main component
const BookList = () => {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

// a book component: reusable
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

//image component
const Image = () => {
  return <img src="pad.jpg" alt="what" width="300px" />;
};

//title component
const Title = () => <h2>Messi-Ronaldo Chronicles</h2>;

//author component
const Author = () => <h5>Peter Drury</h5>;

ReactDOM.render(<BookList />, document.getElementById("root"));
