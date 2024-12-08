import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Corrected icon imports
import { HiOutlineMail } from 'react-icons/hi';

export default function SocialLinks() {
  return (
    <div className="flex flex-col top-[35%] left-0 fixed z-10">
      <ul>
        {/* LinkedIn */}
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-blue-600 hover:bg-blue-800 transition duration-300">
          <a
            href="https://www.linkedin.com/in/nahimuddin/" // Add your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center w-full h-full text-white"
          >
            <span>LinkedIn</span>
            <FaLinkedin className="ml-2" />
          </a>
        </li>
        {/* GitHub */}
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-800 hover:bg-gray-900 transition duration-300 mt-2">
          <a
            href="https://github.com/UddinNahim" // Add your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center w-full h-full text-white"
          >
            <span>GitHub</span>
            <FaGithub className="ml-2" />
          </a>
        </li>
        {/* Email */}
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-red-600 hover:bg-red-700 transition duration-300 mt-2">
          <a
            href="mailto:nahim.211902019@gmail.com" // Add your email
            className="flex justify-between items-center w-full h-full text-white"
          >
            <span>Email</span>
            <HiOutlineMail className="ml-2" />
          </a>
        </li>
      </ul>
    </div>
  );
}
