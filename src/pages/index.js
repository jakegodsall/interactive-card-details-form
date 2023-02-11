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
            <Card formData={formHandler} />
            <Form onHandleForm={formHandler} />
        </React.Fragment>
    );
};

export default Home;
