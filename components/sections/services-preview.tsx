"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  ChefHat,
  Shirt,
  Home,
  Baby,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const ServicesPreview = () => {
  const services = [
    {
      icon: Sparkles,
      title: "House Cleaning",
      description:
        "Professional deep cleaning and maintenance services for your home.",
      features: [
        "Deep cleaning",
        "Regular maintenance",
        "Eco-friendly products",
      ],
    },
    {
      icon: ChefHat,
      title: "Cooking Services",
      description:
        "Nutritious meal preparation and cooking services tailored to your needs.",
      features: [
        "Meal planning",
        "Local & continental dishes",
        "Dietary considerations",
      ],
    },
    {
      icon: Shirt,
      title: "Laundry & Ironing",
      description:
        "Complete laundry services including washing, drying, and ironing.",
      features: ["Washing & drying", "Professional ironing", "Fabric care"],
    },
    {
      icon: ShoppingCart,
      title: "Errands & Shopping",
      description: "Personal shopping and errand services to save you time.",
      features: ["Grocery shopping", "Market runs", "Personal errands"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional domestic services delivered by trained, skilled women
              who take pride in their work and serve with dignity.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 group-hover:bg-orange-200 transition-colors">
                    <IconComponent className="h-8 w-8 text-orange-500" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Quality Assurance Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-sm text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Our Services?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-orange-500 mb-2">✓</div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Trained Professionals
                </h4>
                <p className="text-gray-600 text-sm">
                  All our helpers undergo comprehensive training in their
                  respective skills
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-500 mb-2">✓</div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Vetted & Trusted
                </h4>
                <p className="text-gray-600 text-sm">
                  Thorough background checks and reference verification for your
                  peace of mind
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-500 mb-2">✓</div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Flexible Scheduling
                </h4>
                <p className="text-gray-600 text-sm">
                  Services available according to your schedule and preferences
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg group transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/request-service">
                  Request a Service
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
