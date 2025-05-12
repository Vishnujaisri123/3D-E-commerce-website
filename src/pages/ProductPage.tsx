import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react';
import { getProductById, getProductsByCategory } from '../data/products';
import ProductViewer from '../components/3d/ProductViewer';
import ProductGrid from '../components/product/ProductGrid';
import { useCart } from '../context/CartContext';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const { addToCart } = useCart();
  
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  
  // Get related products from the same category
  const relatedProducts = product 
    ? getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4)
    : [];

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/" className="btn-primary">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700">
          <ArrowLeft size={16} className="mr-2" />
          Back to Products
        </Link>
      </div>
      
      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image/3D Model */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {product.modelUrl ? (
              <ProductViewer
                modelPath={product.modelUrl}
                scale={1.5}
                className="tall"
                autoRotate={false}
              />
            ) : (
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-auto rounded-lg shadow-md"
              />
            )}
          </motion.div>
          
          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              {product.name}
            </h1>
            
            <p className="text-2xl font-bold text-primary-700 mb-6">
              ${product.price.toFixed(2)}
            </p>
            
            <div className="prose prose-lg mb-8">
              <p>{product.description}</p>
            </div>
            
            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-2">Color</h3>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`relative w-8 h-8 rounded-full border transition-all ${
                        selectedColor === color
                          ? 'border-2 border-primary-600 ring-2 ring-primary-600 ring-opacity-50'
                          : 'border-gray-300'
                      }`}
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
                    ></button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-2">Size</h3>
                <div className="flex gap-3">
                  {product.sizes.map((size, index) => (
                    <button
                      key={index}
                      className="px-3 py-1 border border-gray-300 rounded hover:border-primary-600 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-2">Quantity</h3>
              <div className="w-24">
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  className="input"
                />
              </div>
            </div>
            
            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="btn-primary flex-grow"
              >
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </button>
              
              <button className="btn-ghost">
                <Heart size={18} className="mr-2" />
                Save
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-cream py-16 mt-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-heading font-bold text-navy mb-8">
              You May Also Like
            </h2>
            
            <ProductGrid products={relatedProducts} />
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPage;