import React, { useState } from 'react';
import { Search, Filter, Calendar, File } from 'lucide-react';

const ArchiveSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Mock search results for demonstration
  const searchResults = [
    {
      id: 1,
      type: 'document',
      title: 'Economic Regions Analysis',
      date: '1940',
      category: 'manuscripts'
    },
    {
      id: 2,
      type: 'letter',
      title: 'Correspondence with Walter Eucken',
      date: '1943',
      category: 'letters'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Search input with animation */}
      <div className="relative mb-6 group">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search the archive..."
          className="w-full p-4 pl-12 pr-4 rounded-lg border border-gray-200 
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-all duration-200"
        />
        <Search 
          size={20} 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400
                     group-hover:text-gray-600 transition-colors duration-200" 
        />
      </div>

      {/* Filter tabs with animation */}
      <div className="flex space-x-4 mb-6">
        {['all', 'documents', 'letters', 'manuscripts'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full transition-all duration-200
                       ${activeFilter === filter 
                         ? 'bg-blue-500 text-white shadow-md' 
                         : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Search results with animation */}
      <div className="space-y-4">
        {searchResults.map((result) => (
          <div
            key={result.id}
            className="p-4 bg-white rounded-lg border border-gray-200 
                       hover:shadow-md transition-all duration-200
                       transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-2">
              {result.type === 'document' ? (
                <File size={16} className="text-blue-500 mr-2" />
              ) : (
                <Calendar size={16} className="text-green-500 mr-2" />
              )}
              <span className="text-sm text-gray-500">{result.category}</span>
            </div>
            <h3 className="text-lg font-medium mb-1">{result.title}</h3>
            <p className="text-gray-600">{result.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchiveSearch;
