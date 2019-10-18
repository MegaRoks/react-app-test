import React, { useState, Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { Alert } from './Alert.component';

export const SignInForm = () => {
    const [emails, setEmails] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState('');

    const submitForm = async event => {
        event.preventDefault();
        const body = JSON.strignify({
            userEmail: emails,
            userPassword: password,
        });
        const url = 'http://localhost:8081/api/users/signin/';
        const headers = {
            'content-type': 'application/json',
        };
        const method = 'POST';
        const response = await fetch(url, {
            method,
            body,
            headers,
        });
        const data = await response.json();
        setData(data);
        console.log(data);
    };

    return (
        <Fragment>
            <form>
                <h3>Войдти на сайт</h3>
                <hr />
                {/* {data.err ? <Alert error={data.err} /> : <Redirect to="/" />} */}

                <div className="form-group">
                    <label htmlFor="inputEmail">Электронная почта</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Введите электронную почту"
                        value={emails}
                        onChagne={event => setEmails(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Пароль</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Введите пароль"
                        value={password}
                        onChagne={event => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={submitForm}>
                    Войдти
                </button>
            </form>
            <div className="pt-4">
                <Link to="/signup">У вас нет аккаунта?</Link>
            </div>
        </Fragment>
    );
};
