import React from 'react';

import Image from 'next/image';

const Card = (props) => {
    const formData = props.watch();

    return (
        <div className='mx-auto w-full max-w-[450px] h-auto relative py-40 px-2 flex flex-col items-center justify-center md:py-44 lg:h-[500px]'>
            <div className='absolute w-[330px] max-w-[400px] aspect-[11/6] bg-cardBack bg-no-repeat bg-cover right-2 top-2 rounded-md md:w-[400px] md:-right-14 lg:bottom-2 lg:top-auto transition-all duration-1000'>
                <p className='absolute tracking-widest top-[5rem] right-12 text-white text-xs text-[#fff] md:top-[6.25rem] transition-all duration-1000'>
                    000
                </p>
            </div>
            <div className='absolute w-[330px] max-w-[400px] aspect-[11/6] bg-cardFront bg-no-repeat bg-cover left-2 bottom-2 rounded-md flex flex-col items-center p-6 text-[#fff] md:w-[400px] lg:top-2 lg:bottom-auto transition-all duration-1000'>
                <Image
                    src='./images/card-logo.svg'
                    alt='logo'
                    width={60}
                    height={60}
                    className='self-start'
                />
                <p className='text-2xl self-start mt-auto mb-3 tracking-widest md:text-[1.7rem] md:mb-6 transition-all duration-1000'>
                    0000 0000 0000 0000
                </p>
                <div className='flex justify-between items-end w-full'>
                    <p className='uppercase tracking-widest text-xs md:text-sm transition-all duration-1000'>
                        jane appleseed
                    </p>
                    <p className='tracking-widest text-xs md:text-sm transition-all duration-1000'>
                        00/00
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
