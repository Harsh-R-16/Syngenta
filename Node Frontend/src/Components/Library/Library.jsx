import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Library.css";

export default function Book() {
  const [books, setBooks] = useState([]);

  let bookCart;
  if (localStorage.getItem("bookCart")) {
    bookCart = JSON.parse(localStorage.getItem("bookCart"));
  } else {
    bookCart = [];
  }

  useEffect(() => {
    fetch("https://harsh-gajera.herokuapp.com/libraryApi/books")
      .then((res) => res.json())
      .then((res) => {
        setBooks(res.data);
      });
  }, []);

  const cartHandler = (e) => {
    if (!bookCart.includes(e.target.id)) {
      e.target.innerHTML = "Already in List";
      bookCart.push(e.target.id);
      localStorage.setItem("bookCart", JSON.stringify(bookCart));
    }
  };

  return (
    <main id="main-library">
      <h1 className="h1">
        Library Api
        <Link to="/library/cart">Your Books</Link>
      </h1>
      <section>
        {books.map(({ _id, img, title, author, category }) => (
          <div key={_id}>
            <img
              src={`${img}/${Math.random()}`}
              alt=""
              style={{ height: "300px" }}
            />
            <p>
              <span>Title:</span>{" "}
              {title.length < 56 ? title : `${title.slice(0, 52)}...`}
            </p>
            <p>
              <span>Author:</span>{" "}
              {author
                ? author.length < 52
                  ? author
                  : `${author.slice(0, 52)}...`
                : "Anonymous"}
            </p>
            <p>
              <span>Category:</span> {category || "All Category"}
            </p>
            {/* <p>
              <span>Location:</span> {book.location}
            </p> */}
            <button id={_id} onClick={cartHandler}>
              {bookCart.includes(_id) ? "Already in List" : "Add to List"}
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
