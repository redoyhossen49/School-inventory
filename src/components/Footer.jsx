import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Brand & Description */}
          <div className="md:w-1/3">
            <h2
              to="#"
              style={{ textShadow: "3px 3px 5px yellow" }}
              className="text-3xl md:text-4xl font-extrabold text-indigo-500 hover:text-indigo-700 transition"
            >
              <span className="text-indigo-700">📚 Edu</span>
              <span className="text-gray-200">Stock</span>
            </h2>
            <p className="text-gray-400 mt-4">
              Simplify your school asset management with our reliable and
              easy-to-use inventory system.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:w-1/3 grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-white">Product</h3>
              <ul>
                <li className="mb-2 hover:text-indigo-400 cursor-pointer">
                  Features
                </li>
                <li className="mb-2 hover:text-indigo-400 cursor-pointer">
                  Pricing
                </li>
                <li className="mb-2 hover:text-indigo-400 cursor-pointer">
                  How It Works
                </li>
                <li className="mb-2 hover:text-indigo-400 cursor-pointer">
                  Demo
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul>
                <li className="mb-2 hover:text-indigo-400 cursor-pointer">
                  About Us
                </li>
                <li className="mb-2 hover:text-indigo-400 cursor-pointer">
                  Contact
                </li>
                <li className="mb-2 hover:text-indigo-400 cursor-pointer">
                  Blog
                </li>
                <li className="mb-2 hover:text-indigo-400 cursor-pointer">
                  Careers
                </li>
              </ul>
            </div>
          </div>

          <div className="md:w-1/3">
            <h3 className="font-semibold mb-4 text-white">Contact Us</h3>
            <p className="mb-2">Email: support@schoolinventory.com</p>
            <p className="mb-6">Phone: +880 1999 165225</p>

            <div className="flex space-x-6 text-[#660000]  ">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-indigo-500 border border-gray-200 rounded-full p-2 transition"
              >
                <FaFacebookF size={30} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-indigo-500 border border-gray-200 rounded-full p-2 transition"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-indigo-500 border border-gray-200 rounded-full p-2 transition"
              >
                <FaLinkedinIn size={30} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-indigo-500 border border-gray-200 rounded-full p-2 transition"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm select-none">
          &copy; {new Date().getFullYear()} EduStock. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
