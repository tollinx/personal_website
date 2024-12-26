import { useState } from "react";
import { FiCopy } from "react-icons/fi"; // Install react-icons with `npm install react-icons`

const CopyTextButton = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-700 dark:text-gray-300">{textToCopy}</span>
      <button
        onClick={handleCopy}
        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
      >
        <FiCopy className="text-gray-700 dark:text-gray-300" />
      </button>
      {copied && <span className="text-green-500 text-sm">Copied!</span>}
    </div>
  );
};

export default CopyTextButton;
