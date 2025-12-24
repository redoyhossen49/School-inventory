import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className=" py-8 px-6 bg-slate-600   md:px-20 ">
      <div className="max-w-4xl mx-auto text-center rounded-2xl  p-4">
        <h2 className="inline-block  bg-black text-4xl mb-8  font-extrabold px-8 py-2 border-4 text-gray-200  rounded-full   shadow-lightShadow animate-borderColorChange">
          Get in Touch
        </h2>
        <p className=" text-gray-200 mb-10 text-lg md:text-xl">
          We are currently open to opportunities and collaborations. Fill out
          the form below or connect with us on social media.
        </p>
        <div className="bg-gray-600 max-w-4xl mx-auto   rounded-2xl shadow-xl p-8">
          <h2 className="text-gray-100 text-4xl font-extrabold  mb-8">
            Contact Us
          </h2>
          {/* Success Message */}
          {submitted && (
            <p className="mb-6 text-green-600 font-semibold text-center animate-fade-in">
              ✅ Thank you! Your message has been sent.
            </p>
          )}

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xrbyallp"
            method="POST"
            className="grid grid-cols-1 gap-6   "
            onSubmit={() => setSubmitted(true)}
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your full name"
              className="w-full md:w-1/2 mx-auto rounded-lg text-white bg-gray-500 hover:bg-white hover:text-black  border border-gray-300 px-4 py-3  focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full md:w-1/2 mx-auto rounded-lg border text-white bg-gray-500 hover:bg-white hover:text-black  border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />

            <textarea
              name="message"
              rows="6"
              required
              placeholder="Write your message here..."
              className="w-full md:w-1/2 mx-auto rounded-lg bg-gray-500 text-white   border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />

            <button
              type="submit"
              className="w-[200px] mx-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12 text-2xl text-blue-600">
            <a
              href="https://github.com/hridoy000111"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://fiverr.com/hridoy000111"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <SiFiverr />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
