import Link from 'next/link';
import Image from 'next/image';
import { NavBar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">


      <section className="relative px-4 py-16 md:py-24 overflow-hidden">
       
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-start md:text-8xl lg:text-8xl font-bold">
              <span className="text-[#F9F871]">Shipping Soroban</span>{' '}
              <span className="text-[#F9F871]">Straight</span>{' '}
              <span className="text-[#FF4CF0]">to your browser</span>
            </h1>
      
<div className='relative'>
  <div className="relative mx-96 bg-[#A3FF12] rounded-xl w-64 h-20 shadow-[8px_0_16px_rgba(160,32,240,2)] z-10 transform translate-y-6">

</div>

            <img src="ellipse.png" alt="Ellipse" className="absolute -mt-24 items-start -left-24 -top-72 -z-10 " />
</div>
          </div>
        </div>
      </section>
      


<div className="border border-white rounded-3xl mx-auto max-w-5xl mt-4  mb-10">
  
  <section className="relative ">
    <img src="ellipse2.png" alt="Ellipse 2" className="absolute top-0 -left-96 px-96 z-10" />
    <img src="dot.png" alt="dot" className="absolute -top-4 -left-96 px-96 z-0" />
    <div className="relative mx-32 rounded-xl w-[729px] h-[470px] shadow-[8px_0_16px_rgba(160,32,240,0.8)] z-10 transform translate-y-16">
      <img src="playground.png" alt="Playground" className="absolute -top-2 -left- z-20" />
    </div>
  </section>

  {/* Why WebSoroban Section */}
  <section className=" py-32 bg-black">
    <div className="container mx-auto flex">
      <div><img src="semi.png" alt="Semi Circle" className="top-0 left-28 w-full h-full z-0" /></div>
      <div>
        <h2 className="text-6xl font-bold mb-2 mt-12 px-24 text-white">Why WebSoroban?</h2>
        <p className="text-gray-400 mb-12 max-w-2xl px-24">
          WebSoroban simplifies Soroban smart contract development, making it
          accessible for both beginners and experts.
        </p>
      </div>
    </div>
    <div className="container mx-auto max-w-6xl text-center">
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex items-start justify-start bg-[#1C2126] rounded-xl w-64 h-72 shadow-[8px_0_16px_rgba(160,32,240,0.8)] z-10 transform translate-y-16">
        </div>
        
        <div className="flex items-start justify-center mt-20 bg-[#1C2126] rounded-xl w-64 h-72 shadow-[8px_0_16px_rgba(160,32,240,0.8)] z-10 transform translate-y-16">
        </div>
        
        <div className="flex items-start justify-end mt-56 bg-[#1C2126] rounded-xl w-64 h-72 shadow-[8px_0_16px_rgba(160,32,240,0.8)] z-10 transform translate-y-16">
        </div>
      </div>
    </div>
  </section>

  {/* Get Started Steps */}
  <section className="px-8 py-16 bg-black">
    <div >
      <h2 className="text-6xl font-bold mb-2">Get Started in</h2>
      <h3 className="text-6xl font-bold text-[#8A2BE2] mb-4">Three Easy steps</h3>
      <p className="text-gray-400 mb-16 max-w-2xl">
        WebSoroban simplifies Soroban smart contract development, making it
        accessible for both beginners and experts.
      </p>

      <div className='flex gap-10 px-24'>
        <div className="flex items-start justify-start bg-[#1C2126] rounded-xl w-96 h-64 shadow-[8px_0_16px_rgba(160,32,240,0.8)] z-10">
        </div>
        <img src="vector.png" alt="Vector" className="mt-28 z-10" />
      </div>

      <div className='flex gap-10 mt-10 px-32'>
        <img src="turn.png" alt="Vector" className="mt-36 z-10" />
        <div className="flex items-start justify-end bg-[#1C2126] rounded-xl w-96 h-64 shadow-[8px_0_16px_rgba(160,32,240,0.8)] z-10">
        </div>
      </div>
      
      <div className='flex gap-10 mt-10 px-10'>
        <div className="flex items-start justify-end bg-[#1C2126] rounded-xl w-96 h-64 shadow-[8px_0_16px_rgba(160,32,240,0.8)] z-10">
        </div>
      </div>
    </div>
    
    <footer className="px-4 py-8 mt-16">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center">
        <Link href="#" className="text-md text-gray-500 hover:text-white transition-colors">
          Privacy Policy
        </Link>
        <div className="flex space-x-6">
          <Link href="#" className="text-md text-gray-500 hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
      
      {/* GitHub and Twitter logos */}
      <div className="flex justify-center space-x-6 mt-12">
        <Link href="#" className="text-gray-500 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </Link>
        <Link href="#" className="text-gray-500 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </Link>
      </div>
      
      <div className="flex justify-center mt-12 ">
        <p className="text-md text-gray-500">© {new Date().getFullYear()} WebSoroban. All rights reserved.</p>
      </div>
    </footer>
  </section>
  
</div>

      
    </main>
  );
}
