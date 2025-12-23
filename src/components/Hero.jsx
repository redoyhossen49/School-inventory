import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section
      className="relative  w-full py-28 overflow-hidden bg-gradient-to-br from-[#550000] via-[#110000] to-[#000000]
 flex items-center"
    >
      <div className="absolute top-[-120px] left-[-120px] h-[320px] w-[320px]  " />
      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] " />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-5 rounded-full bg-white px-4 py-1 text-sm font-medium text-indigo-600 cursor-pointer">
              🎓 Built for Schools & Institutions
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-white">
              A Smarter Way to <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                <Typewriter
                  words={["Manage School Inventory"]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={500}
                  delaySpeed={2000}
                  deleteSpeed={200}
                />
              </span>
            </h1>

            <p className="mt-6 text-lg text-indigo-200 max-w-xl">
              Track books, lab equipment, furniture, and assets effortlessly.
              Prevent losses, generate reports, and control everything from one
              secure dashboard.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-indigo-200">
              <span>✔ Asset Tracking</span>
              <span>✔ Real-Time Reports</span>
              <span>✔ Role-Based Access</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-indigo-500 px-7 py-3 font-semibold text-white shadow-lg hover:bg-indigo-600 transition">
                Start Free Trial
              </button>

              <button className="rounded-xl border border-white/20 px-7 py-3 font-semibold text-indigo-200 hover:bg-white/10 transition">
                Request Demo
              </button>
            </div>

            <p className="mt-3 text-sm text-indigo-300">
              No credit card required • Setup in 5 minutes
            </p>

            <div className="mt-6 text-sm text-indigo-300">
              ⭐⭐⭐⭐⭐ Trusted by school administrators
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: "0 10px 20px rgba(99, 102, 241, 0.4)",
              filter: "brightness(1.1)",
            }}
            className="relative cursor-pointer"
          >
            <div className="absolute -top-6 -left-6 h-full w-full rounded-3xl bg-indigo-500/30" />

            <img
              src="/images/school-image.jpg"
              alt="Inventory Dashboard"
              className="relative z-10 rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
