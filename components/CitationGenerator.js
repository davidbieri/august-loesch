import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CitationGenerator = ({ document }) => {
  const [citationFormat, setCitationFormat] = useState('apa');
  const [copied, setCopied] = useState(false);

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
            <Check size={16} className="text-green-500" />
          ) : (
            <Copy size={16} className="text-gray-500" />
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

export default CitationGenerator;
