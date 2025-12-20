import React, { useState } from "react";
import emailjs from "emailjs-com";
import { StarBackground } from "./StarBackground";

export const Hireme = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_jj6okiv";
    const templateID = "template_chidsgm";
    const userID = "ybGeG0X3n7f1IpOw5";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSent(true);
      })
      .catch((error) => {
        console.error("FAILED...", error);
      });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative w-full min-h-[91vh] text-white">
      {/* Star background */}
      <StarBackground heightClass="h-full" />

      {/* Foreground content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-full p-4 max-w-md bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <h2 className="text-2xl font-bold text-white mb-4">Hire Me</h2>

          {sent && (
            <p className="text-green-500 mb-4">
              Your message has been sent!
            </p>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                required
              />
            </div>

            <div className="mb-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                required
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                required
              />
            </div>

            <div className="flex items-center justify-between ">
              <button
                type="submit"
                className="  font-bold py-2 px-4 rounded bg-black text-white hover:scale-125 transition-all"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
