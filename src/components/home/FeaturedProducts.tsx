import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ProductGrid from "../product/ProductGrid";
import { getFeaturedProducts } from "../../data/products";

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section id="featured" className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold text-navy">
              Featured Products
            </h2>
            <p className="text-gray-600 mt-2">
              Discover our most popular designs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/category/all"
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 mt-4 md:mt-0"
            >
              View All Products
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </motion.div>
        </div>

        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
