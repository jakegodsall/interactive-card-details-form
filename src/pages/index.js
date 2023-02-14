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
            <div className='absolute w-screen h-[30vh] bg-mainBackgroundMobile md:bg-mainBackgroundDesktop bg-no-repeat bg-cover'></div>
            <div className='w-screen h-screen flex flex-col'>
                <div className='grid grid-rows-[auto_1fr] gap-10 mt-10'>
                    <Card formData={formHandler} />
                    <Form onHandleForm={formHandler} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;
