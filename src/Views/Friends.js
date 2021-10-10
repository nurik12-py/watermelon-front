import React from 'react';
import Label from '../Components/Label';
import Navbar from '../Components/Navbar';

class Friends extends React.Component {
    render() {
        return (
            <div>
                <Navbar title={"Friends"} />
                <div className="px-4 py-4">
                    <Label text="Friend requets" />
                    <div className="mb-4 rounded-md bg-white border border-gray-100 h-16 px-3 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div alt="" className="w-10 h-10 bg-blue-100 rounded-full"></div>
                            <p className="text-lg">Carl</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <Label text="Friends" />
                    <div className="rounded-md bg-white border border-gray-100 h-16 px-3 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div alt="" className="w-10 h-10 bg-blue-100 rounded-full"></div>
                            <p className="text-lg">John</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Friends;