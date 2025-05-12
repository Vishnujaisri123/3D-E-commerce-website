import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Elevate Your Space with Immersive 3D Shopping
            </h2>
            <p className="text-gray-300 mb-6">
              Experience our collection like never before with our interactive 3D models. 
              Visualize pieces in your space before making a purchase.
            </p>
            <Link to="/category/furniture" className="btn-accent inline-flex items-center">
              Start Exploring <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/3 relative"
          >
            <img
              src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Modern furniture"
              className="rounded-lg shadow-lg object-cover w-full aspect-[4/5]"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent-500 rounded-lg p-4 shadow-lg">
              <p className="font-heading font-bold">3D View</p>
              <p className="text-sm text-white/80">Interactive Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;