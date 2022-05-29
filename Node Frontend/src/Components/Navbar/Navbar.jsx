import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav id="main-nav">
      <Link to="/food">Food</Link>
      <Link to="/library">Library</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
}
