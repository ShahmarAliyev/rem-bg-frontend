// Button.tsx

import React from 'react';

// Define props interface
interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

// Button component
const Button: React.FC<ButtonProps> = ({ onClick, className = '', children }) => {
  return (
    <button className={`px-5 py-2 bg-[#AFC8AD] text-white rounded ${className} hover:bg-[#88AB8E]`} onClick={onClick}>
    {children}
  </button>
  );
};

export default Button;
