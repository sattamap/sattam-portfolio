
import { MdDownload } from 'react-icons/md';
import Typewriter from 'typewriter-effect';

import img from '../assets/sattam_image.png';

const Banner = () => {
    const resumeLink = 'https://drive.google.com/uc?id=16FB6l4UdhihWulwhedmqslRAU4My4jJo';

    const handleDownload = () => {
        window.location.href = resumeLink;
    };



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-sm rounded-lg " alt="Profile" />
                    <div>
                        <h1 className="text-6xl font-bold">
                            Hello! I’m
                            <br />
                            Sattam Chakma
                        </h1>
                       <div className='flex items-center'>
                       <p className="py-6 mr-2 ">
                           
                       <span className='text-teal-700 text-base font-bold'>&lt;code&gt;</span> I love to
                       </p>
                       <Typewriter
                               options={{
                                   strings: [' website designing',' development', 'backend'],
                                   autoStart: true,
                                   loop: true,
                               }}
                           />
                              <p className="py-6 ml-2">
                           
                              <span className='text-teal-700 text-base font-bold'>&lt;/code&gt;</span>
                           </p>
                           
                       </div>

                        <button className="btn bg-emerald-600" onClick={handleDownload}>
                            Get Resume
                            <MdDownload />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
