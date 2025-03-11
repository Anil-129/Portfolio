import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setSubmitted(true);

  
    setFormData({
      name: "",
      email: "",
      message: ""
    });

   
    setTimeout(() => {
      setSubmitted(false);
    }, 5000); 
  };

  return (
    <div className="flex justify-center items-center mt-12 mb-10">
      <div className="p-10 bg-gray-800 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-left text-lg text-white mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg text-black"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-left text-lg text-white mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg text-black"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-left text-lg text-white mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 rounded-lg text-black"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
          >
            Send Message
          </button>
        </form>

        
        {submitted && (
          <div className="mt-6 text-green-500 text-xl text-center">
            <p>Thank you for reaching out! I will get back to you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
