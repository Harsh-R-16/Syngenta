import { useState, useEffect } from "react";

export default function LibraryCart() {
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
        let newBooks = res.data.filter((i) => bookCart.includes(i._id));
        setBooks(newBooks);
      });
  }, [bookCart]);

  const cartHandler = (e) => {
    bookCart.splice(bookCart.indexOf(e.target.id), 1);
    localStorage.setItem("bookCart", JSON.stringify(bookCart));
  };

  return (
    <main id="main-library">
      <h1 className="h1">Your Books ({bookCart.length} Items)</h1>

      <section>
        {books.map(({ _id, img, title, author, category }) => (
          <div key={_id}>
            <img src={`${img}`} alt="" style={{ height: "300px" }} />
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
            <button id={_id} onClick={cartHandler}>
              Remove from List
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
