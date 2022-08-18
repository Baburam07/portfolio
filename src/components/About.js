import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gray-700 text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-orange-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right lg:pl-20 text-3xl font-bold">
            <p>Hello, I'm Baburam. Please have a look at my portfolio.</p>
          </div>
          <div>
            <p>
              I'm passionate about building excellent software for clients
              ranging from individuals and small-businessess.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
