import React, { useState } from 'react';

import Card from '@/components/Card.js';
import Form from '../components/Form.js';

const Home = () => {
    const [formData, setFormData] = useState({
        cardholderName: '',
        cardNumber: '',
        expiryMonth: 1,
        expiryYear: 2030,
        cvc: 111,
    });

    const onHandleForm = (data) => {
        setFormData(data);

        console.log(formData);
    };

    return (
        <React.Fragment>
            <Card />
            <Form formData={onHandleForm} />
        </React.Fragment>
    );
};

export default Home;
