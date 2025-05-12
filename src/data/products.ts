import { Product, Category } from '../types/Product';

export const products: Product[] = [
  {
    id: "1",
    name: "Modern Leather Sofa",
    price: 1299.99,
    description: "A luxurious leather sofa with a modern design. Perfect for any living room.",
    category: "furniture",
    imageUrl: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    modelUrl: "/models/sofa.glb",
    colors: ["Black", "Brown", "White"],
    inStock: true,
    featured: true
  },
  {
    id: "2",
    name: "Designer Table Lamp",
    price: 149.99,
    description: "An elegant table lamp with a minimalist design. Provides warm, ambient lighting.",
    category: "lighting",
    imageUrl: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    modelUrl: "/models/lamp.glb",
    colors: ["Gold", "Silver", "Black"],
    inStock: true
  },
  {
    id: "3",
    name: "Abstract Wall Art",
    price: 299.99,
    description: "A stunning piece of abstract wall art to add character to your home.",
    category: "decor",
    imageUrl: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    colors: ["Multicolor"],
    inStock: true,
    featured: true
  },
  {
    id: "4",
    name: "Scandinavian Dining Chair",
    price: 199.99,
    description: "A comfortable dining chair with Scandinavian-inspired design.",
    category: "furniture",
    imageUrl: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    modelUrl: "/models/chair.glb",
    colors: ["Natural", "Black", "White"],
    inStock: true
  },
  {
    id: "5",
    name: "Geometric Area Rug",
    price: 249.99,
    description: "A soft, geometric area rug to tie your room together.",
    category: "textile",
    imageUrl: "https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    colors: ["Blue/Gray", "Beige/Brown", "Black/White"],
    sizes: ["5'x8'", "8'x10'", "9'x12'"],
    inStock: true
  },
  {
    id: "6",
    name: "Minimalist Floor Vase",
    price: 89.99,
    description: "A tall, minimalist floor vase perfect for displaying dried botanicals.",
    category: "decor",
    imageUrl: "https://images.pexels.com/photos/6207364/pexels-photo-6207364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    modelUrl: "/models/vase.glb",
    colors: ["White", "Black", "Terracotta"],
    inStock: true,
    featured: true
  },
  {
    id: "7",
    name: "Velvet Accent Chair",
    price: 349.99,
    description: "A luxurious velvet accent chair with gold-toned metal legs.",
    category: "furniture",
    imageUrl: "https://images.pexels.com/photos/1366872/pexels-photo-1366872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    modelUrl: "/models/accent-chair.glb",
    colors: ["Emerald", "Navy", "Blush"],
    inStock: true
  },
  {
    id: "8",
    name: "Ceramic Planter Set",
    price: 59.99,
    description: "A set of three ceramic planters in varying sizes, perfect for succulents or small plants.",
    category: "decor",
    imageUrl: "https://images.pexels.com/photos/6207818/pexels-photo-6207818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    colors: ["White", "Black", "Terracotta"],
    inStock: true
  }
];

export const categories: Category[] = [
  {
    id: "furniture",
    name: "Furniture",
    description: "Modern and classic furniture for every room",
    imageUrl: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "lighting",
    name: "Lighting",
    description: "Brighten your space with our designer lighting collection",
    imageUrl: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "decor",
    name: "Decor",
    description: "Accent pieces and art to elevate your home",
    imageUrl: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "textile",
    name: "Textiles",
    description: "Soft furnishings and textiles for comfort and style",
    imageUrl: "https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};