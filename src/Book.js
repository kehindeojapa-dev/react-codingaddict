import React from "react";

const Book = (props) => {
  const clickHandler = (e) => {
    alert("Hello World");
    console.log(e.target);
  };
  const complexExample = (author) => alert(author);
  const { image, title, author } = props;
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={image} alt="" width="300px" />
      <h2>{title}</h2>
      <h5>{author}</h5>
      <button type="button" onClick={clickHandler}>
        greet
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        complex
      </button>
    </article>
  );
};

export default Book;
