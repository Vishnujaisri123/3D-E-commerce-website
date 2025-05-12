import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search, User, Moon, Sun } from 'lucide-react';
import { categories } from '../../data/products';
import { useCart } from '../../context/CartContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));
  const location = useLocation();
  const { totalItems } = useCart();

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', (!isDark).toString());
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-heading font-bold dark:text-white">
          Monarch Origin
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`nav-link dark:text-gray-200 ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          
          {categories.map(category => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className={`nav-link dark:text-gray-200 ${isActive(`/category/${category.id}`) ? 'active' : ''}`}
            >
              {category.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className="text-navy dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="text-navy dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2">
            <Search size={20} />
          </button>
          
          <Link to="/account" className="text-navy dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2">
            <User size={20} />
          </Link>
          
          <Link to="/cart" className="text-navy dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2 relative">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          
          <button 
            className="md:hidden text-navy dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`py-2 dark:text-gray-200 ${isActive('/') ? 'text-primary-600 dark:text-primary-400 font-medium' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className={`py-2 dark:text-gray-200 ${isActive(`/category/${category.id}`) ? 'text-primary-600 dark:text-primary-400 font-medium' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;