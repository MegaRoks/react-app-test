import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const SignUpForm = () => {
    return (
        <Fragment>
            <form>
                <h3>Регистрация</h3>
                <hr />
                <div className="form-group">
                    <label htmlFor="inputFirstName">Имя пользователь</label>
                    <input type="text" className="form-control" name="inputFirstName" placeholder="Введите имя" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputLastName">Фамилие пользователя</label>
                    <input type="text" className="form-control" name="inputLastName" placeholder="введите фамилие" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">Электронная почта</label>
                    <input
                        type="email"
                        className="form-control"
                        name="inputEmail"
                        placeholder="Введите электронную почту"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Пароль</label>
                    <input type="password" className="form-control" name="inputPassword" placeholder="Введите пароль" />
                </div>
                <button type="submit" className="btn btn-primary">
                    Регистрация
                </button>
            </form>
            <div className="pt-4">
                <Link to="/signin">Уже есть аккаунт?</Link>
            </div>
        </Fragment>
    );
};
