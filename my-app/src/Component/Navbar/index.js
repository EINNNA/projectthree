import React from "react";
import "./index.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Poringdrops
      </a>
      <ul class="navbar-nav">
      <li class="nav-item heart">
        <a class="nav-link" href="saved">Bag</a>
      </li>
      <li class="nav-item search">
        <a class="nav-link" href="search">Search</a>
      </li>
      <li class="nav-item login">
        <a class="nav-link" href="/login">Login</a>
      </li>
    </ul>
    </nav>
  );
}

export default Navbar;