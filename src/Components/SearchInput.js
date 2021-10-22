import React from 'react';
import Label from './Label';
import { SearchCircleIcon } from '@heroicons/react/solid';

const SearchInput = ({ onChange, onSearch, name, value, label, type = "text", placeholder = "", }) => {
    return (
        <div className="mt-0.5 mb-0.5 relative">
            <Label htmlFor={name} text={label} />
            <input
                onChange={(e) => onChange(e)}
                name={name}
                value={value}
                type={type}
                placeholder={placeholder}
                className={`w-full dark:bg-gray-700 text-lg text-black dark:text-gray-400 placeholder-gray-500 border border-gray-200 dark:border-gray-700  rounded-md py-2 pl-4 focus:border-light-blue-500 dark:focus:border-gray-500 dark:focus:ring-gray-500 focus:outline-none focus:ring-1 focus:ring-light-blue-500`} />
            {value !== "" && <SearchCircleIcon onClick={() => onSearch()} className="absolute right-2 top-2 w-7 h-7 text-blue-600" />}
        </div>
    );

}

export default SearchInput;