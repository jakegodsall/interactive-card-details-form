import React from 'react';

import Image from 'next/image';

const Card = (props) => {
    const formData = props.watch();

    const cardNumber = formData.cardNumber;

    const formatCardNumber = (cardNumber) => {
        if (cardNumber) {
            cardNumber = cardNumber.replace(/\s/g, '');

            let cardNumberDefault = '0000000000000000';
            let cardNumberDefaultArray = cardNumberDefault.split('');

            for (var i = 0; i < cardNumber.trim().length; i++) {
                cardNumberDefaultArray.shift();
                cardNumberDefaultArray.push(cardNumber[i]);
            }

            const formattedString =
                cardNumberDefaultArray.slice(0, 4).join('') +
                ' ' +
                cardNumberDefaultArray.slice(4, 8).join('') +
                ' ' +
                cardNumberDefaultArray.slice(8, 12).join('') +
                ' ' +
                cardNumberDefaultArray.slice(12, 16).join('');

            return formattedString;
        }
    };

    formatCardNumber(cardNumber);

    const formatExpiryDate = (expiryMonth, expiryYear) => {
        let formattedStr = '00/00';

        if (expiryMonth && expiryYear) {
            formattedStr = `${expiryMonth}/${expiryYear}`;
        } else if (expiryYear) {
            formattedStr = `00/${expiryYear}`;
        } else if (expiryMonth) {
            formattedStr = `${expiryMonth}/00`;
        }

        return formattedStr;
    };

    const formatCVC = (cvc) => {
        let cvcArray = ['0', '0', '0'];

        for (let i = 0; i < cvc.trim().length; i++) {
            cvcArray.shift();
            cvcArray.push(cvc[i]);
        }

        return cvcArray.join('');
    };

    return (
        <div className='mx-auto w-full max-w-[450px] h-auto relative py-40 px-2 flex flex-col items-center justify-center md:py-44 lg:h-[500px]'>
            <div className='absolute w-[330px] max-w-[400px] aspect-[11/6] bg-cardBack bg-no-repeat bg-cover right-2 top-2 rounded-md md:w-[400px] md:-right-14 lg:bottom-2 lg:top-auto transition-all duration-1000'>
                <p className='absolute tracking-widest top-[5rem] right-12 text-white text-xs text-[#fff] md:top-[6.25rem] transition-all duration-1000'>
                    {formData.cvc ? formatCVC(formData.cvc) : '000'}
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
                    {formData.cardNumber
                        ? formatCardNumber(formData.cardNumber)
                        : '0000 0000 0000 0000'}
                </p>
                <div className='flex justify-between items-end w-full'>
                    <p className='uppercase tracking-widest text-xs md:text-sm transition-all duration-1000'>
                        {formData.cardholderName ? formData.cardholderName : 'jane appleseed'}
                    </p>
                    <p className='tracking-widest uppercase text-xs md:text-sm transition-all duration-1000'>
                        {formatExpiryDate(formData.expiryMonth, formData.expiryYear)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
