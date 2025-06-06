import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function NavBar() {
  return (
    <nav className="mx-auto max-w-4xl mt-8 mb-8">
      <div className=" backdrop-blur-md border border-white rounded-2xl px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-white">
            WebSoroban
          </Link>
          <div className="flex items-center space-x-8">
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
        </div>
      </div>
    </nav>
  );
}