"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Users,
  Target,
  Eye,
  Award,
  Heart,
  TrendingUp,
  Handshake,
  Star,
} from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
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

  const stats = [
    { icon: Users, number: "100+", label: "Women Empowered" },
    { icon: Heart, number: "500+", label: "Families Served" },
    { icon: TrendingUp, number: "95%", label: "Success Rate" },
    { icon: Star, number: "4.8/5", label: "Average Rating" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Dignity & Respect",
      description:
        "Every woman deserves to work with dignity and be treated with respect, regardless of her background or circumstances.",
    },
    {
      icon: Handshake,
      title: "Trust & Reliability",
      description:
        "We build lasting relationships based on trust, ensuring reliable services for clients and stable income for helpers.",
    },
    {
      icon: TrendingUp,
      title: "Empowerment & Growth",
      description:
        "We provide training, support, and opportunities for women to grow professionally and economically.",
    },
    {
      icon: Users,
      title: "Community Impact",
      description:
        "Our work creates positive ripple effects, strengthening families and communities across Lagos.",
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
              backgroundImage: "url('/images/woman.png')",
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
              About <span className="text-orange-500">Helpher.ng</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              Breaking the cycle of poverty through dignified employment
              opportunities for women in Lagos
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      {/* <section className="py-20 bg-white">
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
                Our Story
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                HelpHer.ng was born from a simple but powerful idea — that women
                are the backbone of every society, yet too many are held back by
                poverty, lack of opportunity, and the absence of a support
                system. The challenges; In Nigeria, statistics show that 70% of
                the poor are women, and more than half of rural women live below
                the poverty line. Despite their resilience and multiple roles as
                mothers, caregivers, and breadwinners, women often remain among
                the most economically disadvantaged. The Solution; We saw this
                gap and asked: what if women had access to the skills, training,
                and opportunities to work with dignity? What if we could turn
                everyday services like cleaning, cooking, laundry, and errands
                into pathways to financial freedom and self-respect? That
                question gave birth to HelpHer.ng. Our initiative stems from a
                deep commitment to tackling the feminization of poverty in
                Nigeria. We believe that when a woman is empowered, she not only
                changes her own life but also uplifts her family, educates her
                children, and strengthens her community.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="prose prose-lg mx-auto mb-16"
            >
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    The Challenge
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    In Nigeria, statistics show that 70% of the poor are women,
                    and more than half of rural women live below the poverty
                    line. Despite their resilience and multiple roles as
                    mothers, caregivers, and breadwinners, women often remain
                    among the most economically disadvantaged.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Solution
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We saw this gap and asked: what if women had access to the
                    skills, training, and opportunities to work with dignity?
                    What if we could turn everyday services like cleaning,
                    cooking, laundry, and errands into pathways to financial
                    freedom and self-respect? That question gave birth to
                    HelpHer.ng.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-7xl mx-auto"
          >
            {/* Mission & Vision */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <motion.div
                variants={itemVariants}
                className="text-center p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                  <Target className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To create a pathway out of poverty for women by equipping them
                  with professional household skills and link them with job
                  opportunities that improves their lives and contributes to
                  society.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="text-center p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                  <Eye className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To build a future where no woman is trapped in poverty, and
                  every home has access to trusted help through trained,
                  empowered women.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="text-center p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                  <Award className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Impact
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Addressing UN SDGs: No Poverty, Zero Hunger, and Decent Work &
                  Economic Growth through women empowerment.
                </p>
              </motion.div>
            </div>

            {/* Values */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    variants={itemVariants}
                    className="text-center p-6 rounded-2xl bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                      <IconComponent className="h-6 w-6 text-orange-500" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto text-center text-white"
          >
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                Every number represents a life transformed, a family supported,
                and a community strengthened
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <p className="text-orange-100">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Whether you need services or want to help empower women in your
              community, there&apos;s a place for you in the Helpher.ng family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/request-service">Request a Service</Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/register-helper">Join as Helper</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
