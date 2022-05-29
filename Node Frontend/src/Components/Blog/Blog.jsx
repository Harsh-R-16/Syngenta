import { useState, useEffect } from "react";
import "./Blog.css";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://harsh-gajera.herokuapp.com/blogApi/blogs")
      .then((res) => res.json())
      .then((res) => {
        const newBlogs = res.data;
        setBlogs(newBlogs);
      });
  }, []);
  return (
    <main id="main-blog">
      <h1 className="h1">Blog Api </h1>
      <section>
        {blogs.map((blog, index) => (
          <Div {...blog} key={index} />
        ))}
      </section>
    </main>
  );
}

function Div({ _id, title, author, description, labels, likes }) {
  const [c, setC] = useState(likes);

  const clickHandler = (e) => {
    setC((c) => c + 1);
    fetch(
      `https://harsh-gajera.herokuapp.com/blogApi/blogs/${e.target.id}/like`
    );
  };

  return (
    <div>
      <p>
        <span>Title:</span> {title}
      </p>
      <p>
        <span>author:</span> {author || "Anonymous"}
      </p>
      <p>
        <span>Description:</span> {description}
      </p>
      <p>
        <span>Labels:</span> {labels.join(" ")}
      </p>
      <p className="like">{c} Likes</p>
      <button onClick={clickHandler} id={_id}>
        Like
      </button>
    </div>
  );
}
