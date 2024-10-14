import React from 'react';

const CustomButton = ({ text, buttonColor, disabled, textColor, rounded, onClick }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`px-6 py-3 ${rounded} font-semibold transition-all duration-300 
            ${disabled ? 'bg-gray-400 cursor-not-allowed' : `${buttonColor} hover:opacity-90`} 
            ${textColor}`}
        >
            {text}
        </button>
    );
};

export default CustomButton;
