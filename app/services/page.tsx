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
  Clock,
  Shield,
  Star,
  CheckCircle,
  Phone,
  Calendar,
  Users,
  Award,
} from "lucide-react";
import Link from "next/link";

const ServicesPage = () => {
  const services = [
    {
      icon: Sparkles,
      title: "House Cleaning",
      description:
        "Professional deep cleaning and maintenance services for your home with attention to every detail.",
      features: [
        "Deep cleaning of all rooms",
        "Regular maintenance schedules",
        "Eco-friendly cleaning products",
        "Kitchen and bathroom sanitization",
        "Floor cleaning and polishing",
        "Window cleaning (interior)",
      ],
      pricing: "From ₦15,000",
      duration: "3-6 hours",
      popular: false,
    },
    {
      icon: ChefHat,
      title: "Cooking Services",
      description:
        "Nutritious meal preparation and cooking services tailored to your family's needs and preferences.",
      features: [
        "Meal planning and preparation",
        "Local Nigerian dishes",
        "Continental cuisine options",
        "Dietary restriction accommodations",
        "Grocery list preparation",
        "Kitchen organization",
      ],
      pricing: "From ₦12,000",
      duration: "2-4 hours",
      popular: true,
    },
    {
      icon: Shirt,
      title: "Laundry & Ironing",
      description:
        "Complete laundry services including washing, drying, and professional ironing for all fabric types.",
      features: [
        "Washing and drying",
        "Professional ironing",
        "Fabric-specific care",
        "Stain removal treatment",
        "Folding and organization",
        "Pickup and delivery options",
      ],
      pricing: "From ₦8,000",
      duration: "4-8 hours",
      popular: false,
    },
    // {
    //   icon: Home,
    //   title: "Domestic Assistance",
    //   description:
    //     "Comprehensive household management and domestic support services to keep your home running smoothly.",
    //   features: [
    //     "General household management",
    //     "Organization and tidying",
    //     "Daily maintenance tasks",
    //     "Pet care assistance",
    //     "Plant watering and care",
    //     "Light maintenance tasks",
    //   ],
    //   pricing: "From ₦10,000",
    //   duration: "4-8 hours",
    //   popular: false,
    // },
    {
      icon: Baby,
      title: "Childcare Support",
      description:
        "Reliable and caring childcare assistance for busy parents, ensuring your children's safety and engagement.",
      features: [
        "Child supervision and care",
        "Educational activity engagement",
        "Safety-focused approach",
        "Meal preparation for children",
        "Homework assistance",
        "Light housekeeping related to children",
      ],
      pricing: "From ₦20,000",
      duration: "4-12 hours",
      popular: true,
    },
    {
      icon: ShoppingCart,
      title: "Errands & Shopping",
      description:
        "Personal shopping and errand services to save you time and handle your daily tasks efficiently.",
      features: [
        "Grocery shopping",
        "Market runs",
        "Personal errands",
        "Bill payments",
        "Pharmacy runs",
        "Document collection/delivery",
      ],
      pricing: "From ₦6,000",
      duration: "2-4 hours",
      popular: false,
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Vetted & Trusted",
      description:
        "All helpers undergo thorough background checks and reference verification.",
    },
    {
      icon: Award,
      title: "Trained Professionals",
      description:
        "Comprehensive training programs ensure quality service delivery.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description:
        "Services available according to your schedule and preferences.",
    },
    {
      icon: Star,
      title: "Quality Guaranteed",
      description: "We stand behind our work with satisfaction guarantees.",
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
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          />
          <div className="absolute inset-0 bg-black/70" />
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
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Our <span className="text-orange-500">Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              Professional domestic services delivered by trained, empowered
              women who take pride in their work and serve with dignity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 group transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/request-service">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white bg-transparent hover:text-black px-8 py-3 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    variants={itemVariants}
                    className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 ${
                      service.popular ? "ring-2 ring-orange-500" : ""
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Popular
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between items-start mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full group-hover:bg-orange-200 transition-colors">
                        <IconComponent className="h-8 w-8 text-orange-500" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-500">
                          {service.pricing}
                        </div>
                        <div className="text-sm text-gray-500">
                          {service.duration}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 group-hover:scale-105"
                      asChild
                    >
                      <Link href="/request-service">
                        Book This Service
                        <Calendar className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
                Why Choose <span className="text-orange-500">Helpher.ng</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We&apos;re committed to delivering exceptional service while
                empowering women in our community.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {whyChooseUs.map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="text-center group"
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6 group-hover:bg-orange-200 transition-colors">
                      <IconComponent className="h-10 w-10 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Process Section */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center"
            >
              <h3 className="text-3xl font-bold mb-8">How It Works</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    1. Request Service
                  </h4>
                  <p className="text-orange-100">
                    Contact us with your service needs and schedule preferences.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">2. Get Matched</h4>
                  <p className="text-orange-100">
                    We match you with a trained helper who fits your specific
                    needs.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    3. Enjoy Service
                  </h4>
                  <p className="text-orange-100">
                    Relax while our professional helper takes care of your
                    needs.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get <span className="text-orange-500">Started</span>?
            </h2>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Join hundreds of satisfied customers who trust Helpher.ng for
              their domestic service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 group transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/request-service">
                  Request Service Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">Have Questions?</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
