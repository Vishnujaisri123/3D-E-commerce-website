import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Category } from '../../types/Product';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <Link 
        to={`/category/${category.id}`}
        className="block relative h-64 overflow-hidden rounded-lg shadow-md"
      >
        <div className="absolute inset-0">
          <img 
            src={category.imageUrl} 
            alt={category.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-heading font-bold">{category.name}</h3>
          <p className="mt-1">{category.description}</p>
          <span className="mt-4 inline-block font-medium underline">
            Shop Now
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;