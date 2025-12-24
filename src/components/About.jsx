import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-gray-500 via-orange-300 to-slate-200 py-24 "
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl font-bold tracking-wide text-white ">
              About Us
            </h1>

            <h2 className="mt-3 text-3xl  font-bold text-gray-900 leading-tight">
              Built for Schools. <br className="hidden sm:block" />
              Designed for Simplicity.
            </h2>

            <p className="mt-6 text-black text-lg hover:scale-105 hover:text-pink-600 transition">
              <strong>Edustock</strong> is a modern inventory management system
              designed specifically for schools to track, manage, and protect
              their assets with ease.
            </p>

            <p className="mt-4 text-black text-lg hover:scale-105 hover:text-red-700 transition">
              From classrooms to laboratories, our platform replaces manual
              records and spreadsheets with a secure digital solution—helping
              schools save time, reduce losses, and maintain accurate inventory
              records.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Purpose-built for schools & educational institutions",
                "Easy to use for administrators and teachers",
                "Accurate tracking with real-time updates",
                "Secure, reliable, and accessible from any device",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FiCheckCircle className="mt-1 text-indigo-600 w-5 h-5" />
                  <span className="text-black text-lg hover:scale-105 hover:text-blue-600 transition ">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl bg-white shadow-2xl p-6 hover:scale-105 transition">
              <img
                src="/images/about-image.webp"
                alt="School Inventory Dashboard Preview"
                className="rounded-2xl w-full"
              />
            </div>

            {/* Decorative blur */}
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-50" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
