import React, { useContext, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { Form } from './../components/Form.component';
import { AuthedContext } from './../context/authed.context';

export const Home = () => {
    const { authed } = useContext(AuthedContext);

    console.log(authed);

    return <Fragment>{authed == true ? <Form /> : <Redirect to="signin" />}</Fragment>;
};
