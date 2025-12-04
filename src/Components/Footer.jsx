import React from "react";
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold text-[#F9AA33] mb-6">Contact Us</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <FaPhone className="text-blue-500" />
              <span>+91 8925205509</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <span>aravindhaarya246@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaGlobe className="text-blue-500" />
              <a
                href="https://www.linkedin.com/in/aravindh-aarya-g-68409122b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn Profile
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-500 mt-1" />
              <span>3/39 Mariamman Kovil Street, Meenatchipuram-626111.</span>
            </li>
          </ul>
        </div>

        {/* Optional: Add some company info / logo */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-[#F9AA33] mb-4">Naziyah Creed</h3>
          <p className="text-gray-300">
            Not Today but Tommorrow yes we can reach our goal so we are doing it Today.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} NaziyahCreed. All rights reserved.
      </div>
    </footer>
  );
}



