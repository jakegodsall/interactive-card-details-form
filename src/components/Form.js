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
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mx-4'>
            <div className='flex flex-col'>
                <label htmlFor='cardholderName' className='uppercase'>
                    cardholder name
                </label>
                <input
                    className='border-2 border-light-grey-violet rounded-md p-2 focus:outline-linear-gradient1'
                    id='cardholderName'
                    placeholder='e.g. Jane Appleseed'
                    {...register('cardholderName', {
                        required: true,
                    })}
                />
                {errors.cardholderName?.type === 'required' && (
                    <p className='text-error-red text-sm font-bold'>Can't be blank</p>
                )}
                {errors.cardHolderName?.type === 'pattern' && (
                    <p className='text-error-red text-sm font-bold'>
                        Please enter a valid cardholder name.
                    </p>
                )}
            </div>
            <div className='flex flex-col'>
                <label htmlFor='cardNumber' className='uppercase'>
                    card number
                </label>
                <input
                    className='border-2 border-light-grey-violet rounded-md p-2 focus:outline-linear-gradient1'
                    id='cardNumber'
                    placeholder='e.g. 1234 5678 9123 0000'
                    maxLength='16'
                    {...register('cardNumber', {
                        required: true,
                        pattern: /^[0-9]*$/,
                        minLength: 16,
                    })}
                />
                {errors.cardNumber?.type === 'required' && (
                    <p className='text-error-red text-sm font-bold'>Can't be blank.</p>
                )}
                {errors.cardNumber?.type === 'pattern' && (
                    <p className='text-error-red text-sm font-bold'>Wrong format, numbers only.</p>
                )}
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <fieldset className='grid grid-cols-2 gap-2'>
                    <legend className='uppercase'>exp. date (mm/yy)</legend>
                    <div>
                        <input
                            className='border-2 border-light-grey-violet rounded-md p-2 focus:outline-linear-gradient1 w-full'
                            placeholder='MM'
                            maxLength='2'
                            {...register('expiryMonth', {
                                required: true,
                                pattern: /^[0-9]*$/,
                            })}
                        />
                        {errors.expiryMonth?.type === 'required' && (
                            <p className='text-error-red text-sm font-bold'>Can't be blank.</p>
                        )}
                        {errors.expiryMonth?.type === 'pattern' && (
                            <p className='text-error-red text-sm font-bold'>
                                Wrong format, numbers only.
                            </p>
                        )}
                    </div>
                    <div>
                        <input
                            className='border-2 border-light-grey-violet rounded-md p-2 focus:outline-linear-gradient1 w-full'
                            placeholder='YY'
                            maxLength='2'
                            {...register('expiryYear', {
                                required: true,
                                pattern: /^[0-9]*$/,
                            })}
                        />
                        {errors.expiryYear?.type === 'required' && (
                            <p className='text-error-red text-sm font-bold'>Can't be blank.</p>
                        )}
                        {errors.expiryYear?.type === 'pattern' && (
                            <p className='text-error-red text-sm font-bold'>
                                Wrong format, numbers only.
                            </p>
                        )}
                    </div>
                </fieldset>
                <div className='flex flex-col'>
                    <label htmlFor='cvc' className='uppercase'>
                        cvc
                    </label>
                    <input
                        className='border-2 border-light-grey-violet rounded-md p-2 focus:outline-linear-gradient1'
                        id='cvc'
                        placeholder='eg. 123'
                        maxLength='3'
                        {...register('cvc', {
                            required: true,
                            pattern: /^[0-9]*$/,
                            minLength: 3,
                            maxLength: 3,
                        })}
                    />
                    {errors.cvc?.type === 'required' && (
                        <p className='text-error-red text-sm font-bold'>Can't be blank.</p>
                    )}
                    {errors.cvc?.type === 'pattern' && (
                        <p className='text-error-red text-sm font-bold'>
                            Wrong format, numbers only.
                        </p>
                    )}
                </div>
            </div>
            <button
                type='submit'
                className='w-100% rounded-lg bg-very-dark-violet text-light-grey-violet py-3 mt-6 active:trasnlate-x-2'
            >
                Confirm
            </button>
        </form>
    );
};

export default Form;
