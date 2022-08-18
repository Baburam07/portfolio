import React from "react";
import KIDS from "../images/kids.png";
import SHOES from "../images/shoes.jpg";
import CART from "../images/cart.png";
import BEAUTY from "../images/beauty.jpg";
import STORM from "../images/storm.jpg";
import LOAF from "../images/loaf.jpg";

function Work() {
  return (
    <div name="work" className="w-full md:h-screen bg-gray-700 text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-4 lg:ml-16">
          <p className="text-4xl font-bold inline border-b-4 border-orange-500">
            Work
          </p>
          <p className="py-4">My Recent Works:</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:px-16">
          <div
            style={{ backgroundImage: `url(${STORM})` }}
            className="shadow-lg shadow-black group container mx-auto rounded-md flex justify-center items-center content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-orange-500">
                ReactJs Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${SHOES})` }}
            className="shadow-lg shadow-black group container mx-auto rounded-md flex justify-center items-center content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-orange-500">
                ReactJs Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${LOAF})` }}
            className="shadow-lg shadow-black group container mx-auto rounded-md flex justify-center items-center content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-orange-500">
                ReactJs Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${BEAUTY})` }}
            className="shadow-lg shadow-black group container mx-auto rounded-md flex justify-center items-center content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-orange-500">
                ReactJs Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${CART})` }}
            className="shadow-lg shadow-black group container mx-auto rounded-md flex justify-center items-center content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-orange-500">
                ReactJs Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${KIDS})` }}
            className="shadow-lg shadow-black group container mx-auto rounded-md flex justify-center items-center content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-orange-500">
                ReactJs Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
