import React, { useState, useContext } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { AuthedContext } from './../context/authed.context';

export const Navbar = () => {
    const [direct, setRedirect] = useState(false);

    const { authed, setAuthed } = useContext(AuthedContext);

    const logout = event => {
        event.preventDefault();
        setAuthed(false);
        localStorage.removeItem('authed');
        setRedirect(true);
    };

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            {direct === true ? <Redirect to="signin" /> : null}
            <div className="navbar-brand">My app</div>
            {authed == true ? (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" exact>
                            Главное страница
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/files">
                            Мои файлы
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signin" onClick={logout}>
                            Выход
                        </NavLink>
                    </li>
                </ul>
            ) : (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signin">
                            Войти
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">
                            Регистрация
                        </NavLink>
                    </li>
                </ul>
            )}
        </nav>
    );
};
