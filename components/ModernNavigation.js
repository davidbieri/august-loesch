import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const ModernNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/api/placeholder/175/50" 
              alt="August Lösch Signature" 
              className="h-8"
            />
            <span className="ml-2 text-xl font-semibold">Archive</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#home" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">Home</a>
            <a href="/timeline.html" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">Timeline</a>
            
            <div className="relative group">
              <button className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                Archive
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="/docs/lösch-archive_v0.pdf" className="block px-4 py-2 hover:bg-gray-100">Download</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Link 2</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Link 3</a>
              </div>
            </div>
            
            <a href="/docs/lösch-letters_v0.pdf" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">Letters</a>
            <a href="/works.html" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">Works</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 rounded-md hover:bg-gray-100">Home</a>
            <a href="/timeline.html" className="block px-3 py-2 rounded-md hover:bg-gray-100">Timeline</a>
            <a href="/docs/lösch-archive_v0.pdf" className="block px-3 py-2 rounded-md hover:bg-gray-100">Archive</a>
            <a href="/docs/lösch-letters_v0.pdf" className="block px-3 py-2 rounded-md hover:bg-gray-100">Letters</a>
            <a href="/works.html" className="block px-3 py-2 rounded-md hover:bg-gray-100">Works</a>
          </div>
        </div>
      )}
    </nav>
  );
};
