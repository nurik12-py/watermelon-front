import React from 'react';
const Label = ({ htmlFor, text }) => {
    return (
        <label className="w-full mb-0.5 font-semibold text-lg" htmlFor={htmlFor}>{text}</label>
    );
}

export default Label;