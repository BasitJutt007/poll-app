import React from 'react';

const CustomButton = ({ text, buttonColor, textColor, rounded, onClick }) => {
    console.log('CustomButton buttonColor:::', buttonColor);
    return (
        <button
            onClick={onClick}
            className={`px-6 py-3 ${rounded} font-semibold transition-all duration-300  ${buttonColor} ${textColor} hover:opacity-90`}
        >
            {text}
        </button>
    );
};

export default CustomButton;
