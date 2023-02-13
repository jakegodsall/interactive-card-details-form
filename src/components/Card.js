import React from 'react';

import Image from 'next/image';

import CardBack from 'public/images/bg-card-back.png';
import CardFront from 'public/images/bg-card-front.png';

const Card = (props) => {
    return (
        <div className='w-full max-w-[450px] h-auto relative py-40 px-2 flex flex-col items-center justify-center'>
            <div className='absolute w-[330px] max-w-[400px] aspect-[11/6] bg-cardBack bg-no-repeat bg-cover right-2 top-2 rounded-md md:w-[400px] transition-all duration-1000'>
                <p className='absolute tracking-widest top-[5rem] right-12 text-white text-xs'>
                    000
                </p>
            </div>
            <div className='absolute w-[330px] max-w-[400px] aspect-[11/6] bg-cardFront bg-no-repeat bg-cover left-2 bottom-2 rounded-md text-[#fff] md:w-[400px] transition-all duration-1000 flex flex-col items-center p-6'>
                <Image
                    src='./images/card-logo.svg'
                    alt='logo'
                    width={60}
                    height={60}
                    className='self-start'
                />
                <p className='text-2xl self-start mt-auto mb-3 tracking-widest'>
                    0000 0000 0000 0000
                </p>
                <div className='flex justify-between items-end w-full'>
                    <p className='uppercase tracking-widest text-xs'>jane appleseed</p>
                    <p className='tracking-widest text-xs'>00/00</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
