import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Projects from "../../components/Projects";
import Qualification from "../../components/Qualification";
import Services from "../../components/Services";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      // Scroll to the element after page load
      setTimeout(() => {
        const el = document.querySelector(location.state.scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // slight delay to ensure element exists
    }
  }, [location]);

  return (
    <div>
      <Banner />
      <Services />
      <Qualification />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
