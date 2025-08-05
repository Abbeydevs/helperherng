"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <h1
                  className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                    scrolled ? "text-gray-900" : "text-white"
                  }`}
                >
                  <span className="text-orange-500">Helpher</span>
                  <span className={scrolled ? "text-gray-900" : "text-white"}>
                    .ng
                  </span>
                </h1>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-medium transition-colors duration-300 ${
                    isActive(link.href)
                      ? "text-orange-500"
                      : scrolled
                      ? "text-gray-700 hover:text-orange-500"
                      : "text-white hover:text-orange-300"
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="activeLink"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                className={`transition-colors duration-300 ${
                  scrolled
                    ? "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                    : "text-white hover:text-orange-300 hover:bg-white/10"
                }`}
                asChild
              >
                <Link href="/register-helper">
                  <Heart className="h-4 w-4 mr-2" />
                  Join as Helper
                </Link>
              </Button>

              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/request-service">
                  Request Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="container mx-auto px-4 py-4">
                {/* Mobile Navigation Links */}
                <div className="space-y-4 mb-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={`block py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                          isActive(link.href)
                            ? "text-orange-500 bg-orange-50"
                            : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="space-y-3 pt-4 border-t border-gray-200"
                >
                  <Button
                    variant="outline"
                    className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                    asChild
                  >
                    <Link href="/register-helper">
                      <Heart className="h-4 w-4 mr-2" />
                      Join as Helper
                    </Link>
                  </Button>

                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    asChild
                  >
                    <Link href="/request-service">
                      Request Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
