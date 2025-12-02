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
    <div className="flex justify-center items-center bg-gradient-to-br  from-black px-4 ">
      <div className="backdrop-blur-xl bg-white/10 borderborder-white/20 shadow-2xl p-8 rounded-2xl w-full m-15 ">
        {/* <h2 className="text-3xl font-semibold text-white text-center mb-6">
          Contact <span className="text-yellow-400">Me</span>
        </h2> */}

        <form onSubmit={sendEmail} className="space-y-5">
          {/* Name */}
          <div className="w-full  text-left">
            <label className="text-white font-medium ">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full mt-2 p-3 rounded-xl bg-white/10 text-white placeholder-gray-300 
              border border-white/30 focus:ring-1 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Email */}
          <div className="w-full  text-left">
            <label className="text-white font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full mt-2 p-3 rounded-xl bg-white/10 text-white placeholder-gray-300 
              border border-white/30 focus:ring-1 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Message */}
          <div className="w-full  text-left">
            <label className="text-white font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Write your message..."
              className="w-full mt-2 p-3 rounded-xl bg-white/10 text-white placeholder-gray-300 
              border border-white/30 focus:ring-1 focus:ring-yellow-400 outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-[#bb7c0c] text-black font-semibold py-3 
            rounded-xl shadow-lg transition-all duration-300"
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
