import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="fixed flex mt-4 top-2 right-4 left-4 shadow-lg z-50 bg-white">
        <div className="container px-4 flex justify-between items-center h-16">
          <h3 className="text-2xl font-bold">TRAVEL MUSE</h3>
        </div>

        <div className="hidden md:flex space-x-4 mr-5 text-lg font-bold items-center">
          <Link
            to="/"
            className="px-6 py-2 hover:bg-gray-400 hover:text-white rounded-full"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2 hover:bg-gray-400 hover:text-white rounded-full"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="px-6 py-2 hover:bg-gray-400 hover:text-white rounded-full"
          >
            About
          </Link>
          <Link to="/login">
            <button className="py-1 px-6 border bg-gray-200">Login</button>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex space-y-6 py-4 flex-col bg-white items-center">
            <Link
              to="/"
              className="px-6 py-2 hover:bg-gray-400 hover:text-white rounded-full"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 hover:bg-gray-400 hover:text-white rounded-full"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="px-6 py-2 hover:bg-gray-400 hover:text-white rounded-full"
            >
              About
            </Link>
            <Link to="/login">
              <button className="py-1 px-6 border bg-gray-200">Login</button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
