// FileInput.tsx

import React, { useRef, useState } from 'react';

interface FileInputProps {
  onChange: (files: FileList | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const name = files[0].name;
      setFileName(name.length > 12 ? name.slice(0, 12) + '...' : name); // Set the file name
      onChange(files);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <label htmlFor="fileInput" className="cursor-pointer inline-block px-12 py-2 bg-white border border-black rounded text-xs">
        {fileName ? fileName : "Add your file"} {/* Show file name if available */}
      </label>
      <input
        ref={inputRef}
        id="fileInput"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileInput;
