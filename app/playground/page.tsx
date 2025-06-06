"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Sidebar } from '@/components/playground/sidebar';
import { Search, Plus } from 'lucide-react';

export default function Playground() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Navbar */}
        <nav className="border-b border-gray-800 bg-gray-950 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="font-bold text-xl text-white">
                WebSoroban
              </Link>
              <Link href="/playground" className="text-sm text-white/80 hover:text-white px-3 py-1 rounded-md bg-purple-800/30">
                Playground
              </Link>
              <Link href="#" className="text-sm text-white/60 hover:text-white px-3 py-1">
                Community
              </Link>
              <Link href="#" className="text-sm text-white/60 hover:text-white px-3 py-1">
                Guides
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">Go</Button>
              <Button size="sm" variant="ghost" className="text-white/70 hover:text-white">
                <span className="sr-only">Account</span>
                <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
                  ?
                </div>
              </Button>
            </div>
          </div>
        </nav>
        
        {/* Content */}
        <div className="p-6">
          {/* Search */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input 
              type="search"
              placeholder="Search..."
              className="bg-gray-900 border-gray-800 pl-10 w-full rounded-md focus:ring-purple-500 focus:border-purple-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Projects Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3].map((project) => (
                <ProjectCard key={project} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ProjectCard() {
  return (
    <Link href="/playground/ide">
      <Card className="flex items-center justify-center bg-gray-900/70 hover:bg-gray-900 border border-purple-900/40 hover:border-purple-500/70 h-36 transition-all duration-300 rounded-lg cursor-pointer shadow-[0_0_15px_rgba(147,51,234,0.1)]">
        <div className="text-center">
          <Plus className="h-8 w-8 mx-auto mb-2 text-purple-400" />
          <p className="text-sm font-medium">New Project</p>
        </div>
      </Card>
    </Link>
  );
}