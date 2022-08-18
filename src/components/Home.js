import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gray-700">
      <div className=" lg:pl-20 max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-2xl text-orange-500">Hello, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-400">
          Baburam Dahal
        </h1>
        <h2 className="text-2xl sm:text-5xl font-bold text-gray-500">
          I'm a Front End Developer
        </h2>
        <p className="text-gray-300 py-3 max-w-[500px]">
          I'm a Front End Developer responsible for designing and building
          responsive web applications.
        </p>
        <div>
          <button className="text-gray-300 border-2 px-6 py-3  rounded-lg hover:bg-[#333333] hover:border-[#333333]">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
