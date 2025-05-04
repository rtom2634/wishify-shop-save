
export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Minimalist T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "A comfortable minimalist t-shirt made from organic cotton. Perfect for everyday casual wear."
  },
  {
    id: "2",
    title: "Designer Hoodie",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Stay warm and stylish with our premium designer hoodie. Features a soft inner lining and adjustable hood."
  },
  {
    id: "3",
    title: "Classic Denim Jeans",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Timeless denim jeans with a comfortable fit. Durable and versatile for any casual occasion."
  },
  {
    id: "4",
    title: "Leather Sneakers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Premium leather sneakers with cushioned insoles for all-day comfort. A perfect blend of style and functionality."
  },
  {
    id: "5",
    title: "Aviator Sunglasses",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Classic aviator sunglasses with polarized lenses. Provides 100% UV protection while keeping you stylish."
  },
  {
    id: "6",
    title: "Backpack",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "A durable everyday backpack with multiple compartments. Perfect for work, school, or travel."
  }
];
