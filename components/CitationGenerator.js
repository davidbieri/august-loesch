// components/CitationGenerator.js
const CitationGenerator = ({ document }) => {
  const [citationFormat, setCitationFormat] = React.useState('apa');
  const [copied, setCopied] = React.useState(false);

  const generateCitation = (format) => {
    const currentYear = new Date().getFullYear();
    
    switch (format) {
      case 'apa':
        return `Lösch, A. (${document.year}). ${document.title}. August Lösch Archive. Retrieved ${currentYear} from https://losch-archive.org/documents/${document.id}`;
      case 'mla':
        return `Lösch, August. "${document.title}." August Lösch Archive, ${document.year}, losch-archive.org/documents/${document.id}.`;
      case 'chicago':
        return `Lösch, August. ${document.year}. "${document.title}." August Lösch Archive. Accessed ${currentYear}. https://losch-archive.org/documents/${document.id}.`;
      default:
        return '';
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Generate Citation</h3>
      
      {/* Format selector with animation */}
      <div className="flex space-x-4 mb-6">
        {['apa', 'mla', 'chicago'].map((format) => (
          <button
            key={format}
            onClick={() => setCitationFormat(format)}
            className={`px-4 py-2 rounded-md uppercase text-sm font-medium
                       transition-all duration-200
                       ${citationFormat === format 
                         ? 'bg-blue-500 text-white' 
                         : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {format}
          </button>
        ))}
      </div>

      {/* Citation output with animation */}
      <div className="relative">
        <div className="p-4 bg-gray-50 rounded-lg font-mono text-sm break-words">
          {generateCitation(citationFormat)}
        </div>
        
        <button
          onClick={() => copyToClipboard(generateCitation(citationFormat))}
          className="absolute top-2 right-2 p-2 rounded-md 
                     hover:bg-gray-200 transition-colors duration-200"
        >
          {copied ? (
            <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          ) : (
            <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Usage instructions */}
      <p className="mt-4 text-sm text-gray-600">
        Select your preferred citation format and click the copy icon to copy the citation to your clipboard.
      </p>
    </div>
  );
};

window.CitationGenerator = CitationGenerator;
