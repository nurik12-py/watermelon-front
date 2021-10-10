import React from 'react';

const RadioButton = ({ label, name, value, description, onChange, isSelected }) => {
    return (
        <label class="flex mt-2">
            <input onChange={e => onChange(e)} name={name} value={value} checked={isSelected} type="radio" class="mt-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
            <div className="ml-2">
                <span class="">{label}</span>
                <p className="text-gray-500">{description}</p>
            </div>
        </label>
    );
}

export default RadioButton;