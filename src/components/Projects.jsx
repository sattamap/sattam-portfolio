import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const projectsData = [
  {
    image: "https://i.ibb.co.com/TB59Jfsm/bbsms5-imageonline-co-merged.png",
    liveLink: "https://bbsms-5a136.web.app",
    //codeLink: "https://github.com/sattamap/betar-central-store-sms-client",
  },
  {
    image: "https://i.ibb.co.com/ksY5ygYF/luxury-mermaid-151adc-netlify-app-Asus-Zenbook-Fold.png",
    liveLink: "https://luxury-mermaid-151adc.netlify.app/",
    //codeLink: "#",
  },
  {
    image: "https://i.ibb.co.com/8g9hK85H/nobleclick-netlify-app-Asus-Zenbook-Fold.png",
    liveLink: "https://nobleclick.netlify.app/",
    //codeLink: "#",
  },
  {
    image: "https://picsum.photos/600/1400?random=4",
    liveLink: "#",
    //codeLink: "#",
  },
];

// 🔹 Motion variants
const headingVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section className="py-20 bg-slate-50">
      {/* Heading */}
      <div className="text-center mb-16 max-w-5xl mx-auto px-4">
        <motion.p
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-lg font-semibold text-emerald-600
          px-10 py-4 rounded-full
          bg-white/60 backdrop-blur-md
          shadow-[0_0_20px_rgba(16,185,129,0.35)]
          mb-3"
        >
          <span className="w-4 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
          Projects
        </motion.p>

        <motion.h2
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-slate-900"
        >
          My Completed Projects
        </motion.h2>
      </div>

      {/* Swiper */}
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-xl bg-white"
              >
                {/* Fixed-height preview window */}
                <div className="h-[420px] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt="Project Preview"
                    className="w-full object-cover transform transition-transform duration-[4000ms] ease-linear group-hover:-translate-y-[60%]"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                  <a
                    href={project.liveLink}
                    className="px-6 py-2 rounded-full bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition"
                  >
                    Live Preview
                  </a>
                  {/* <a
                    href={project.codeLink}
                    className="px-6 py-2 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-200 transition"
                  >
                    Source Code
                  </a> */}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
