// components/ArchiveSearch.js
const ArchiveSearch = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeFilter, setActiveFilter] = React.useState('all');

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
        <svg 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400
                     group-hover:text-gray-600 transition-colors duration-200"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
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
                <svg className="w-4 h-4 text-blue-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              ) : (
                <svg className="w-4 h-4 text-green-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
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

window.ArchiveSearch = ArchiveSearch;
