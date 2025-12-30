import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-20 px-8 flex items-center justify-between bg-white shadow-md">
      
      {/* Logo */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Logo
        </h1>
      </div>

      {/* Menu */}
      <ul className="flex items-center gap-6">
        <li>
          <a href="/" className="text-lg text-gray-700 hover:text-blue-600 transition">
            Home
          </a>
        </li>
        <li>
          <a href="/class" className="text-lg text-gray-700 hover:text-blue-600 transition">
            Class
          </a>
        </li>
        <li>
          <a href="/section" className="text-lg text-gray-700 hover:text-blue-600 transition">
            Section
          </a>
        </li>
        <li>
          <a href="/contact" className="text-lg text-gray-700 hover:text-blue-600 transition">
            Contact
          </a>
        </li>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-4 text-xl cursor-pointer">
        <span className="hover:text-blue-600 transition">⚙️</span>
        <span className="hover:text-blue-600 transition">🛒</span>
        <span className="hover:text-blue-600 transition">🌾</span>
      </div>

    </nav>
  );
};

export default Navbar;
