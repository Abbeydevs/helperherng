"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+234 123 456 7890", "+234 987 654 3210"],
      description: "Monday - Friday: 8AM - 6PM",
      action: "tel:+2341234567890",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@helpher.ng", "support@helpher.ng"],
      description: "We'll respond within 24 hours",
      action: "mailto:info@helpher.ng",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Lagos Island", "Lagos State, Nigeria"],
      description: "Monday - Friday: 9AM - 5PM",
      action: "#",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+234 123 456 7890"],
      description: "Quick support via WhatsApp",
      action:
        "https://wa.me/2341234567890?text=Hello%20Helpher.ng,%20I%20would%20like%20to%20know%20more%20about%20your%20services",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      href: "https://facebook.com/helpher.ng",
      color: "hover:bg-blue-600",
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "https://twitter.com/helpherng",
      color: "hover:bg-blue-400",
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://instagram.com/helpher.ng",
      color: "hover:bg-pink-600",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/company/helpher-ng",
      color: "hover:bg-blue-700",
    },
  ];

  const faqs = [
    {
      question: "How do I request a service?",
      answer:
        "Simply click on 'Request Service' button, fill out the form with your requirements, and we'll match you with a suitable helper within 24 hours.",
    },
    {
      question: "Are your helpers trained and vetted?",
      answer:
        "Yes, all our helpers undergo comprehensive training and thorough background checks before joining our platform.",
    },
    {
      question: "What are your service rates?",
      answer:
        "Our rates vary by service type and duration. Contact us for detailed pricing or check our Services page for starting prices.",
    },
    {
      question: "Do you provide services outside Lagos?",
      answer:
        "Currently, we operate within Lagos State. We're planning to expand to other states soon.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20 md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Get In <span className="text-orange-500">Touch</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              We&apos;re here to help! Reach out to us for any questions about
              our services or to get started
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Multiple ways to reach us - choose what works best for you
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                const isWhatsApp = info.title === "WhatsApp";

                return (
                  <motion.div
                    key={info.title}
                    variants={itemVariants}
                    className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 group"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 group-hover:bg-orange-200 transition-colors">
                      <IconComponent className="h-8 w-8 text-orange-500" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {info.title}
                    </h3>

                    <div className="mb-4">
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-gray-700 font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm mb-6">
                      {info.description}
                    </p>

                    {isWhatsApp ? (
                      <Button
                        className="bg-green-500 hover:bg-green-600 text-white w-full group-hover:scale-105 transition-all duration-300"
                        asChild
                      >
                        <a
                          href={info.action}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Chat on WhatsApp
                        </a>
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white w-full group-hover:scale-105 transition-all duration-300"
                        asChild
                      >
                        <a href={info.action}>Contact Now</a>
                      </Button>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Send Us a Message
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Have a question or ready to get started? Fill out the form
                    below and we&apos;ll get back to you soon.
                  </p>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="+234 123 456 7890"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="cleaning">House Cleaning</option>
                        <option value="cooking">Cooking Services</option>
                        <option value="laundry">Laundry & Ironing</option>
                        <option value="domestic">Domestic Assistance</option>
                        <option value="childcare">Childcare Support</option>
                        <option value="errands">Errands & Shopping</option>
                        <option value="multiple">Multiple Services</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="Tell us more about what you need..."
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white group transition-all duration-300 transform hover:scale-105"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Map & Additional Info */}
              <motion.div variants={itemVariants} className="space-y-8">
                {/* Map Placeholder */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Find Us
                  </h3>
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-6">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Interactive Map Coming Soon</p>
                      <p className="text-sm">123 Lagos Island, Lagos State</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-orange-500 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Office Hours
                        </p>
                        <p className="text-gray-600 text-sm">
                          Monday - Friday: 9AM - 5PM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-orange-500 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          24/7 Support
                        </p>
                        <p className="text-gray-600 text-sm">
                          Emergency services available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Follow Us
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Stay connected and get updates on our services and community
                    impact.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center p-4 bg-gray-50 hover:text-white rounded-lg transition-all duration-300 group ${social.color}`}
                        >
                          <IconComponent className="h-6 w-6 mr-2" />
                          <span className="font-medium">{social.name}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Quick answers to common questions about our services
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <MessageCircle className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Immediate Help?
            </h2>
            <p className="text-xl mb-8 text-green-100 leading-relaxed">
              Chat with us directly on WhatsApp for quick support and instant
              responses
            </p>

            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold group transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a
                href="https://wa.me/2341234567890?text=Hello%20Helpher.ng,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
