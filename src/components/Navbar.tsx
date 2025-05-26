import type React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          <span>CloudGenZ</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
