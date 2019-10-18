import React, { useState, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Alert } from './Alert.component';
import { Context } from './../context/context';
import { TokenContext } from './../context/token.context';

export const SignInForm = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [data, setData] = useState('');
    const [error, setError] = useState(false);
    const [direct, setRedirect] = useState(false);

    const { setUserToken } = useContext(TokenContext);

    const submitForm = async event => {
        event.preventDefault();
        const body = JSON.stringify({
            userEmail,
            userPassword,
        });
        const url = 'http://localhost:8081/api/users/signin/';
        const headers = {
            'content-type': 'application/json',
        };
        const method = 'POST';
        const res = await fetch(url, {
            method,
            body,
            headers,
        });
        const data = await res.json();
        setData(data);
        data.err ? setError(true) : setRedirect(true);
        data.token ? setUserToken(data.token) : setUserToken('');
    };

    return (
        <Context.Provider
            value={{
                data,
                setError,
            }}
        >
            <form>
                <h3>Войдти на сайт</h3>
                <hr />

                {error === true ? <Alert /> : null}
                {direct === true ? <Redirect to="/" /> : null}

                <div className="form-group">
                    <label htmlFor="inputEmail">Электронная почта</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Введите электронную почту"
                        value={userEmail}
                        onChange={event => setUserEmail(event.target.value)}
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
                        value={userPassword}
                        onChange={event => setUserPassword(event.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary" onClick={submitForm}>
                    Войдти
                </button>
            </form>

            <div className="pt-4">
                <Link to="/signup">У вас нет аккаунта?</Link>
            </div>
        </Context.Provider>
    );
};
