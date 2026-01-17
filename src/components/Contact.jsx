import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0l5oujq",
        "template_fu1g1s9",
        form.current,
        "WjPcXt_HIonLof-9E"
      )
      .then(
        () => {
          toast.success("Message sent successfully 🚀");
          form.current.reset();
        },
        () => {
          toast.error("Something went wrong ❌ Please try again.");
        }
      );
  };

  // Motion variants
  const headingVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-slate-100 dark:bg-slate-900 transition-colors"
    >
      <Toaster position="top-right" reverseOrder={false} />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/8801858271527"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg animate-bounce"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="inline-flex items-center gap-2 text-lg font-semibold text-emerald-600
        px-10 py-4 rounded-full
        bg-white/60 backdrop-blur-md
        shadow-[0_0_20px_rgba(16,185,129,0.35)]
        mb-3"
        >
          <span className="w-4 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
          Contact
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Let’s Work Together
        </h2>
      </motion.div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
            Get in Touch
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Feel free to reach out for projects, collaboration, or just a
            friendly hello. Available between <strong>9:00 AM – 8:00 PM</strong>.
          </p>

          {/* Social Links */}
          <div className="flex gap-6 text-3xl mb-8 text-slate-700 dark:text-slate-300">
            {[{
              icon: <FaGithub />,
              link: "https://github.com/sattamap"
            },{
              icon: <FaLinkedinIn />,
              link: "https://www.linkedin.com/in/sattam-chakma-3ab64396"
            },{
              icon: <FaInstagram />,
              link: "https://www.instagram.com/sattamchakma"
            }].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-500 transition-all transform hover:scale-110"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Google Map */}
          <div className="relative w-full h-80 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.8298590212257!2d91.79604053338946!3d22.345633710493072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8dd1a9e6749%3A0x3ec9e12fb2b414db!2s8RW2%2B58F%20Bangladesh%20Betar%20Central%20Store%2C%20Dhaka%20Trunk%20Rd%2C%20Chittagong%204202%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1768634601608!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="rounded-xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-4 h-4 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6 max-w-md mx-auto">
            {[
              { label: "Name", type: "text", name: "user_name", placeholder: "Your Name" },
              { label: "Email", type: "email", name: "user_email", placeholder: "Your Email" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  required
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-lg border bg-transparent text-slate-900 dark:text-white border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
            ))}

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border bg-transparent text-slate-900 dark:text-white border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-emerald-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-white font-semibold py-3 rounded-lg transition hover:scale-105 hover:shadow-[0_0_15px_rgba(16,185,129,0.7)]"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
