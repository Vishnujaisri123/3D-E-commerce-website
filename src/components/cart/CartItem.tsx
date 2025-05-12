import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Product } from '../../types/Product';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: Product & { quantity: number };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncreaseQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center py-6 border-b border-gray-200">
      {/* Product Image */}
      <div className="w-full sm:w-24 h-24 mb-4 sm:mb-0 sm:mr-6">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      
      {/* Product Details */}
      <div className="flex-grow">
        <h3 className="font-medium text-navy">{item.name}</h3>
        {item.colors && item.colors.length > 0 && (
          <p className="text-sm text-gray-600">Color: {item.colors[0]}</p>
        )}
        <p className="font-bold text-primary-700 mt-1">${item.price.toFixed(2)}</p>
      </div>
      
      {/* Quantity Controls */}
      <div className="flex items-center border border-gray-300 rounded-md mt-4 sm:mt-0 mx-auto sm:mx-0">
        <button 
          onClick={handleDecreaseQuantity}
          className="px-3 py-1 hover:bg-gray-100 transition-colors"
        >
          <Minus size={16} />
        </button>
        
        <span className="px-3 py-1 text-center min-w-[40px]">{item.quantity}</span>
        
        <button 
          onClick={handleIncreaseQuantity}
          className="px-3 py-1 hover:bg-gray-100 transition-colors"
        >
          <Plus size={16} />
        </button>
      </div>
      
      {/* Total and Remove */}
      <div className="flex items-center justify-between w-full sm:w-auto mt-4 sm:mt-0 sm:ml-6">
        <p className="font-bold text-primary-800 sm:mr-6">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        
        <button 
          onClick={handleRemove}
          className="text-gray-500 hover:text-error-600 transition-colors"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;