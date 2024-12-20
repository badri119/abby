import React from "react";
import Link from "next/link";

interface FooterLink {
  name: string;
  href: string;
}

const serviceLinks: FooterLink[] = [
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">A-BBY Landscape</h3>
            <p className="text-gray-400">
              Professional landscaping services in Burnaby, Vancouver, and New
              Westminster since 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-400">
              <p>Burnaby, BC</p>
              <p>Phone: 604 657 8636</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@a-bby.com"
                  className="text-gray-600 hover:text-green-600 rounded-md transition duration-500"
                >
                  danny@a-bby.com
                </a>
              </p>
              <div className="mt-4">
                <p>Monday - Friday: 8am - 6pm</p>
                <p>Saturday: 9am - 4pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} A-BBY Landscape. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
