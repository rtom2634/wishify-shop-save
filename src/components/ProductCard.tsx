
import React from 'react';
import { Product } from '@/data/products';
import { useWishlist } from '@/contexts/WishlistContext';
import { Button } from '@/components/ui/button';
import { Bookmark, BookmarkPlus, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);
  
  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  const handleAddToCart = () => {
    toast.success(`${product.title} added to cart`);
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-medium line-clamp-2">{product.title}</CardTitle>
        <p className="text-lg font-bold text-shop-primary">${product.price.toFixed(2)}</p>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <Button 
          onClick={handleAddToCart} 
          className="bg-shop-primary hover:bg-shop-secondary text-white"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
        <Button 
          variant="outline" 
          onClick={handleWishlistToggle}
          className={`border ${inWishlist ? 'border-shop-primary text-shop-primary' : 'border-gray-300'}`}
        >
          {inWishlist ? (
            <>
              <Bookmark className="w-4 h-4 mr-2 text-shop-primary" />
              Saved
            </>
          ) : (
            <>
              <BookmarkPlus className="w-4 h-4 mr-2" />
              Save
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
