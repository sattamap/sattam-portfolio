import { motion } from "framer-motion";
import img from "../../assets/sattam_image.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  // Navigate to Home page and scroll to contact
  const handleContactClick = () => {
    navigate("/", { state: { scrollTo: "#contact" } });
  };

  return (
    <section
      id="about"
      className="py-24 bg-slate-100 dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-500 blur-2xl opacity-30"></div>
            <img
              src={img}
              alt="Sattam Chakma"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
            />
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading with pulse dot */}
          <motion.p
            className="inline-flex items-center gap-2 text-lg font-semibold text-emerald-600
            px-10 py-5 rounded-full
            bg-white/60 backdrop-blur-md
            shadow-[0_0_20px_rgba(16,185,129,0.35)]
            mb-4"
          >
            <span className="w-4 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
            About Me
          </motion.p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Passionate Web Developer
          </h2>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            Hello, I am <strong>Sattam Chakma</strong>, a passionate and dedicated
            web developer. After completing a comprehensive web development
            course, I developed a strong foundation in modern web technologies
            and a keen eye for crafting seamless digital experiences.
          </p>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
            I specialize in <strong>HTML5, CSS3, JavaScript (ES6)</strong> and
            <strong> React JS</strong> for building dynamic, responsive user
            interfaces. I also work extensively with modern tools like
            <strong> Tailwind CSS</strong> and <strong>DaisyUI</strong> to deliver
            clean, efficient, and visually appealing solutions.
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              "HTML5",
              "CSS3",
              "JavaScript (ES6)",
              "React",
              "Tailwind CSS",
              "DaisyUI",
              "Node.js",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm font-medium rounded-full
                bg-gradient-to-r from-emerald-400 to-cyan-500 text-white shadow-md"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={handleContactClick}
            className="inline-flex items-center gap-2 rounded-full
            bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-3
            text-white font-semibold transition-all duration-300
            hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)]"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
