import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { Form } from './../components/Form.component';

export const Home = () => {
    const authed = localStorage.getItem('authed') || false;

    return <Fragment>{!!authed === true ? <Form /> : <Redirect to="signin" />}</Fragment>;
};
