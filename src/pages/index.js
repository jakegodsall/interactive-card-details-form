import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

import Card from '@/components/Card.js';
import Form from '../components/Form.js';
import ThankYou from '@/components/ThankYou.js';
import Transition from '@/components/Transition.js';

const Home = () => {
    const [formData, setFormData] = useState('');
    const [dataSubmitted, setDataSubmitted] = useState(false);

    // react-hook-form handling
    const {
        register,
        watch,
        formState: { errors },
        handleSubmit,
        control,
    } = useForm({ mode: 'onBlur' });
    // handle submission of form data

    const formHandler = (data) => {
        setFormData(data);

        setDataSubmitted((prevState) => !prevState);

        console.log('status', dataSubmitted);
    };

    const returnToFormHandler = (returnToForm) => {
        console.log('working');
        console.log(returnToForm);
        setDataSubmitted(!returnToForm);
    };

    return (
        <React.Fragment>
            <div className='absolute w-screen h-[30vh] bg-mainBackgroundMobile bg-no-repeat bg-cover lg:bg-mainBackgroundDesktop lg:w-[30vw] lg:h-screen'></div>
            <div className='w-screen h-screen flex flex-col lg:justify-center transition-all duration-1000 text-default-font'>
                <div className='grid grid-rows-[auto_1fr] gap-10 mt-10 lg:grid-rows-1 lg:grid-cols-2 lg:mx-auto lg:gap-[10rem]'>
                    <Card formData={formHandler} watch={watch} />
                    <Transition
                        keyValue={!dataSubmitted ? 'form' : 'thankyou'}
                        styles='flex flex-col justify-center'
                    >
                        {!dataSubmitted ? (
                            <Form
                                onHandleForm={formHandler}
                                handleSubmit={handleSubmit}
                                register={register}
                                errors={errors}
                                control={control}
                                keyValue='form'
                            />
                        ) : (
                            <ThankYou returnToForm={returnToFormHandler} keyValue='thankyou' />
                        )}
                    </Transition>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;
