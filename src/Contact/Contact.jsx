import React from 'react';

export default function Contact() {
  return (
    <section id="contact" data-aos="fade-up" data-aos-delay="400" className="bg-gray-900">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Me</h2>
        <form action="https://getform.io/f/bollroga" method="POST" className="space-y-8">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block mb-2 text-xl font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
              placeholder="name@example.com"
              required
            />
          </div>
          {/* Message Field */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-xl font-medium text-white">
              Message
            </label>
            <textarea
              rows="6"
              id="message"
              name="message"
              className="shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
              placeholder="Leave a message"
              required
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
