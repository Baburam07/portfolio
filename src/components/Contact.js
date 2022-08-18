import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_l3hblfm",
      "template_749jg9s",
      form.current,
      "wUl5c-3GYK0qVBQts"
    );
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gray-700 text-gray-300 flex justify-center items-center p-4"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-orange-500">
            Contact
          </p>
          <p className="py-4">Submit the form or email at xyz@gmail.com</p>
        </div>
        <input
          className="p-2 bg-[#b6c3f0] text-black"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#b6c3f0] text-black"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-[#b6c3f0] text-black"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className=" border-2 px-4 py-3 my-5 flex mx-auto items-center rounded-lg hover:bg-[#333333] hover:border-[#333333]">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
