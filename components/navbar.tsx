"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="mx-auto max-w-4xl mt-4 md:mt-8 mb-4 md:mb-8 px-4">
      <div className="backdrop-blur-md border border-white rounded-2xl px-4 md:px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-lg md:text-xl text-white">
            WebSoroban
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/playground" className="text-sm text-gray-300 hover:text-white transition-colors">
              Playground
            </Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Learn
            </Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-white/10 hover:text-white hover:border-gray-500 transition-all duration-200 rounded-lg px-4"
            >
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-600">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-sm text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/playground" 
                className="text-sm text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Playground
              </Link>
              <Link 
                href="#" 
                className="text-sm text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Learn
              </Link>
              <Link 
                href="#" 
                className="text-sm text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-white/10 hover:text-white hover:border-gray-500 transition-all duration-200 rounded-lg px-4 w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
