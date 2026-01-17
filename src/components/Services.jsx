// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import required modules
// import { Pagination } from 'swiper/modules';

// const Services = () => {
//     const serviceData = [
//       {
//         title: "React Web Development",
//         description:
//           "Crafting dynamic and user-centric interfaces using React, ensuring seamless and engaging user experiences.",
//         imageSrc: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//       },
//       {
//         title: "React Web Development",
//         description:
//           "Crafting dynamic and user-centric interfaces using React, ensuring seamless and engaging user experiences.",
//         imageSrc: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//       },
//       {
//         title: "React Web Development",
//         description:
//           "Crafting dynamic and user-centric interfaces using React, ensuring seamless and engaging user experiences.",
//         imageSrc: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//       },
//       {
//         title: "React Web Development",
//         description:
//           "Crafting dynamic and user-centric interfaces using React, ensuring seamless and engaging user experiences.",
//         imageSrc: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
//       },
//       // Add more service entries as needed
//     ];

//     return (
//       <div>
//         <div className="flex flex-col justify-center items-center gap-5 w-1/2 mx-auto bg-emerald-600 mt-20 mb-10 p-5">
//           <p className="text-sm font-medium bg-white p-2 rounded-lg">My Services</p>
//           <h2 className="text-2xl font-semibold mb-10  bg-white p-2 px-4 rounded-lg">What I Offer</h2>
//         </div>
//         <Swiper
//         slidesPerView={3}
//         spaceBetween={10}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <div className="flex justify-center gap-6">
//           {serviceData.map((service, index) => (
//             <SwiperSlide key={index}>
//               <div className="card w-96 bg-slate-400 hover:bg-slate-900 hover:text-slate-50 shadow-xl">
//                 <div className="avatar justify-center">
//                   <div className="w-24 rounded">
//                     <img src={service.imageSrc} alt={`Service ${index + 1}`} />
//                   </div>
//                 </div>
//                 <div className="card-body items-center text-center">
//                   <h2 className="card-title text-left text-xl font-medium mb-6">{service.title}</h2>
//                   <p className="text-justify">{service.description}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </div>
//         </Swiper>
//       </div>
//     );
//   };

//   export default Services;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Services = () => {
  const serviceData = [
    {
      title: "React Web Development",
      description:
        "Crafting dynamic and user-centric interfaces using React, ensuring seamless and engaging user experiences.",
      imageSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      title: "Node.js Backend Development",
      description:
        "Building robust and scalable backend solutions with Node.js, Express, and MongoDB.",
      imageSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing modern, responsive, and intuitive user interfaces that enhance user experience.",
      imageSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      title: "Full Stack Projects",
      description:
        "Integrating frontend and backend seamlessly to deliver complete web solutions.",
      imageSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ];

  // Framer Motion Variants
  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const headingVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.85, rotate: -3 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-slate-100">
      {/* Heading */}
      <motion.div
        className="flex flex-col justify-center items-center gap-5 w-11/12 md:w-1/2 mx-auto mb-16"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          variants={headingVariant}
          className="inline-flex items-center gap-2 text-lg font-semibold text-emerald-600
  px-10 py-4 rounded-full
  bg-white/60 backdrop-blur-md
  shadow-[0_0_20px_rgba(16,185,129,0.35)]"
        >
          <span className="w-4 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
          My Services
        </motion.p>

        <motion.h2
          variants={headingVariant}
          className="text-3xl md:text-4xl font-bold text-center text-slate-900"
        >
          What I Offer
        </motion.h2>
      </motion.div>

      {/* Services Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]} // <-- Add Autoplay here
        autoplay={{
          delay: 2500, // 2.5 seconds per slide
          disableOnInteraction: false, // continue autoplay after user interacts
        }}
        loop={true} // <-- Infinite loop
        className="max-w-7xl mx-auto px-6"
      >
        {serviceData.map((service, index) => (
          <SwiperSlide key={index}>
            <motion.div
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center
      transition-all duration-300 hover:scale-105 hover:shadow-xl h-full min-h-[260px] md:min-h-[280px]"
            >
              {/* Image */}
              <div className="w-20 h-20 rounded-full overflow-hidden mb-3 flex-shrink-0">
                <img
                  src={service.imageSrc}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold mb-1 text-slate-900 flex-shrink-0">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-sm text-slate-600 flex-grow">
                {service.description}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
