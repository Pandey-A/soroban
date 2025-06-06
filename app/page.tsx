import Link from 'next/link';
import Image from 'next/image';
import { NavBar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative px-4 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-start md:text-8xl lg:text-8xl font-bold">
              <span className="text-yellow-300">Shipping Soroban</span>{' '}
              <span className="text-yellow-300">Straight</span>{' '}
              <span className="text-purple-500">to your browser</span>
            </h1>
      
            <Link href="/playground">
              <Button 
                size="lg"
                className="button-Sponsor">
                Get Started
              </Button>
            </Link>
            <img src="ellipse.png" alt="Ellipse" className="-mt-52 items-start w-96 h-full md:h-full" />
          </div>
        </div>
      </section>


      {/* Why WebSoroban Section */}
      <section className="px-4 py-16 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-2">Why WebSoroban?</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            WebSoroban simplifies Soroban smart contract development, making it
            accessible for both beginners and experts.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border border-purple-600 rounded-xl p-6 h-48">
              {/* Empty card matching the design */}
            </Card>
            <Card className="bg-gray-900/50 border border-purple-600 rounded-xl p-6 h-48">
              {/* Empty card matching the design */}
            </Card>
            <Card className="bg-gray-900/50 border border-purple-600 rounded-xl p-6 h-48">
              {/* Empty card matching the design */}
            </Card>
          </div>
        </div>
      </section>

      {/* Get Started Steps */}
      <section className="px-4 py-16 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-2">Get Started in</h2>
          <h3 className="text-2xl font-bold text-purple-500 mb-4">Three Easy steps</h3>
          <p className="text-gray-400 mb-16 max-w-2xl">
            WebSoroban simplifies Soroban smart contract development, making it
            accessible for both beginners and experts.
          </p>

          <div className="relative">
            {/* Step 1 - Top Left */}
            <div className="absolute top-0 left-0">
              <Card className="bg-gray-900/50 border border-purple-600 rounded-xl w-64 h-32">
                {/* Empty card matching the design */}
              </Card>
            </div>
            
            {/* Step 2 - Center Right */}
            <div className="absolute top-24 right-32">
              <Card className="bg-gray-900/50 border border-purple-600 rounded-xl w-64 h-32">
                {/* Empty card matching the design */}
              </Card>
            </div>
            
            {/* Step 3 - Bottom Center */}
            <div className="absolute top-48 left-1/2 transform -translate-x-1/2">
              <Card className="bg-gray-900/50 border border-purple-600 rounded-xl w-64 h-32">
                {/* Empty card matching the design */}
              </Card>
            </div>
            
            {/* Spacer for layout */}
            <div className="h-80"></div>
          </div>
          
          {/* Final CTA Section */}
          <div className="mt-24 w-full border border-purple-900 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(147,51,234,0.3)] bg-gradient-to-br from-purple-900/30 to-black">
            <div className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
              <Link href="/playground">
                <Button className="px-8 py-6 text-lg bg-green-400 hover:bg-green-500 text-black font-medium rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(163,230,53,0.5)]">
                  Start Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="px-4 py-8 border-t border-gray-800 mt-16">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} WebSoroban. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}