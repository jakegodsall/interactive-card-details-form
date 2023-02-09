import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

const Form = () => {
    // form data state
    const [formData, setFormData] = useState({
        cardholderName: '',
        cardNumber: '',
        expiryMonth: 1,
        expiryYear: 2030,
        cvc: 111,
    });
    // react-hook-form handling
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    // handle submission of form data
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input
                    {...register('cardholderName', {
                        required: true,
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
                        pattern: /^[0-9]*$/,
                        maxLength: 16,
                        minLength: 16,
                    })}
                />
                {errors.cardNumber?.type === 'required' && <p>Card number cannot be blank.</p>}
                {errors.cardNumber?.type === 'pattern' && <p>Wrong format, numbers only.</p>}
                {errors.cardNumber?.type === 'maxLength' && (
                    <p>Card number should be 16 characters.</p>
                )}
                {errors.cardNumber?.type === 'minLength' && (
                    <p>Card number should be 16 characters.</p>
                )}
            </div>
            <div>
                <div>
                    <div>
                        <input
                            {...register('expiryMonth', {
                                required: true,
                                pattern: /^[0-9]*$/,
                            })}
                        />
                        {errors.expiryMonth?.type === 'required' && (
                            <p>Expiry month cannot be blank.</p>
                        )}
                        {errors.expiryMonth?.type === 'pattern' && (
                            <p>Wrong format, numbers only.</p>
                        )}
                    </div>
                    <div>
                        <input
                            {...register('expiryYear', {
                                required: true,
                                pattern: /^[0-9]*$/,
                            })}
                        />
                        {errors.expiryYear?.type === 'required' && (
                            <p>Expiry year cannot be blank.</p>
                        )}
                        {errors.expiryYear?.type === 'pattern' && (
                            <p>Wrong format, numbers only.</p>
                        )}
                    </div>
                </div>
                <input
                    {...register('cvc', {
                        required: true,
                        pattern: /^[0-9]*$/,
                        minLength: 3,
                        maxLength: 3,
                    })}
                />
                {errors.cvc?.type === 'required' && <p>CVC cannot be blank.</p>}
                {errors.cvc?.type === 'pattern' && <p>Wrong format, numbers only.</p>}
            </div>
            <input type='submit' />
        </form>
    );
};

export default Form;
