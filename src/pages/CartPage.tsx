import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ShoppingBag } from 'lucide-react';
import CartItem from '../components/cart/CartItem';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, totalItems, totalPrice, clearCart } = useCart();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700">
            <ArrowLeft size={16} className="mr-2" />
            Continue Shopping
          </Link>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-8">
          Shopping Cart
        </h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="col-span-2">
              <motion.div 
                className="bg-white rounded-lg shadow-md p-6"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <h2 className="text-xl font-medium">Items ({totalItems})</h2>
                  <button 
                    onClick={clearCart}
                    className="text-gray-500 hover:text-error-600 text-sm font-medium transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
                
                {cartItems.map(item => (
                  <motion.div key={item.id} variants={item}>
                    <CartItem item={item} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Order Summary */}
            <div className="col-span-1">
              <motion.div 
                className="bg-white rounded-lg shadow-md p-6 sticky top-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-xl font-medium pb-4 border-b border-gray-200">
                  Order Summary
                </h2>
                
                <div className="py-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>${(totalPrice * 0.08).toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${(totalPrice * 1.08).toFixed(2)}</span>
                  </div>
                </div>
                
                <button className="btn-primary w-full mt-6">
                  Proceed to Checkout
                  <ArrowRight size={16} className="ml-2" />
                </button>
                
                <div className="mt-6 text-sm text-gray-500 text-center">
                  <p>We offer free shipping on all orders.</p>
                  <p className="mt-2">Secure checkout powered by Stripe</p>
                </div>
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/" className="btn-primary">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;