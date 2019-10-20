import React, { useState, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Alert } from './Alert.component';
import { AlertContext } from './../context/alert.context';
import { Api } from './../api';
import { Endpoints } from '../endpoints';
import { AuthedContext } from './../context/authed.context';

export const SignUpForm = () => {
    const [firstName, serFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [data, setData] = useState('');
    const [error, setError] = useState(false);
    const [direct, setRedirect] = useState(false);

    const { setAuthed } = useContext(AuthedContext);

    const submitForm = async event => {
        event.preventDefault();
        const body = JSON.stringify({
            firstName,
            lastName,
            userEmail,
            userPassword,
        });
        const router = `api/users/signup/`;
        const endpoints = new Endpoints(router);
        const url = endpoints.getUrl();
        const api = new Api(url, body);
        const data = await api.post();
        if (data.token) {
            setData(data);
            setAuthed(true);
            setRedirect(true);
        } else {
            setError(true);
        }
        localStorage.setItem('userToken', data.token);
    };

    return (
        <AlertContext.Provider
            value={{
                data,
                setError,
            }}
        >
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
                        value={userPassword}
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
        </AlertContext.Provider>
    );
};
