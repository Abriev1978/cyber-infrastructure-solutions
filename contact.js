import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (response.ok) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <NavBar />
      <main className="pt-24 px-6 py-20 max-w-3xl mx-auto text-slate-950 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Get in Touch</h2>
        <p className="mb-6 text-center text-white">Contact us today for reliable, professional IT solutions.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-4 rounded-lg border-2 border-slate-300 focus:outline-none focus:border-cyan-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-4 rounded-lg border-2 border-slate-300 focus:outline-none focus:border-cyan-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="p-4 rounded-lg border-2 border-slate-300 focus:outline-none focus:border-cyan-400"
          />
          <button type="submit" className="bg-slate-950 text-white rounded-2xl py-4 px-6 font-semibold hover:bg-cyan-400 transition">
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-center text-white">{status}</p>}
      </main>
      <Footer />
    </>
  );
}
