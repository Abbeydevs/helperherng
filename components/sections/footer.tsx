"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  X,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Request Service", href: "/request-service" },
    { name: "Register Helper", href: "/register-helper" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "House Cleaning", href: "/services#cleaning" },
    { name: "Cooking Services", href: "/services#cooking" },
    { name: "Laundry & Ironing", href: "/services#laundry" },
    { name: "Domestic Assistance", href: "/services#domestic" },
    { name: "Childcare Support", href: "/services#childcare" },
    { name: "Errands & Shopping", href: "/services#errands" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.instagram.com/helpher_ng?igsh=dGdmMXNzazV2MHFi",
      label: "Facebook",
    },
    { icon: X, href: "https://x.com/helpher_ng?s=21", label: "Twitter" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/helpher_ng?igsh=dGdmMXNzazV2MHFi",
      label: "Instagram",
    },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold">
                  <span className="text-orange-500">Helpher</span>
                  <span className="text-white">.ng</span>
                </h3>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering women and transforming lives through dignified
                domestic service opportunities across Lagos, Nigeria.
              </p>

              <div className="flex items-center text-sm text-gray-400">
                <Heart className="h-4 w-4 text-orange-500 mr-2" />
                Made with love in Lagos
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
              <div className="space-y-4">
                {/* <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">Lagos, Nigeria</p>
                  </div>
                </div> */}

                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <a
                    href="mailto:info@helpher.ng"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    helpherng@gmail.com
                  </a>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <a
                    href="tel:+2341234567890"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    +234 810 421 6789 | +44 735 015 9107
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h5 className="text-sm font-semibold mb-4 text-gray-300">
                  Follow Us
                </h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-8 h-8 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-200 group"
                        aria-label={social.label}
                      >
                        <IconComponent className="h-4 w-4 text-gray-400 group-hover:text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Helpher.ng. All rights reserved. Empowering women,
              transforming communities.
            </p>

            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
