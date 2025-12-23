import { NavLink, Link } from "react-router-dom";
import { CiLogin, CiMenuBurger } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { menuContext } from "../Context/MenuProvider";

const Navbar = () => {
  const { menuOpen, setMenuOpen } = useContext(menuContext);

  const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Features", path: "/features" },
    { id: 4, name: "How it Works", path: "/howitWorks" },
    { id: 5, name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        {/* LOGO */}

        <Link
          to="#"
          style={{ textShadow: "3px 3px 5px yellow" }}
          className="text-3xl md:text-4xl font-extrabold text-indigo-500 hover:text-indigo-700 transition"
        >
          <span className="text-indigo-700">📚 Edu</span>
          <span className="text-gray-200">Stock</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex space-x-8 text-lg   font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-[#880000] font-semibold"
                    : "text-white hover:text-[#880000]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* LOGIN BUTTON */}
        <div className="hidden lg:block">
          <Link
            to="/login"
            className="flex items-center bg-[#880000] hover:bg-[#550000] text-white gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition"
          >
            <CiLogin className="text-lg" />
            Login
          </Link>
        </div>

        {/* MOBILE ICON */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoMdClose className="w-6 h-6 text-white" />
            ) : (
              <CiMenuBurger className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-black/60 backdrop-blur-md border-b border-gray-100">
          <div className="flex flex-col items-center gap-4 py-6 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-600 hover:text-indigo-500"
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2 text-white font-semibold hover:bg-indigo-700 transition"
            >
              <CiLogin />
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
