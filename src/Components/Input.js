import React from 'react';
import Label from './Label';

const Input = ({ onChange, name, value, label, type = "text", placeholder = "", error, disabled = false, showLoadingAnimation = false }) => {
    return (
        <div className="mt-0.5 mb-0.5">
            <Label htmlFor={name} text={label} />
            <input
                onChange={(e) => onChange(e)}
                name={name}
                value={value}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                className={`w-full ${showLoadingAnimation ? 'animate-pulse' : ''} dark:bg-gray-700 text-lg text-black dark:text-gray-400 placeholder-gray-500 border border-gray-200 dark:border-gray-700  rounded-md py-2 pl-4 focus:border-light-blue-500 dark:focus:border-gray-500 dark:focus:ring-gray-500 focus:outline-none focus:ring-1 focus:ring-light-blue-500`} />
            {error && <div className="w-full p-3 bg-red-50 text-red-500 border-red-800 rounded-md">{error}</div>}
        </div>
    );
}

export default Input;
