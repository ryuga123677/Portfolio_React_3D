import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const Hireme = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS details: Replace these with your own
    const serviceID = "service_jj6okiv"
    const templateID = "template_chidsgm";
    const userID = "ybGeG0X3n7f1IpOw5";

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSent(true);
      })
      .catch((error) => {
        console.error('FAILED...', error);
      });

    setFormData({ name: '', email: '', message: '' }); // Reset the form
  };

  return (
    <div  className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4" style={{ color: "#d9b99b" }}>Hire Me</h2>

      {sent && <p className="text-green-500 mb-4">Your message has been sent!</p>}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
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
            className=" text-white font-bold py-2 px-4 rounded"
            style={{ backgroundColor: "#F6AC17" }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
