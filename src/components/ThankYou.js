import React from 'react';

import Image from 'next/image';

import CompleteIcon from 'public/images/icon-complete.svg';

const ThankYou = () => {
    return (
        <div className='mx-auto px-4 flex flex-col items-center max-w-[450px]'>
            <Image src={CompleteIcon} alt='form data submitted' />
            <h1 className='uppercase tracking-widest text-3xl'>Thank You!</h1>
            <p className='text-dark-grey-violet tracking-wide font-bold'>
                We've added your card details
            </p>
            <button className='w-full '>Continue</button>
        </div>
    );
};

export default ThankYou;
