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
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
            <div className='flex flex-col'>
                <label htmlFor='cardholderName' className='uppercase'>
                    cardholder name
                </label>
                <input
                    className='border-2 border-light-grey-violet rounded-md p-2 focus:outline-dark-grey-violet'
                    id='cardholderName'
                    placeholder='e.g. Jane Appleseed'
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
                <label htmlFor='cardNumber'>card number</label>
                <input
                    id='cardNumber'
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
                <fieldset>
                    <legend>exp. date (mm/yy)</legend>
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
                </fieldset>
                <div>
                    <label htmlFor='cvc'>cvc</label>
                    <input
                        id='cvc'
                        {...register('cvc', {
                            required: true,
                            pattern: /^[0-9]*$/,
                            minLength: 3,
                            maxLength: 3,
                        })}
                    />
                </div>

                {errors.cvc?.type === 'required' && <p>CVC cannot be blank.</p>}
                {errors.cvc?.type === 'pattern' && <p>Wrong format, numbers only.</p>}
            </div>
            <input type='submit' />
        </form>
    );
};

export default Form;
