
import React from 'react';
import ProductCard from '@/components/ProductCard';
import Layout from '@/components/Layout';
import { products } from '@/data/products';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Discover Our Products
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Browse our latest collection and save your favorites for later
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-slide-up">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
