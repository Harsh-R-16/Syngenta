import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Home() {
  return (
    <main id="home">
      <h1>Syngenta Assignment</h1>
      <Link to="/food">Food App</Link>
      <Link to="/blog">Blog App</Link>
      <Link to="/library">Library App</Link>
    </main>
  );
}
