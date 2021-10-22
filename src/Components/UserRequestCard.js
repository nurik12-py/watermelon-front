import React from 'react';

const UserRequestCard = ({ id, email = "", onAccept, onReject }) => {
    return (
        <div className="mb-4 rounded-md bg-white border border-gray-100 h-16 px-3 flex items-center justify-between">
            <div className="flex items-center w-4/6">
                <p className="text-lg truncate">{email}</p>
            </div>
            <div className="flex items-center w-2/6 space-x-2">
                <button onClick={() => onReject(id)} className="p-2 bg-red-50 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                <button onClick={() => onAccept(id)} className="p-2 bg-blue-50 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default UserRequestCard;