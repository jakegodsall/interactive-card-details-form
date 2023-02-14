import React from 'react';

const Button = ({ onClick, type, children }) => {
    return (
        <button
            className='w-full rounded-lg bg-very-dark-violet text-light-grey-violet py-3 mt-6 active:trasnlate-x-2'
            type={type ? type : 'button'}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
