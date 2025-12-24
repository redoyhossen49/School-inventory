import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Add Assets",
    description:
      "Quickly add books, lab equipment, furniture, and other school items to your inventory database.",
    icon: (
      <svg
        className="w-10 h-10 text-indigo-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Assign & Track",
    description:
      "Assign assets to staff or departments and track usage status in real-time through the dashboard.",
    icon: (
      <svg
        className="w-10 h-10 text-indigo-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h2l3 3-3 3H3v-6zm6 0h12v6H9v-6z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Generate Reports",
    description:
      "Create detailed reports on asset conditions, usage, and losses to make informed decisions.",
    icon: (
      <svg
        className="w-10 h-10 text-indigo-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17v-4H5v4m6-10h4v10h-4z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Make Decisions",
    description:
      "Use insights from reports to optimize inventory management and reduce losses.",
    icon: (
      <svg
        className="w-10 h-10 text-indigo-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function Works() {
  return (
    <section
      id="works"
      className="bg-gradient-to-br from-[#000055] via-[#001100] to-[#000000] py-24 "
    >
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
        <p className="text-indigo-300 max-w-2xl mx-auto mb-16">
          A simple, four-step process to manage your school inventory
          efficiently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map(({ id, title, description, icon }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-600 bg-opacity-40 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center hover:scale-105 hover:text-red-400 transition"
            >
              <div className="mb-5">{icon}</div>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className=" text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
