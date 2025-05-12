import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types/Product';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <motion.div 
      className="product-card h-full"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block h-full">
        <div className="product-card-inner h-full rounded-lg overflow-hidden bg-white shadow-md group">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay actions */}
            <div className={`absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center gap-3 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <button 
                onClick={handleAddToCart}
                className="bg-white text-navy p-3 rounded-full hover:bg-accent-500 hover:text-white transition-colors"
              >
                <ShoppingCart size={20} />
              </button>
              <button className="bg-white text-navy p-3 rounded-full hover:bg-accent-500 hover:text-white transition-colors">
                <Heart size={20} />
              </button>
            </div>
          </div>
          
          {/* Product Info */}
          <div className="p-4">
            <h3 className="font-medium text-lg mb-1 text-navy">{product.name}</h3>
            <p className="text-primary-700 font-bold">${product.price.toFixed(2)}</p>
            
            {/* Color options if available */}
            {product.colors && (
              <div className="mt-3 flex gap-1">
                {product.colors.map((color, index) => (
                  <div 
                    key={index}
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ 
                      backgroundColor: color.toLowerCase() === 'white' ? 'white' : 
                                      color.toLowerCase() === 'black' ? 'black' : 
                                      color.toLowerCase() === 'brown' ? '#8B4513' :
                                      color.toLowerCase() === 'gold' ? '#FFD700' :
                                      color.toLowerCase() === 'silver' ? '#C0C0C0' :
                                      color.toLowerCase() === 'terracotta' ? '#E2725B' :
                                      color.toLowerCase() === 'natural' ? '#F5DEB3' :
                                      color.toLowerCase() === 'emerald' ? '#50C878' :
                                      color.toLowerCase() === 'navy' ? '#000080' :
                                      color.toLowerCase() === 'blush' ? '#DE5D83' :
                                      color.toLowerCase() === 'multicolor' ? 'linear-gradient(45deg, red, blue, green)' : color
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;