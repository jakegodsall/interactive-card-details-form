import React from 'react';

import Image from 'next/image';

import CardBack from 'public/images/bg-card-back.png';
import CardFront from 'public/images/bg-card-front.png';

const Card = (props) => {
    return (
        <React.Fragment>
            <Image src={CardBack}></Image>
            <Image src={CardFront}></Image>
        </React.Fragment>
    );
};

export default Card;
