import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};

export default Navbar;
