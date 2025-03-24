import React, { useState } from "react";
import Link from "next/link";
import "./Header.css";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  return (
    <header className={`header ${openNavigation ? "open" : ""}`}>
      <div className="logo">
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </div>
      <nav className={`${openNavigation ? "nav-open" : "nav-closed"}`}>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">About</Link></li>
          <li><Link href="/">Contact</Link></li>
        </ul>
      </nav>
      <div className="header-right">
        <button className="register-btn">Register</button>
        {/* <a href="https://mlh.io/" target="_blank" rel="noopener noreferrer" className="mlh-banner-container">
          <img src="/mlh_banner.svg" alt="MLH Banner" className="mlh-banner" />
        </a> */}
      </div>
    </header>
  );
};

export default Header;
