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

const StarRating = ({ count }) => (
  <div className="flex justify-center mt-3 text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < count ? "fill-current" : "text-gray-300"}`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.962c.3.921-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.784.57-1.838-.197-1.54-1.118l1.287-3.962a1 1 0 00-.364-1.118L2.046 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.962z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-r from-gray-50 via-yellow-200 to-red-100 overflow-hidden "
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Trusted by Schools Nationwide
        </h2>

        <div className="md:hidden overflow-x-auto scrollbar-hide">
          <motion.div
            drag="x"
            dragConstraints={{ left: -600, right: 0 }}
            className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
          >
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </motion.div>
        </div>

        <div className="hidden md:block overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, school, feedback, rating }) {
  return (
    <div className=" w-[85vw]  md:min-w-[420px] max-w-md bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
      <p className="italic text-gray-700 max-w-2xl leading-relaxed">
        “{feedback}”
      </p>

      <div className="mt-6 text-center">
        <h4 className="font-semibold text-indigo-600">{name}</h4>
        <p className="text-sm text-gray-500">
          {role}, {school}
        </p>
        <StarRating count={rating} />
      </div>
    </div>
  );
}
