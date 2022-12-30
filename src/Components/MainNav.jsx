import React from "react";
import { Link } from "react-router-dom";

export default function MainNav() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="blogs">Blogs</Link>
        <Link to="contact">Contact</Link>
        <Link to="about">About</Link>
      </nav>
    </div>
  );
}
