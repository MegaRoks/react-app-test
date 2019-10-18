import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">My app</div>
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
    </nav>
);
