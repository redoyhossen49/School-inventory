import { motion } from "framer-motion";

// নতুন icon গুলো Heroicons (popular, clean)
const benefits = [
  {
    id: 1,
    title: "Save Time & Effort",
    description:
      "Automate inventory tracking and reporting, freeing up time for more important tasks.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-indigo-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Reduce Asset Loss",
    description:
      "Track every item accurately to prevent misplacement or theft within your institution.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-indigo-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Improve Transparency",
    description:
      "Maintain clear records and audit trails for all assets, accessible by authorized personnel.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-indigo-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c1.104 0 2 .895 2 2s-.896 2-2 2-2-.895-2-2 .896-2 2-2z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Make Data-Driven Decisions",
    description:
      "Leverage real-time reports and analytics to optimize inventory management strategies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-indigo-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17v-4H5v4m6-10h4v10h-4z"
        />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="bg-indigo-50 dark:bg-gray-900 py-24 transition-colors duration-500 "
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 dark:text-indigo-400 mb-6">
          Why Choose Our School Inventory System?
        </h2>
        <p className="text-indigo-700 dark:text-indigo-300 max-w-2xl mx-auto mb-16">
          Empower your institution with benefits that streamline asset
          management and enhance operational efficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map(({ id, title, description, icon }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl flex flex-col items-center text-indigo-900 dark:text-indigo-200 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300"
            >
              <div className="mb-6">{icon}</div>
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <p className="text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
