import React from 'react';

const Avatar = ({ avatarName, color }) => {
    const getAvatar = (avatarName) => {
        return require(`../assets/${avatarName}.png`).default
    }
    return (
        <div className="bg-blue-600 rounded-full w-36 h-36 p-4" style={{ backgroundColor: `#${color}` }}>
            <img className="w-28 h-28" src={getAvatar(avatarName)} alt={avatarName} />
        </div>
    );
}

export default Avatar;