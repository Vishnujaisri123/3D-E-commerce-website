import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import ProductViewer from "../3d/ProductViewer";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-cream to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        ></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen px-4 py-24">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-6"
          >
             
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-navy dark:text-white mb-6">
              Discover Design <br /> in a New Dimension
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-lg mx-auto md:mx-0 mb-8">
              Explore our curated collection of modern furniture and home decor
              in an immersive 3D experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link to="/category/furniture" className="btn-primary group">
              <ShoppingBag
                className="mr-2 group-hover:scale-110 transition-transform"
                size={20}
              />
              Shop Collection
            </Link>
            <Link to="/#featured" className="btn-ghost group">
              Explore Featured
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="grid grid-cols-3 gap-8 mt-12 max-w-lg mx-auto md:mx-0"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                500+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Products
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                50k+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Customers
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Satisfaction
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Model */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-10"
        >
          <div className="relative">
            <ProductViewer
              modelPath="/models/sofa.glb"
              scale={1.5}
              className="tall"
              autoRotate={true}
            />
            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg"
            >
              <p className="font-heading font-bold text-navy dark:text-white">
                Interactive 3D
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Drag to Explore
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
