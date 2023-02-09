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
                <input
                    {...register('cardNumber', {
                        required: true,
                    })}
                />
                {errors.cardNumber?.type === 'required' && <p>Card number cannot be blank.</p>}
            </div>
            <div>
                <div>
                    <div>
                        <input
                            type='number'
                            {...register('expiryMonth', {
                                required: true,
                            })}
                        />
                        {errors.expiryMonth?.type === 'required' && (
                            <p>Expiry month cannot be blank.</p>
                        )}
                    </div>
                    <div>
                        <input
                            type='number'
                            {...register('expiryYear', {
                                required: true,
                            })}
                        />
                        {errors.expiryYear?.type === 'required' && (
                            <p>Expiry year cannot be blank.</p>
                        )}
                    </div>
                </div>
                <input
                    type='number'
                    {...register('cvc', {
                        required: true,
                    })}
                />
                {errors.cvc?.type === 'required' && <p>CVC cannot be blank.</p>}
            </div>
            <input type='submit' />
        </form>
    );
};

export default Form;
