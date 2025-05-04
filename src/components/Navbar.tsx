
import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, ShoppingCart } from 'lucide-react';
import { useWishlist } from '@/contexts/WishlistContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const { wishlist } = useWishlist();
  
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-xl font-bold bg-gradient-to-r from-shop-primary to-shop-secondary bg-clip-text text-transparent">
            Wishify
          </div>
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-shop-primary">
            Products
          </Link>
          <Link to="/wishlist" className="flex items-center gap-1">
            <Button variant="ghost" className="relative p-0 hover:bg-transparent">
              <Bookmark className="h-5 w-5 text-shop-primary" />
              {wishlist.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-shop-primary text-[10px] font-medium text-white">
                  {wishlist.length}
                </span>
              )}
            </Button>
            <span className="text-sm font-medium transition-colors hover:text-shop-primary">Wishlist</span>
          </Link>
          <Button variant="ghost" className="relative p-0 hover:bg-transparent">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
