import React from "react";
import "../style/nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div className="nav-logo">
        <h1>Logo</h1>
      </div>
      <div className="nav-menu">
        <Link to={"/"}>Home</Link>
        <Link to={"/kids"}>kids</Link>
        <Link to={"/men"}>men</Link>
        <Link to={"/women"}>women</Link>
      </div>
      <div className="nav-search">
        <input type="text" placeholder="search" />
      </div>
      <div className="nav-btn">
       <Link to={"/login"}> <button>login</button></Link> 
       <Link to={"/product/create"}> <button> create Product</button></Link> 

        <Link to={"/reg"}> <button>reg</button></Link>
     <Link to={"/cart"}> <button>cart</button></Link>
      </div>
    </nav>
  );
};

export default Nav;
