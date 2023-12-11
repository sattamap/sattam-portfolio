import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const projectsData = [
    { image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg", liveLink: "#your-first-link", codeLink: "#your-first-code-link" },
    { image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg", liveLink: "#your-second-link", codeLink: "#your-second-code-link" },
    { image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg", liveLink: "#your-third-link", codeLink: "#your-third-code-link" },
    { image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg", liveLink: "#your-third-link", codeLink: "#your-third-code-link" },
    { image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg", liveLink: "#your-third-link", codeLink: "#your-third-code-link" },
    { image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg", liveLink: "#your-third-link", codeLink: "#your-third-code-link" },
];

const Projects = () => {
    return (
        <div className="mb-20">
            <div className="flex flex-col justify-center items-center gap-5 mt-20">
                <p className="text-xs font-thin">Projects</p>
                <h2 className="text-2xl font-semibold mb-10">My Completed Projects</h2>
            </div>
            <Swiper
        slidesPerView={4}
        spaceBetween={15}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
        
      >
            <div className="flex justify-center gap-5">
                {projectsData.map((project, index) => (
                    <SwiperSlide key={index}  className="relative w-96 overflow-hidden">
                   
                        <div className="group">
                            <figure>
                                <img
                                    src={project.image}
                                    alt="Shoes"
                                    className="rounded-xl object-cover transition-transform transform group-hover:scale-110"
                                />
                            </figure>
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-95">
                                <a
                                    href={project.liveLink}
                                    className="btn btn-primary mb-2 transition-transform ease-in-out duration-1000 hover:translate-y-0"
                                >
                                    Live Link
                                </a>
                                <a
                                    href={project.codeLink}
                                    className="btn btn-secondary transition-transform ease-in-out duration-1000 hover:translate-y-0"
                                >
                                    Code Link
                                </a>
                            </div>
                        </div>
                    
                </SwiperSlide>
                ))}
            </div>
            </Swiper>
        </div>
    );
};

export default Projects;





