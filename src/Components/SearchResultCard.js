import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultCard = ({ roomName, isPrivate, roomId = "aaaa-aaaa" }) => {
    return (
        <div className="bg-white mt-1 px-3 py-3 flex justify-between w-full h-14 rounded-md border-gray-200 border">
            <p className="text-lg inline">{roomName}</p>
            <div className="flex items-center">
                {isPrivate ?
                    <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg> :
                    <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                    </svg>
                }
                <Link to={`/room/${roomId}`}>
                    <button className="inline px-4 py-0.5 border border-transparent font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Join</button>
                </Link>
            </div>
        </div>
    );
}

export default SearchResultCard;