// components/AnimatedHeader.js
/* global React */

// Define BreadcrumbNav component first
const BreadcrumbNav = ({ path }) => {
  return (
    <nav className="flex items-center space-x-2 text-gray-600 mb-6">
      <a href="/" className="flex items-center hover:text-blue-600 transition-colors duration-200">
        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span>Home</span>
      </a>
      {path.map((item, index) => (
        <React.Fragment key={index}>
          <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
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

// Main AnimatedHeader component
const AnimatedHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <BreadcrumbNav 
          path={[
            { label: 'Archive', href: '/archive' },
            { label: 'Documents', href: '/archive/documents' }
          ]} 
        />
        
        <h1 className="text-3xl font-semibold mb-4 transform hover:scale-[1.01] transition-transform duration-200">
          August Lösch Archive
        </h1>
        
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

// Export both components
window.AnimatedHeader = AnimatedHeader;
