import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_h4cxona", "template_ditowvr", form, "bD4sBwQLmF6c9iEan")
      .then(
        () => {
          setStatus("Message Sent Successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Failed to send message. Try again!");
        }
      );
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-black px-2 sm:px-4 py-6">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl w-full md:max-w-6xl p-4 sm:p-8 md:p-10 rounded-2xl mx-auto">
        <form onSubmit={sendEmail} className="space-y-5">
          {/* Name */}
          <div className="w-full text-left">
            <label className="text-white font-medium " htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full mt-2 p-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/30 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors"
            />
          </div>

          {/* Email */}
          <div className="w-full text-left">
            <label className="text-white font-medium" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full mt-2 p-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/30 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors"
            />
          </div>

          {/* Message */}
          <div className="w-full text-left">
            <label className="text-white font-medium" htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Write your message..."
              className="w-full mt-2 p-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/30 focus:ring-1 focus:ring-yellow-400 outline-none resize-none transition-colors"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-[#bb7c0c] text-black font-semibold py-3 rounded-xl shadow-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p className="text-center text-yellow-400 font-medium mt-4">
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
