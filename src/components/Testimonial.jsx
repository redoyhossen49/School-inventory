import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Abdul Karim",
    role: "School Administrator",
    school: "Green Valley School",
    feedback:
      "Managing school assets was chaotic before. This system helped us track everything accurately and reduced losses significantly.",
    rating: 5,
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Vice Principal",
    school: "Sunrise High School",
    feedback:
      "Very easy to use and extremely helpful. Our inventory reports are now ready in minutes instead of days.",
    rating: 5,
  },
  {
    id: 3,
    name: "Md. Hasan",
    role: "Lab Incharge",
    school: "City Model School",
    feedback:
      "Tracking lab equipment has never been this simple. Highly recommended for schools.",
    rating: 5,
  },
];

const StarRating = ({ count }) => {
  return (
    <div className="flex justify-center mt-3 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? "fill-current" : "text-gray-300"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.962c.3.921-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.784.57-1.838-.197-1.54-1.118l1.287-3.962a1 1 0 00-.364-1.118L2.046 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.962z" />
        </svg>
      ))}
    </div>
  );
};

export default function TestimonialsMarquee() {
  return (
    <section className="bg-white dark:bg-gray-900 py-24 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          What Our Clients Say
        </h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...testimonials, ...testimonials].map(
              ({ id, name, role, school, feedback, rating }, i) => (
                <div
                  key={`${id}-${i}`}
                  className=" min-w-[300px] md:min-w-[420px] bg-gray-100 dark:bg-gray-800 rounded-3xl p-8 shadow-lg flex flex-col justify-between cursor-pointer"
                >
                  <p className="text-gray-800 dark:text-gray-200 italic leading-relaxed">
                    “{feedback}”
                  </p>

                  <div className="mt-6 text-center">
                    <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">
                      {name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {role}, {school}
                    </p>
                    <StarRating count={rating} />
                  </div>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
