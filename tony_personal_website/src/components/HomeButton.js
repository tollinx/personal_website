import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HomeButton = () => {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <button onClick={handleClick} 
            className={`
                font-bold rounded-full text-white
                hover:text-black
                text-xs
                sm:p-4 sm:text-sm
                md:p-1 md:text-base
                lg:p-1 lg:text-xl
                `
            }>
        /Tony
        </button>
    );
};

export default HomeButton;
