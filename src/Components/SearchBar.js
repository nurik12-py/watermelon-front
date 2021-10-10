import React from 'react';

const SearchBar = ({ onChange, name, value, type = "text", }) => {
    return (
        <div class="relative w-full">
            <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
            </svg>
            <input
                onChange={(e) => onChange(e)}
                name={name}
                value={value}
                type={type}
                placeholder="Search room or Enter room code" className="w-full dark:bg-gray-700 text-lg text-black dark:text-gray-400 placeholder-gray-500 border border-gray-200 dark:border-gray-700  rounded-md py-2 pl-10 focus:border-light-blue-500 dark:focus:border-gray-500 dark:focus:ring-gray-500 focus:outline-none focus:ring-1 focus:ring-light-blue-500" />
        </div>
    );
}

export default SearchBar;