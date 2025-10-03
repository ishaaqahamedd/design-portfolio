'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Have a project in mind or just want to chat? Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed w-full md:w-auto"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 border-2 border-green-500 text-green-800 font-medium">
                  Thank you for your message! I&apos;ll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 border-2 border-red-500 text-red-800 font-medium">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail size={24} className="flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a
                      href="mailto:contact@example.com"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Ishaaq2905@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={24} className="flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <a
                      href="tel:+919121906913"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      +91 9121-9069-13
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin size={24} className="flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-gray-600">
                      Nellore, Andhrapradesh
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="border-t border-gray-200 pt-8">
              <h3 className="font-bold mb-4">Availability Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday</p>
                <p className="font-bold text-black">9:00 AM - 6:00 PM PST</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
