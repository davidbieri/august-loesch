import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

const BreadcrumbNav = ({ path }) => {
  return (
    <nav className="flex items-center space-x-2 text-gray-600 mb-6">
      <a href="/" className="flex items-center hover:text-blue-600 transition-colors duration-200">
        <Home size={16} className="mr-1" />
        <span>Home</span>
      </a>
      {path.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={16} className="text-gray-400" />
          <a 
            href={item.href} 
            className="hover:text-blue-600 transition-colors duration-200"
          >
            {item.label}
          </a>
        </React.Fragment>
      ))}
    </nav>
  );
};

const AnimatedHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* Example breadcrumb path */}
        <BreadcrumbNav 
          path={[
            { label: 'Archive', href: '/archive' },
            { label: 'Documents', href: '/archive/documents' }
          ]} 
        />
        
        <h1 className="text-3xl font-semibold mb-4 transform hover:scale-[1.01] transition-transform duration-200">
          August Lösch Archive
        </h1>
        
        {/* Animated section headings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Documents', 'Letters', 'Works'].map((section, index) => (
            <div 
              key={section}
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 
                         transform hover:-translate-y-1 transition-all duration-200
                         cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h2 className="text-xl font-medium">{section}</h2>
              <p className="text-gray-600 mt-2">
                Browse the {section.toLowerCase()} collection
              </p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default AnimatedHeader;
