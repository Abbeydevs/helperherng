"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award } from "lucide-react";
import Link from "next/link";

const AboutPreview = () => {
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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-orange-500">Helpher.ng</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a social enterprise dedicated to breaking the cycle of
              poverty for women in Lagos by providing training, dignity, and
              sustainable employment opportunities.
            </p>
          </motion.div>

          {/* Mission, Vision, Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              variants={itemVariants}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 group-hover:bg-orange-200 transition-colors">
                <Target className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Creating pathways out of poverty for women by offering job
                training and connecting them with paying service opportunities
                in their communities.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 group-hover:bg-orange-200 transition-colors">
                <Eye className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A Lagos where every woman, regardless of her background, has the
                opportunity to earn a living with dignity and pride.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 group-hover:bg-orange-200 transition-colors">
                <Award className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Addressing sustainable development goals: No Poverty, Zero
                Hunger, and Decent Work & Economic Growth through women
                empowerment.
              </p>
            </motion.div>
          </div>

          {/* Statistics Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <h3 className="text-3xl font-bold mb-8">
              The Challenge We&apos;re Addressing
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">70%</div>
                <p className="text-orange-100">of poor Nigerians are women</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">&lt;20%</div>
                <p className="text-orange-100">of women actually own assets</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/about">Learn More About Our Story</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
