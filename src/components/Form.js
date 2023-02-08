import React from 'react';

import { useForm } from 'react-hook-form';

const Form = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input
                    {...register('cardholderName', {
                        required: true,
                        pattern: /^[A-Za-z]*$/,
                    })}
                />
                {errors.cardholderName?.type === 'required' && (
                    <p>Cardholder name cannot be blank.</p>
                )}
                {errors.cardHolderName?.type === 'pattern' && (
                    <p>Please enter a valid cardholder name.</p>
                )}
            </div>
            <div>
                <input {...register('cardNumber')} />
            </div>
            <div>
                <div>
                    <input type='number' {...register('expiryMonth')} />
                    <input type='number' {...register('expiryYear')} />
                </div>
                <input type='number' {...register('cvc')} />
            </div>
            <input type='submit' />
        </form>
    );
};

export default Form;
