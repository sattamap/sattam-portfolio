import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Services = () => {
    const serviceData = [
      {
        title: "React Web Development",
        description:
          "Crafting dynamic and user-centric interfaces using React, ensuring seamless and engaging user experiences.",
        imageSrc: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      },
      {
        title: "React Web Development",
        description:
          "Crafting dynamic and user-centric interfaces using React, ensuring seamless and engaging user experiences.",
        imageSrc: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      },
      {
        title: "React Web Development",
        description:
          "Crafting dynamic and user-centric interfaces using React, ensuring seamless and engaging user experiences.",
        imageSrc: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      },
      {
        title: "React Web Development",
        description:
          "Crafting dynamic and user-centric interfaces using React, ensuring seamless and engaging user experiences.",
        imageSrc: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      },
      // Add more service entries as needed
    ];
  
    return (
      <div>
        <div className="flex flex-col justify-center items-center gap-5 w-1/2 mx-auto bg-emerald-600 mt-20 mb-10 p-5">
          <p className="text-sm font-medium bg-white p-2 rounded-lg">My Services</p>
          <h2 className="text-2xl font-semibold mb-10  bg-white p-2 px-4 rounded-lg">What I Offer</h2>
        </div>
        <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="flex justify-center gap-6">
          {serviceData.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="card w-96 bg-slate-400 hover:bg-slate-900 hover:text-slate-50 shadow-xl">
                <div className="avatar justify-center">
                  <div className="w-24 rounded">
                    <img src={service.imageSrc} alt={`Service ${index + 1}`} />
                  </div>
                </div>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-left text-xl font-medium mb-6">{service.title}</h2>
                  <p className="text-justify">{service.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
        </Swiper>
      </div>
    );
  };
  
  export default Services;
  