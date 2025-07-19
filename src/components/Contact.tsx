import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setIsSubmitting(false);
        setSubmitMessage({
          type: 'success',
          text: 'Your message has been sent! I will get back to you soon.',
        });

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });

        setTimeout(() => {
          setSubmitMessage(null);
        }, 5000);
      })
      .catch(() => {
        setIsSubmitting(false);
        setSubmitMessage({
          type: 'error',
          text: 'Failed to send message. Please try again.',
        });
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Side Contact Info */}
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-gray-900 dark:text-white font-medium">Email</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      <a href="mailto:jaswanthprasanna68@gmail.com" className="hover:text-blue-600 transition-colors">
                        jaswanthprasanna68@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-gray-900 dark:text-white font-medium">Location</h4>
                    <p className="text-gray-700 dark:text-gray-300">Chennai, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-gray-900 dark:text-white font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Jaswanth1406"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jaswanth-prasanna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>

              {submitMessage && (
                <div
                  className={`p-4 mb-6 rounded-md ${
                    submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Hello, I'm interested in working with you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send size={16} className="ml-2" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;