import React, { useState } from 'react';

import Card from '@/components/Card.js';
import Form from '../components/Form.js';

const Home = () => {
    const [formData, setFormData] = useState({});

    const formHandler = (data) => {
        console.log('from parent', data);

        return data;
    };

    return (
        <React.Fragment>
            <div className='absolute w-screen h-[30vh] bg-mainBackgroundMobile bg-no-repeat bg-cover lg:bg-mainBackgroundDesktop lg:w-[30vw] lg:h-screen'></div>
            <div className='w-screen h-screen flex flex-col lg:justify-center transition-all duration-1000'>
                <div className='grid grid-rows-[auto_1fr] gap-10 mt-10 lg:grid-rows-1 lg:grid-cols-2 lg:mx-auto lg:gap-[10rem]'>
                    <Card formData={formHandler} />
                    <Form onHandleForm={formHandler} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;
