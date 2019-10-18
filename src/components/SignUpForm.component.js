import React, { useState, Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Alert } from './Alert.component';
import { Context } from './../Context';

export const SignUpForm = () => {
    const [firstName, serFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [data, setData] = useState('');
    const [error, setError] = useState(false);
    const [direct, setRedirect] = useState(false);

    const submitForm = async event => {
        event.preventDefault();
        const body = JSON.stringify({
            firstName,
            lastName,
            userEmail,
            userPassword,
        });
        const url = 'http://localhost:8081/api/users/signup/';
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
        data.err ? setError(true) : setRedirect(true);

        console.log(data);
    };

    return (
        <Context.Provider
            value={{
                data,
                setError,
            }}
        >
            <Fragment>
                <form>
                    <h3>Регистрация</h3>
                    <hr />

                    {error === true ? <Alert /> : null}
                    {direct === true ? <Redirect to="/" /> : null}

                    <div className="form-group">
                        <label htmlFor="inputFirstName">Имя пользователь</label>
                        <input
                            type="text"
                            className="form-control"
                            name="inputFirstName"
                            placeholder="Введите имя"
                            value={firstName}
                            onChange={event => serFirstname(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputLastName">Фамилие пользователя</label>
                        <input
                            type="text"
                            className="form-control"
                            name="inputLastName"
                            placeholder="введите фамилие"
                            value={lastName}
                            onChange={event => setLastName(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputEmail">Электронная почта</label>
                        <input
                            type="email"
                            className="form-control"
                            name="inputEmail"
                            placeholder="Введите электронную почту"
                            value={userEmail}
                            onChange={event => setUserEmail(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputPassword">Пароль</label>
                        <input
                            type="password"
                            className="form-control"
                            name="inputPassword"
                            placeholder="Введите пароль"
                            value={userRassword}
                            onChange={event => setUserPassword(event.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={submitForm}>
                        Регистрация
                    </button>
                </form>

                <div className="pt-4">
                    <Link to="/signin">Уже есть аккаунт?</Link>
                </div>
            </Fragment>
        </Context.Provider>
    );
};
