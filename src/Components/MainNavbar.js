import React from 'react';
import { Link } from 'react-router-dom';

const MainNavbar = ({ title }) => {
    return (
        <nav className="w-full h-14 bg-white relative flex justify-center items-center shadow-sm">

            <Link to="/profile" className="w-7 h-7 text-gray-600 absolute left-4">
            </Link>

            <h2 className="text-xl font-bold">{title}</h2>

            <Link to="/friends" className="w-7 h-7 text-gray-600 absolute right-4">

            </Link>
        </nav>
    );
}

export default MainNavbar;