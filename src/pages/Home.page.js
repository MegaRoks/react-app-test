import React, { useContext, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { Form } from './../components/Form.component';
import { AuthedContext } from './../context/authed.context';

export const Home = () => {
    const { authed } = useContext(AuthedContext);

    return <Fragment>{authed == true ? <Form /> : <Redirect to="signin" />}</Fragment>;
};
