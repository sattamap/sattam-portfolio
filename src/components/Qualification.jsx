import { motion } from "framer-motion";
import "swiper/css";

const Qualification = () => {
  const educationData = [
    {
      degree:
        "M. Sc. in Applied Physics, Electronics & Communication Engineering",
      university: "University of Dhaka",
      duration: "Jun 2010 - Aug 2011",
    },
    {
      degree:
        "B. Sc. in Applied Physics, Electronics & Communication Engineering",
      university: "University of Dhaka",
      duration: "Jul 2006 - Feb 2010",
    },
  ];

  const courseData = [
    {
      course: "Complete Web Development Course",
      institution: "Programming Hero, Online",
      duration: "Jun 2023 - Present",
    },
    {
      course: "Web Development Course with PHP",
      institution: "New Horizon, Chittagong, Onsite",
      duration: "Sep 2020 - Dec 2020",
    },
  ];

  const skillsData = {
    Expertise: [
      "HTML5",
      "CSS3",
      "JavaScript: ES6",
      "React JS",
      "Tailwind CSS",
      "DaisyUI",
    ],
    Comfortable: [
      "Node JS",
      "Express JS",
      "MongoDB",
      "RESTful API",
      "Axios",
      "Tanstack Query",
      "JWT",
      "Bootstrap",
    ],
    Familiar: [
      "Material UI",
      "Mongoose",
      "Next JS",
      "Payment Gateway (Stripe)",
      "PHP",
      "MYSQL",
      "Python",
      "Django",
    ],
    Tools: ["Github", "Firebase", "Vercel", "Netlify", "Surge", "VS Code"],
  };

  const timelineVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-slate-50">
      {/* Heading */}
      <motion.div
        className="text-center mb-16 max-w-5xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          variants={timelineVariant}
          className="inline-flex items-center gap-2 text-lg font-semibold text-emerald-600
  px-10 py-4 rounded-full
  bg-white/60 backdrop-blur-md
  shadow-[0_0_20px_rgba(16,185,129,0.35)]
  mb-3"
        >
          <span className="w-4 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
          Qualification
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-slate-900"
          variants={timelineVariant}
        >
          Education, Courses & Skills
        </motion.h2>
      </motion.div>

      {/* Education & Courses Timeline */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Education */}
        <div className="relative">
          <h3 className="text-xl font-bold text-slate-800 mb-8 border-b-2 border-emerald-400 pb-2">
            Education
          </h3>
          <div className="relative border-l-2 border-emerald-300 pl-8">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                className={`mb-12 relative ${
                  idx % 2 === 0 ? "lg:ml-0" : "lg:ml-8"
                }`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="absolute -left-5 top-2 w-4 h-4 bg-emerald-600 rounded-full border-2 border-white"></span>
                <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all">
                  <h4 className="text-lg font-semibold text-slate-900">
                    {edu.degree}
                  </h4>
                  <p className="text-slate-600">{edu.university}</p>
                  <p className="text-slate-500 text-sm">{edu.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div className="relative">
          <h3 className="text-xl font-bold text-slate-800 mb-8 border-b-2 border-cyan-400 pb-2">
            Courses
          </h3>
          <div className="relative border-l-2 border-cyan-300 pl-8">
            {courseData.map((course, idx) => (
              <motion.div
                key={idx}
                className={`mb-12 relative ${
                  idx % 2 === 0 ? "lg:ml-0" : "lg:ml-8"
                }`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="absolute -left-5 top-2 w-4 h-4 bg-cyan-600 rounded-full border-2 border-white"></span>
                <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all">
                  <h4 className="text-lg font-semibold text-slate-900">
                    {course.course}
                  </h4>
                  <p className="text-slate-600">{course.institution}</p>
                  <p className="text-slate-500 text-sm">{course.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      {/* Skills Section */}
      <div className="mt-20 max-w-5xl mx-auto px-4">
        <h3 className="text-xl font-bold text-slate-800 mb-8 text-center border-b-2 border-emerald-400 pb-2">
          Skills
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {Object.entries(skillsData).map(([category, skills], idx) => {
            const rotationY = (Math.random() - 0.5) * 10; // slight 3D tilt
            const rotationX = (Math.random() - 0.5) * 5;

            return (
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  y: 40,
                  rotateY: rotationY,
                  rotateX: rotationX,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateY: rotationY,
                  rotateX: rotationX,
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-start transform perspective-1000"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Two Nails */}
                <div className="absolute top-2 left-1/4 w-3 h-3 bg-gray-700 rounded-full shadow-md"></div>
                <div className="absolute top-2 right-1/4 w-3 h-3 bg-gray-700 rounded-full shadow-md"></div>

                {/* Card Title */}
                <h4 className="text-lg font-semibold text-slate-900 mb-4 text-center">
                  {category}
                </h4>

                {/* Skills */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{
                        scale: 1.1,
                        rotateY: 5,
                        rotateX: 3,
                        boxShadow: "0 0 15px rgba(16, 185, 129, 0.6)",
                      }}
                      className="px-3 py-2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white rounded-full text-sm font-medium cursor-pointer transition-all duration-300"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
