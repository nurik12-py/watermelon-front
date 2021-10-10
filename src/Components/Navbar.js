import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title, isRoom, onLeave }) => {
    return (
        <nav className="w-full h-14 bg-white relative flex justify-center items-center shadow-sm">
            {!isRoom &&
                <button onClick={() => window.history.back()} className="w-7 h-7 text-gray-600 absolute left-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                    </svg>
                </button>
            }
            <h2 className="text-xl font-bold">{title}</h2>
            {isRoom &&
                <div onClick={() => onLeave()} to="/" className="h-7 text-red-500 flex items-center absolute right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">Leave</span>
                </div>
            }
        </nav>
    );
}

export default Navbar;