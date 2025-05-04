
import React from 'react';
import Navbar from './Navbar';
import { WishlistProvider } from '@/contexts/WishlistContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <WishlistProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container py-6 md:py-10">
          {children}
        </main>
        <footer className="border-t py-6">
          <div className="container flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Wishify. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-muted-foreground">
                Made with Lovable
              </span>
            </div>
          </div>
        </footer>
      </div>
    </WishlistProvider>
  );
};

export default Layout;
