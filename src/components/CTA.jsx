import { motion } from "framer-motion";

export default function CTA() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  return (
    <section className="bg-gradient-to-r from-indigo-100 via-purple-600 to-pink-100 py-20">
      <motion.div
        className="container mx-auto px-6 text-center text-white max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg"
          variants={itemVariants}
        >
          Simplify Your School Inventory Management Today
        </motion.h2>

        <motion.p
          className="mb-8 text-lg md:text-xl font-light drop-shadow-md"
          variants={itemVariants}
        >
          Get started with a free trial and experience seamless tracking,
          reporting, and control.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <motion.a
            href="/signup"
            className="px-8 py-4 bg-white text-indigo-700 font-semibold rounded-full shadow-lg"
            whileHover={buttonHover}
          >
            Get Started Free
          </motion.a>

          <motion.a
            href="/contact"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full"
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            Contact Sales
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
