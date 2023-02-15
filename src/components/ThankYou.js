import React from 'react';

import Image from 'next/image';

import CompleteIcon from 'public/images/icon-complete.svg';

import Button from './UI/Button';

const ThankYou = (props) => {
    const returnToFormHandler = () => {
        props.returnToForm(true);
    };

    return (
        <div
            className='mx-auto px-4 w-full flex flex-col gap-8 items-center max-w-[450px] lg:justify-center lg:w-[700px]'
            key={props.keyValue}
        >
            <Image src={CompleteIcon} alt='form data submitted' />
            <h1 className='uppercase tracking-widest text-3xl'>Thank You!</h1>
            <p className='text-dark-grey-violet tracking-wide font-bold'>
                We've added your card details
            </p>
            <Button type='button' onClick={returnToFormHandler}>
                Continue
            </Button>
        </div>
    );
};

export default ThankYou;
