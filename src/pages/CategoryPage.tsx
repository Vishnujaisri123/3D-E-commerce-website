import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProductsByCategory, getCategoryById } from '../data/products';
import ProductGrid from '../components/product/ProductGrid';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const products = category ? getProductsByCategory(category) : [];
  const categoryInfo = category ? getCategoryById(category) : undefined;

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
      </div>
      
      {/* Category Header */}
      <div className="bg-cream py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
            {categoryInfo ? categoryInfo.name : 'Products'}
          </h1>
          {categoryInfo && (
            <p className="text-gray-600 max-w-xl mx-auto">
              {categoryInfo.description}
            </p>
          )}
        </div>
      </div>
      
      {/* Products */}
      <div className="container mx-auto px-4 py-16">
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">No products found</h2>
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;