import React from 'react';

const CustomButton = ({ text, buttonColor, textColor, rounded }) => {
    return (
        <button
            className={`px-6 py-3 ${rounded} font-semibold transition-all duration-300 ${buttonColor} ${textColor} hover:opacity-90`}
        >
            {text}
        </button>
    );
};

export default CustomButton;
