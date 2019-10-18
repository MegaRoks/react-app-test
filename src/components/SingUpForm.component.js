import React, { useEffect, useState } from 'react';

export const SingUpForm = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        createUser();
    }, []);

    async function createUser(body) {
        const response = await fetch('http://localhost:8081/api/users/signup/', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    }

    return (
        <form>
            <h3>Регистрация</h3>
            <hr />
            <div className="form-group">
                <label for="exampleInputEmail1">Имя пользователь</label>
                <input type="text" className="form-control" name="inputFirstName" placeholder="Введите имя" />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Фамилие пользователя</label>
                <input type="text" className="form-control" name="inputLastName" placeholder="введите фамилие" />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Электронная почта</label>
                <input
                    type="email"
                    className="form-control"
                    name="inputEmail"
                    placeholder="Введите электронную почту"
                />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Пароль</label>
                <input type="password" className="form-control" name="inputPassword" placeholder="Введите пароль" />
            </div>
            <button type="submit" className="btn btn-primary">
                Регистрация
            </button>
        </form>
    );
};
