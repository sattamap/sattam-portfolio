import { MdDownload } from "react-icons/md";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import img from "../assets/sattam_image.png";

const floatingIcons = [
  { icon: <SiHtml5 className="text-orange-500" />, size: 1.5 },
  { icon: <SiCss3 className="text-blue-500" />, size: 1.5 },
  { icon: <SiJavascript className="text-yellow-400" />, size: 1.5 },
  { icon: <SiReact className="text-cyan-400" />, size: 1.5 },
  { icon: <SiTailwindcss className="text-sky-400" />, size: 1.5 },
  { icon: <SiMongodb className="text-green-400" />, size: 1.5 },
  { icon: <SiNextdotjs className="text-black-200" />, size: 1.5 },
];

const Banner = () => {
  const resumeLink =
    "https://drive.google.com/uc?id=16FB6l4UdhihWulwhedmqslRAU4My4jJo";

  const handleDownload = () => {
    window.open(resumeLink, "_blank", "noopener,noreferrer");
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const nameVariant = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.92, y: 30, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: "easeOut", delay: 0.6 },
    },
  };

  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  // Generate fixed positions
  const iconPositions = [
    { top: "10%", left: "15%" },
    { top: "20%", left: "65%" },
    { top: "40%", left: "20%" },
    { top: "65%", left: "60%" },
    { top: "65%", left: "20%" },
    { top: "38%", left: "70%" },
    { top: "1%", left: "55%" },
    
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-16"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <motion.span variants={textVariant} className="block">
              Hello! I’m
            </motion.span>
            <motion.span
              variants={nameVariant}
              className="block font-name tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent"
            >
              Sattam Chakma
            </motion.span>
          </motion.h1>

          <motion.p
            variants={textVariant}
            className="mt-6 text-lg text-slate-300 max-w-xl mx-auto lg:mx-0"
          >
            Web Developer | React, Tailwind CSS, Node.js | Modern UI &
            Full-Stack Apps
          </motion.p>

          {/* TYPEWRITER */}
          <motion.div
            variants={textVariant}
            className="mt-6 flex justify-center lg:justify-start items-center gap-2 text-lg font-mono"
          >
            <span className="text-emerald-400">&lt;code&gt;</span>
            <Typewriter
              options={{
                strings: [
                  "I build responsive websites",
                  "I develop full-stack apps",
                  "I design modern UI",
                  "I love clean code & performance",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
            <span className="text-emerald-400">&lt;/code&gt;</span>
          </motion.div>

          {/* CTA BUTTON */}
          <motion.div
            variants={textVariant}
            className="mt-10 flex justify-center lg:justify-start"
          >
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-full
              bg-gradient-to-r from-emerald-400 to-cyan-500 px-8 py-3 font-semibold text-white
              transition-all duration-300
              hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)]"
            >
              Get Resume
              <MdDownload className="text-xl" />
            </button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={imageVariant}
          className="flex-1 flex justify-center relative"
        >
          <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px]">
            {/* Morphing Blob */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400 via-teal-400 to-cyan-500 blur-2xl opacity-40 animate-blob"></div>

            {/* Glow */}
            <div className="absolute inset-8 rounded-full bg-emerald-400 blur-3xl opacity-30 animate-pulseSoft"></div>

            {floatingIcons.map((item, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: iconPositions[i].top,
                  left: iconPositions[i].left,
                  fontSize: `${item.size}rem`,
                  zIndex: 20,
                }}
                animate={{
                  y: [0, -10, 0],
                  x: [0, 10, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 5 + Math.random() * 3,
                  ease: "easeInOut",
                }}
              >
                {item.icon}
              </motion.div>
            ))}

            {/* Image */}
            <img
              src={img}
              alt="Sattam Chakma"
              className="relative z-10 mx-auto w-60 h-60 md:w-72 md:h-72 
                object-cover rounded-full border-4 border-white shadow-2xl animate-float"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
