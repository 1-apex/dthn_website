import React from "react";
import "./Header.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">About</Link></li>
          <li><Link href="/">Contact</Link></li>
        </ul>
      </nav>
      <button className="register-btn">Register</button>
    </header>
  );
};

export default Header;
