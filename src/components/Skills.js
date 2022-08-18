import React from "react";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import JavaScript from "../images/javascript.png";
import Python from "../images/python.png";
import ReactJs from "../images/react.png";
import NextJs from "../images/next.png";
import Tailwind from "../images/tailwind.png";
import Github from "../images/github.png";

const Skills = () => {
  return (
    <div name="skill" className="w-full h-screen bg-gray-700 text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline lg:mx-16 border-b-4 border-orange-500">
            Skills
          </p>
          <p className="py-4 lg:px-16">Technologies I've worked with:</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 lg:px-16">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="p-1 w-16 mx-auto" src={HTML} alt="HTML" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="p-1 w-16 mx-auto" src={CSS} alt="HTML" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="p-1 w-16 mx-auto" src={JavaScript} alt="HTML" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="p-1 w-16 mx-auto" src={Tailwind} alt="HTML" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="p-1 w-16 mx-auto" src={ReactJs} alt="HTML" />
            <p className="my-4">REACTJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="p-1 w-16 mx-auto" src={NextJs} alt="HTML" />
            <p className="my-4">NEXTJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="p-1 w-16 mx-auto" src={Python} alt="HTML" />
            <p className="my-4">PYTHON</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="p-1 w-16 mx-auto" src={Github} alt="HTML" />
            <p className="my-4">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
