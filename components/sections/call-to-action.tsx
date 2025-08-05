"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users2 } from "lucide-react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Make a <span className="text-orange-500">Difference</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Whether you need reliable domestic services or want to help empower
            women in your community, Helpher.ng is here to connect you with
            meaningful opportunities.
          </motion.p>

          {/* Two-Column CTA */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* For Service Seekers */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-6 group-hover:bg-orange-500/30 transition-colors">
                <Users2 className="h-8 w-8 text-orange-400" />
              </div>

              <h3 className="text-2xl font-bold mb-4">Need Help at Home?</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Get connected with trained, professional domestic helpers who
                will serve you with dignity and excellence.
              </p>

              <Button
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white group-hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/request-service">
                  Request Service Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            {/* For Women Seeking Empowerment */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-6 group-hover:bg-orange-500/30 transition-colors">
                <Heart className="h-8 w-8 text-orange-400" />
              </div>

              <h3 className="text-2xl font-bold mb-4">Empower a Woman</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Know someone who needs training and work opportunities? Help us
                create pathways out of poverty for women in Lagos.
              </p>

              <Button
                size="lg"
                variant="outline"
                className="w-full border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white group-hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/register-helper">
                  Register a Helper
                  <Heart className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400 mb-4">
              Have questions? We&apos;re here to help.
            </p>
            <Button
              variant="ghost"
              className="text-orange-400 hover:text-orange-300 hover:bg-orange-500/10"
              asChild
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
