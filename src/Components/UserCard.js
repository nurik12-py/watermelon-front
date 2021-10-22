import React from 'react';
import { Disclosure } from '@headlessui/react';
import { DotsVerticalIcon, VideoCameraIcon, UserAddIcon, UserRemoveIcon } from "@heroicons/react/solid";

const UserCard = ({ id, email, firstName = "", lastName = "", avatarName = "anteater", avatarColor = "000000", onFriendRequest, onCall, onRemoveFriend, isFriend = false }) => {
    const getAvatar = (avatarName) => {
        return require(`../assets/${avatarName}.png`).default
    }
    return (
        <div className="mb-4 rounded-md bg-white border border-gray-100">
            <Disclosure>
                <div className="h-16 px-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div alt="" style={{ backgroundColor: `#${avatarColor}` }} className="w-10 h-10 p-2 rounded-full">
                            <img src={getAvatar(avatarName)} alt="" />
                        </div>
                        <p className="text-lg truncate">{firstName} {lastName}</p>
                    </div>
                    <Disclosure.Button className="w-5 h-5">
                        <DotsVerticalIcon className={` w-5 h-5 text-purple-500`} />
                    </Disclosure.Button>
                </div>
                <Disclosure.Panel className="p-2 flex items-center justify-between space-x-2 text-gray-500 ">
                    {!isFriend &&
                        <Disclosure.Button>
                            <button onClick={() => onFriendRequest(id)} className="flex items-center w-full space-x-2 bg-blue-50 rounded-lg p-2">
                                <div className="bg-blue-200 p-2 rounded-lg">
                                    <UserAddIcon className="h-4 w-4 text-blue-600" />
                                </div>
                                <span className="text-blue-500">Add friends</span>
                            </button>
                        </Disclosure.Button>
                    }
                    {isFriend &&
                        <>
                            <button onClick={() => onRemoveFriend(id)} className="flex items-center w-full space-x-2 bg-red-50 rounded-lg p-2">
                                <div className="bg-red-200 p-2 rounded-lg">
                                    <UserRemoveIcon className="h-4 w-4 text-red-600" />
                                </div>
                                <span className="text-red-500">Remove</span>
                            </button>
                            <button onClick={() => onCall(email)} className="flex items-center w-full space-x-2 bg-green-50 rounded-lg p-2">
                                <div className="bg-green-200 p-2 rounded-lg">
                                    <VideoCameraIcon className="h-4 w-4 text-green-600" />
                                </div>
                                <span className="text-green-500">Video-Call</span>
                            </button>
                        </>}
                </Disclosure.Panel>
            </Disclosure>
        </div>
    );
}

// const UserCardButton = ({text, color, onClick,}) => {
//     return <button onClick={() => onClick(id)} className={`flex items-center w-full space-x-2 bg-${color}-50 rounded-lg p-2`}>
//     <div className={`bg-${color}-200 p-2 rounded-lg`}>
//         <UserAddIcon className="h-4 w-4 text-blue-600" />
//     </div>
//     <span className="text-blue-500">{text}</span>
// </button>
// }

export default UserCard;