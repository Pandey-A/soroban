"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  FileText, 
  Menu, 
  Search, 
  Settings, 
  Play, 
  ChevronUp, 
  ChevronDown,
  User
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PlaygroundIDE() {
  const [consoleExpanded, setConsoleExpanded] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeFile, setActiveFile] = useState('Cargo.toml');
  
  const files = [
    { name: 'Cargo.toml', type: 'config' },
    { name: 'lib.rs', type: 'rust' },
    { name: 'test.rs', type: 'rust' }
  ];

  const codeContent = `#![no_std]
use soroban_sdk::{contract, contractimpl, symbol_short, vec, Env, Symbol, Vec};

#[contract]
pub struct IncrementContract;

#[contractimpl]
impl IncrementContract {
    pub fn increment(env: Env, value: u32) -> u32 {
        value + 1
    }
}

mod test {
    use super::*;
    use soroban_sdk::Env;

    #[test]
    fn test_increment() {
        let env = Env::default();
        let contract_id = 
env.register_contract(None, 
IncrementContract);
        let client = 
IncrementContractClient::new(&env, 
&contract_id);
        let value = 10;
        let incremented_value = 
client.increment(&value);
        assert_eq!(incremented_value, 
11);
    }
}`;

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <div className={cn(
        "bg-gray-950 border-r border-gray-800 transition-all duration-300 flex flex-col",
        sidebarCollapsed ? "w-16" : "w-64"
      )}>
        <div className="p-3 border-b border-gray-800">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && (
              <h3 className="text-sm font-medium text-gray-300">Contract.rs</h3>
            )}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1 hover:bg-gray-800 rounded"
            >
              <Menu className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 p-3">
          <div className="space-y-1">
            {files.map((file) => (
              <button
                key={file.name}
                onClick={() => setActiveFile(file.name)}
                className={cn(
                  "w-full text-left px-2 py-1 rounded text-sm transition-colors flex items-center space-x-2",
                  activeFile === file.name 
                    ? "bg-purple-900/30 text-white" 
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                )}
              >
                <FileText className="h-4 w-4" />
                {!sidebarCollapsed && <span>{file.name}</span>}
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-3 border-t border-gray-800 space-y-1">
          <button className="w-full flex items-center space-x-2 px-2 py-1 text-gray-400 hover:text-white hover:bg-gray-800 rounded text-sm">
            <Search className="h-4 w-4" />
            {!sidebarCollapsed && <span>Search</span>}
          </button>
          <button className="w-full flex items-center space-x-2 px-2 py-1 text-gray-400 hover:text-white hover:bg-gray-800 rounded text-sm">
            <Settings className="h-4 w-4" />
            {!sidebarCollapsed && <span>Settings</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <nav className="bg-gray-950 border-b border-gray-800 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/" className="font-bold text-xl text-white">
                WebSoroban
              </Link>
              <Link href="/playground" className="text-sm text-white/60 hover:text-white px-3 py-1">
                Playground
              </Link>
              <Link href="#" className="text-sm text-white/80 hover:text-white px-3 py-1 rounded-md bg-purple-800/30">
                Community
              </Link>
              <Link href="#" className="text-sm text-white/60 hover:text-white px-3 py-1">
                Guides
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Play className="h-4 w-4 mr-1" />
                Go
              </Button>
              <Button size="sm" variant="ghost" className="text-white/70 hover:text-white">
                <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
              </Button>
            </div>
          </div>
        </nav>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col">
          {/* File Tab */}
          <div className="bg-gray-900 border-b border-gray-800 px-4 py-2">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-800 px-3 py-1 rounded-t text-sm text-white border-t-2 border-purple-500">
                {activeFile}
              </div>
            </div>
          </div>

          {/* Editor and Console Container */}
          <div className="flex-1 flex">
            {/* Code Editor */}
            <div className="flex-1 bg-gray-900 relative">
              <div className="absolute inset-0 p-4">
                <Textarea
                  value={codeContent}
                  className="w-full h-full bg-transparent border-none resize-none text-sm font-mono text-gray-300 focus:outline-none"
                  style={{ fontFamily: 'Monaco, Consolas, "Courier New", monospace' }}
                />
              </div>
              
              {/* Compile Button */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-lg shadow-lg">
                  Compile
                </Button>
              </div>
            </div>

            {/* Function Buttons Panel */}
            <div className="w-64 bg-gray-950 border-l border-gray-800 p-4">
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <Button
                    key={i}
                    variant="outline"
                    className="w-full bg-transparent border-purple-500 text-purple-300 hover:bg-purple-900/30 rounded-lg py-3"
                  >
                    Function
                  </Button>
                ))}
              </div>
            </div>

            {/* Console Panel */}
            <div className={cn(
              "bg-gray-950 border-l border-gray-800 transition-all duration-300 flex flex-col",
              consoleExpanded ? "w-80" : "w-12"
            )}>
              {/* Console Header */}
              <div className="border-b border-gray-800 p-3 flex items-center justify-between">
                {consoleExpanded && (
                  <h3 className="text-sm font-medium text-gray-300">Console</h3>
                )}
                <button
                  onClick={() => setConsoleExpanded(!consoleExpanded)}
                  className="p-1 hover:bg-gray-800 rounded text-gray-400 hover:text-white"
                >
                  {consoleExpanded ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </div>
              
              {/* Console Content */}
              {consoleExpanded && (
                <div className="flex-1 p-3">
                  <div className="bg-gray-900 rounded border border-gray-700 h-full p-3 font-mono text-xs text-gray-400">
                    <div className="space-y-1">
                      <div className="text-green-400">$ cargo build</div>
                      <div>Compiling contract v0.1.0</div>
                      <div className="text-green-400">Finished dev [unoptimized + debuginfo] target(s)</div>
                      <div className="text-gray-500">Ready for deployment</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}