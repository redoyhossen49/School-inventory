import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const features = [
  {
    title: "Asset & Inventory Tracking",
    desc: "Easily track books, lab equipment, furniture, and school assets in one system.",
  },
  {
    title: "Real-Time Reports",
    desc: "Generate instant reports on usage, damage, and availability with one click.",
  },
  {
    title: "Role-Based Access",
    desc: "Admins, teachers, and staff get secure access based on their responsibilities.",
  },
  {
    title: "Loss Prevention",
    desc: "Reduce asset loss with proper tracking and accountability.",
  },
  {
    title: "Cloud Based System",
    desc: "Access inventory data anytime from anywhere securely.",
  },
  {
    title: "Easy Setup & Use",
    desc: "No technical skills needed. Setup your system in minutes.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-900 py-24 ">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <Typewriter
              words={[" Powerful Features Built for Schools"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={200}
              delaySpeed={2000}
              deleteSpeed={200}
            />
          </h2>
          <p className="mt-4 text-indigo-200 max-w-2xl mx-auto">
            Everything you need to manage your school inventory efficiently and
            securely.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/5 p-6 border border-white/10 hover:bg-indigo-500 hover:scale-105   transition"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-indigo-200 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
