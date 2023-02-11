import React from 'react';

import Image from 'next/image';

import CardBack from 'public/images/bg-card-back.png';
import CardFront from 'public/images/bg-card-front.png';

const Card = (props) => {
    return (
        <div className='w-[90vw] h-80 mx-auto relative'>
            <Image
                src={CardBack}
                width={350}
                alt='card back'
                className='absolute right-4 top-4'
            ></Image>
            <Image
                src={CardFront}
                width={350}
                alt='card front'
                className='absolute left-4 bottom-4'
            ></Image>
        </div>
    );
};

export default Card;
