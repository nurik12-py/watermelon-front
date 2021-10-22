import React from 'react';

const UserLoadingCard = () => {
    return (
        <div className="mb-4 rounded-md bg-white border border-gray-100">

            <div className="h-16 px-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div alt="" className="w-10 h-10 p-1 rounded-full">
                        <div className="rounded-full h-8 w-8 bg-blue-300 animate-pulse"></div>
                    </div>
                    <div className="h-1.5 w-20 rounded-xl bg-gray-400"></div>
                </div>

            </div>
        </div>
    );
}

export default UserLoadingCard;