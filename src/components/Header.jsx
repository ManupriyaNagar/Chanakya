// components/Header.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Our Service', href: '/service' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Impact', href: '/impact' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white flex justify-between items-center px-8  shadow-sm">
      {/* Logo */}
      
      <img src="/header.png" alt="" className='w-48 h-24'/>

      {/* Navigation */}
      <nav className="flex space-x-8 items-center text-black">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link href={link.href} key={link.name} className="flex items-center space-x-2 group">
            {isActive && (
              <span className="w-2 h-2 bg-orange-500 rounded-full" />
            )}
            <span className="hover:text-black">{link.name}</span>
          </Link>
          
          );
        })}
      </nav>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full bg-gray-100">
          <Search className="w-4 h-4 text-gray-700" />
        </button>
        <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 text-sm font-medium text-black">
          Contact Us
        </button>
      </div>
    </header>
  );
}
