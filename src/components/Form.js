import React from 'react';
import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

import Button from './UI/Button';

const Form = ({ onHandleForm, handleSubmit, register, errors, control }) => {
    return (
        <form
            onSubmit={handleSubmit(onHandleForm)}
            className='mx-auto px-4 flex flex-col max-w-[450px]'
        >
            <div className='flex flex-col my-4'>
                <label htmlFor='cardholderName' className='uppercase'>
                    cardholder name
                </label>
                <input
                    className='border-2 border-light-grey-violet rounded-md p-2 focus:outline-linear-gradient1'
                    id='cardholderName'
                    maxLength='20'
                    placeholder='e.g. Jane Appleseed'
                    {...register('cardholderName', {
                        required: true,
                    })}
                />
                {errors.cardholderName?.type === 'required' && (
                    <p className='text-error-red text-sm font-bold mt-2'>Can't be blank</p>
                )}
                {errors.cardHolderName?.type === 'pattern' && (
                    <p className='text-error-red text-sm font-bold mt-2'>
                        Please enter a valid cardholder name.
                    </p>
                )}
            </div>
            <div className='flex flex-col my-4'>
                <label htmlFor='cardNumber' className='uppercase'>
                    card number
                </label>
                <Controller
                    name='cardNumber'
                    control={control}
                    render={({ field: { onChange, onBlur, value, name, ref } }) => (
                        <PatternFormat
                            format='#### #### #### ####'
                            className='border-2 border-light-grey-violet rounded-md p-2 focus:outline-linear-gradient1'
                            placeholder='e.g. 1234 5678 9123 0000'
                            id='cardNumber'
                            name='cardNumber'
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            ref={ref}
                        />
                    )}
                />
                {errors.cardNumber?.type === 'required' && (
                    <p className='text-error-red text-sm font-bold mt-2'>Can't be blank</p>
                )}
                {errors.cardNumber?.type === 'pattern' && (
                    <p className='text-error-red text-sm font-bold mt-2'>
                        Wrong format, numbers only
                    </p>
                )}
            </div>
            <div className='grid grid-cols-2 gap-2 my-4'>
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
                                min: 1,
                                max: 12,
                            })}
                        />
                        {errors.expiryMonth?.type === 'required' && (
                            <p className='text-error-red text-sm font-bold mt-2'>Can't be blank</p>
                        )}
                        {errors.expiryMonth?.type === 'pattern' && (
                            <p className='text-error-red text-sm font-bold mt-2'>
                                Wrong format, numbers only
                            </p>
                        )}
                        {errors.expiryMonth?.type === 'min' && (
                            <p className='text-error-red text-sm font-bold mt-2'>
                                Enter a valid month
                            </p>
                        )}
                        {errors.expiryMonth?.type === 'max' && (
                            <p className='text-error-red text-sm font-bold mt-2'>
                                Enter a valid month
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
                            <p className='text-error-red text-sm font-bold mt-2'>Can't be blank</p>
                        )}
                        {errors.expiryYear?.type === 'pattern' && (
                            <p className='text-error-red text-sm font-bold mt-2'>
                                Wrong format, numbers only
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
                        <p className='text-error-red text-sm font-bold mt-2'>Can't be blank.</p>
                    )}
                    {errors.cvc?.type === 'pattern' && (
                        <p className='text-error-red text-sm font-bold mt-2'>
                            Wrong format, numbers only.
                        </p>
                    )}
                </div>
            </div>
            <Button type='submit'>Submit</Button>
        </form>
    );
};

export default Form;
