import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/Profile 2.png";

const About = () => {
  return (
    <section
      id="about"
      className=" py-4 px-[7vw] md:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-20"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/*Left Side Content*/}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/*Greeting*/}
          <h1 className="text-3xl sm:text-5xl md:text-4xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Kushal Pradhan
          </h2>
          {/* */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a </span>

            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                1000,
                "App Developer",
                1000,
                "Coder",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#8245ec]"
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mt-8 mb-10 leading-relaxed">
            I am a full-stack developer with over 2 years of experience in
            building scalable web applicatons. Skilled in both front-end and
            back-end developement, I specialize Coding designing and creation
            technologies to create seamless user experience and efficient
            solutions.
          </p>
          {/* Resume Buttom */}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white rounded-full py-3 px-8 mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            Download CV
          </a>
        </div>
        {/* Right Side Content */}
        <div className="md:v-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-full sm:w-64 sm:h-64 md:h-[30rem] md:w-[30rem] border-3 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Kushal Pradhan"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
