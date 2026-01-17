import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

// Demo logo as SVG for web development
const DevLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 text-emerald-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 18l6-6-6-6M8 6l-6 6 6 6"
    />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <DevLogo />
          <p className="text-sm text-gray-300 text-center md:text-left">
            Sattam Portfolio <br /> Web Development & UI/UX
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-3xl text-slate-300">
          <a
            href="https://github.com/sattamap"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sattam-chakma-3ab64396"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/sattamchakma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-700 my-6"></div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Sattam Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
