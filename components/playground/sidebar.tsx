"use client";

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Home, FileCode, Activity, Settings, Menu } from 'lucide-react';

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <div className={cn(
      "h-full bg-gray-950 border-r border-gray-800 transition-all duration-300",
      collapsed ? "w-16" : "w-56"
    )}>
      <div className="flex flex-col h-full p-3">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 mb-4 rounded-md hover:bg-gray-800 self-end"
        >
          <Menu className="h-5 w-5 text-gray-400" />
        </button>
        
        <nav className="space-y-2 flex-1">
          <SidebarItem 
            icon={<Home className="h-5 w-5" />} 
            label="Home" 
            href="#"
            collapsed={collapsed}
            active={false}
          />
          <SidebarItem 
            icon={<FileCode className="h-5 w-5" />} 
            label="Files" 
            href="#"
            collapsed={collapsed}
            active={true}
          />
          <SidebarItem 
            icon={<Activity className="h-5 w-5" />} 
            label="Stats" 
            href="#"
            collapsed={collapsed}
            active={false}
          />
        </nav>
        
        <div className="mt-auto">
          <SidebarItem 
            icon={<Settings className="h-5 w-5" />} 
            label="Settings" 
            href="#"
            collapsed={collapsed}
            active={false}
          />
        </div>
      </div>
    </div>
  );
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  collapsed: boolean;
  active: boolean;
}

function SidebarItem({ icon, label, href, collapsed, active }: SidebarItemProps) {
  return (
    <Link 
      href={href}
      className={cn(
        "flex items-center space-x-2 px-3 py-2 rounded-md transition-colors",
        active 
          ? "bg-purple-900/30 text-white" 
          : "text-gray-400 hover:text-white hover:bg-gray-800"
      )}
    >
      <span>{icon}</span>
      {!collapsed && <span className="text-sm">{label}</span>}
    </Link>
  );
}