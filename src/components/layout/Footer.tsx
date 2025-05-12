import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-heading font-bold mb-4">
              Monarch Origin
            </h3>
            <p className="text-gray-300 mb-4">
              Transforming spaces through immersive 3D shopping experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Vishnujaisri123"
                className="text-white hover:text-accent-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jai-sri-shankara-vishnu-vardhan-keta-1b9070364/"
                className="text-white hover:text-accent-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/VishnuV09741442"
                className="text-white hover:text-accent-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="col-span-1">
            <h4 className="text-lg font-heading font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/category/furniture"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Furniture
                </Link>
              </li>
              <li>
                <Link
                  to="/category/lighting"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Lighting
                </Link>
              </li>
              <li>
                <Link
                  to="/category/decor"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Decor
                </Link>
              </li>
              <li>
                <Link
                  to="/category/textile"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Textiles
                </Link>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div className="col-span-1">
            <h4 className="text-lg font-heading font-medium mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Design Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-1">
            <h4 className="text-lg font-heading font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a
                  href="mailto:contact@atelier.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  vishnuketa999@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a
                  href="tel:+91 8555085539"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 8555085539
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="font-medium mb-2">Subscribe to our newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 text-navy rounded-l-md focus:outline-none"
                />
                <button className="bg-accent-500 hover:bg-accent-600 px-4 py-2 rounded-r-md transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center md:text-left">
          <div className="md:flex md:justify-between">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Copyright © 2025 | Crafted &
              Managed by Vishnu Vardhan | All Rights Reserved
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Shipping Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
