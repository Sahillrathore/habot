import React from 'react';
import { socialLinks, footerContent } from '../utils/constant';

const Footer = () => {
  return (
    <footer className="bg-[#0B2847] flex sm:items-center between pt-6 py-3 text-white">
      <div className="w-full mx-auto md:px-28">

        <div className="flex justify-between border-y border-gray-500 sm:px-4 px-8 sm:items-center py-4 mb-4 md:flex-row flex-col flex-wrap gap-8">
          {/* Logo */}
          <div>
            <img src="/logo2.png" alt="Footer Logo" className="h-10" />
            <p className="mt-2 text-sm text-gray-400">© R Singhania</p>
          </div>

          {/* Footer Content Sections */}
          <div className="flex gap-16 md:flex-row flex-col">
            {footerContent.map((section, index) => (
              <div key={index} className="flex-1">
                <h3 className="text-lg font-semibold mb-4">{section.heading}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pb-12">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label={social.label}
                >
                  <IconComponent className="w-8 h-8 border border-white rounded-full p-2" />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
