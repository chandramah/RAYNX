import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center">
      <div className="font-bold text-lg">Raynx Portal</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/employees" className="hover:underline">Employees</Link>
        <Link to="/departments" className="hover:underline">Departments</Link>
      </div>
    </nav>
  );
};

export default Navbar;
