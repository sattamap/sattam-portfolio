

const Qualification = () => {
    // Skills data
    const skillsData = {
        Expertise: ["HTML5", "CSS3", "JavaScript: ES6", "React JS", "Tailwind CSS", "DaisyUI"],
        Comfortable: ["Node JS", "Express JS", "MongoDB", "RESTful API", "Axios", "Tanstack Query", "JWT", "Bootstrap"],
        Familiar: ["Material UI", "Mongoose", "Next JS", "Payment Gateway (Stripe)", "PHP", "MYSQL", "Python", "Django"],
        Tools: ["Github", "Firebase", "Vercel", "Netlify", "Surge", "VS Code"],
    };
    const educationData = [
        {
            degree: "M. Sc. in Applied Physics, Electronics & Communication Engineering",
            university: "University of Dhaka",
            duration: "Jun 2010 - Aug 2011"
        },
        {
            degree: "B. Sc. in Applied Physics, Electronics & Communication Engineering",
            university: "University of Dhaka",
            duration: "Jul 2006 - Feb 2010"
        }
        // Add more education entries as needed
    ];

    return (
      <div>
           <div className="flex flex-col justify-center items-center gap-5 mt-20">
                <p className="text-xs font-thin ">Qualification</p>
                <h2 className="text-2xl font-semibold mb-10">Education, Courses and Skills</h2>
            </div>
          <div className="flex flex-row gap-5 mt-20 ">
            <div className="w-1/2">
            <div className="bg-teal-800 w-1/6 text-center rounded-xl">
            <h2 className="text-xl text-white font-bold mb-10 p-2">Education</h2>
            </div>
                <div className="border shadow-2xl p-4">
                {educationData.map((education, index) => (
                <div key={index} className="indicator ">
                    <span className="indicator-item indicator-start badge badge-secondary"></span>
                    <div className="mb-6 border-l border-l-red-700 pl-5">
                        <div className="mt-3">
                            <h3 className="text-lg font-semibold">{education.degree}</h3>
                            <p className="text-gray-600">{education.university}</p>
                            <p className="text-gray-600">{education.duration}</p>
                        </div>
                    </div>
                </div>
            ))}
                </div>
            </div>
   
            {/* Skills Section */}


           


           <div className="w-1/2" >
           <div className="bg-teal-800 w-1/6 text-center rounded-xl">
            <h2 className="text-xl text-white font-bold mb-10 p-2">Courses</h2>
            </div>
          <div className="border shadow-2xl p-4">
          <div className="indicator">
                <span className="indicator-item indicator-start badge badge-secondary"></span>

                <div className="mb-6 border-l border-l-red-700 pl-5">

                    <div className="mt-3">
                        <h3 className="text-lg font-semibold">Complete Web Development Course</h3>
                        <p className="text-gray-600">Programming Hero, Online</p>
                        <p className="text-gray-600">Jun 2023 - Present</p>
                    </div>
                </div>
            </div>
          </div>

           </div>

          
        </div>

        <div>
        <div className="bg-teal-800 w-1/6 mx-auto rounded-xl mt-10">
            <h2 className="text-xl text-white font-bold text-center mb-10 p-2">Skills</h2>
            </div>
           <div className="border shadow-2xl w-2/3 mx-auto p-4">
           <div className="flex justify-center gap-10 mt-3 ">
                {Object.entries(skillsData).map(([category, skills], index) => (
                    <div key={index}>
                        <div className="indicator">
                            <span className="indicator-item indicator-start badge badge-secondary"></span>
                            <div className="mb-6 border-l border-l-red-700 pl-5">
                                <h3 className="text-lg font-semibold">{category}</h3>
                                <ul className="list-disc pl-4">
                                    {skills.map((skill, skillIndex) => (
                                        <li key={skillIndex} className="mb-1">{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
           </div>

           </div>

      </div>
        
    );
};

export default Qualification;







{/* 
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Diploma in Arts</h3>
        <p className="text-gray-600">Envato Academy</p>
        <p className="text-gray-600">Jan 2012 - Dec 2015</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">UI Design Intensive</h3>
        <p className="text-gray-600">Oxford University</p>
        <p className="text-gray-600">Sep 2016 - May 2018</p>
      </div> */}