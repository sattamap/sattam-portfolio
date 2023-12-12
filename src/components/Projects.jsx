import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
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
              <div className="flex flex-col justify-center items-center gap-5 w-1/2 mx-auto bg-emerald-600 mt-20 mb-10 p-5">
          <p className="text-sm font-medium bg-white p-2 rounded-lg">Projects</p>
          <h2 className="text-2xl font-semibold mb-10  bg-white p-2 px-4 rounded-lg">My Completed Projects</h2>
        </div>
          
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        loop= {true}
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





