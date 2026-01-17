import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

/* ================= LOGO ================= */
const DevLogo = ({ scrolled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-10 h-10 transition-colors duration-300 ${
      scrolled ? "text-emerald-500" : "text-emerald-400"
    }`}
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

DevLogo.propTypes = {
  scrolled: PropTypes.bool.isRequired,
};

/* ================= NAVBAR ================= */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  /* Scroll state */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll to top */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* Route-aware scroll handler */
  const handleScrollTo = (id) => () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      document.querySelector(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-lg shadow-md"
          : "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <NavLink
          to="/"
          onClick={() => {
            if (location.pathname === "/") scrollToTop();
          }}
          className="flex items-center gap-2"
        >
          <DevLogo scrolled={scrolled} />
          <span
            className={`font-bold text-xl tracking-wide transition-colors ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            Sattam
          </span>
        </NavLink>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-10">
          <li>
            <NavLink
              to="/"
              onClick={() => {
                if (location.pathname === "/") scrollToTop();
              }}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-emerald-500"
                    : scrolled
                    ? "text-slate-700 hover:text-emerald-600"
                    : "text-slate-200 hover:text-cyan-400"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-emerald-500"
                    : scrolled
                    ? "text-slate-700 hover:text-emerald-600"
                    : "text-slate-200 hover:text-cyan-400"
                }`
              }
            >
              About Me
            </NavLink>
          </li>
        </ul>

        {/* DESKTOP CTA */}
        <button
          onClick={handleScrollTo("#contact")}
          className="hidden lg:inline-flex items-center gap-2 rounded-full
          bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-2 text-white font-semibold
          transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(16,185,129,0.7)]"
        >
          Hire Me
        </button>

        {/* MOBILE MENU */}
        <div className="lg:hidden dropdown dropdown-end">
          <button className="p-2 rounded-md hover:bg-white/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <ul className="menu menu-sm dropdown-content mt-3 p-4 w-52 bg-white/80 backdrop-blur-xl rounded-xl shadow-lg">
            <li>
              <NavLink
                to="/"
                onClick={() => {
                  if (location.pathname === "/") scrollToTop();
                }}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about">About Me</NavLink>
            </li>

            <li className="mt-2">
              <button
                onClick={handleScrollTo("#contact")}
                className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-white rounded-md py-2 w-full transition hover:scale-105"
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
