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

// Two Books
const books = [
  {
    id: 1,
    image: "pad.jpg",
    title: "Messi-Ronaldo Chronicles",
    author: "Peter Drury",
  },
  {
    id: 2,
    image: "stadium.jpg",
    title: "Once in a lifetime",
    author: "J.k. Rowling",
  },
];
// Main component
const BookList = () => {
  return (
    // Use the map function to render each book
    // gotten from the books array.
    <section className="bookList">
      {books.map((book) => {
        // return <Book key={book.id} book={book} />;
        // use the spread operator
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

// a book component: reusable
const Book = (props) => {
  console.log(props);
  const { image, title, author } = props;
  return (
    <article className="book">
      <img src={image} alt="" width="300px" />
      <h2>{title}</h2>
      <h5>{author}</h5>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
