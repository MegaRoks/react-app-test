import React from 'react';

export const SingInForm = () => (
    <form>
        <h3>Войдти на сайт</h3>
        <hr />
        <div class="form-group">
            <label for="exampleInputEmail1">Электронная почта</label>
            <input type="email" class="form-control" id="inputEmail" placeholder="Введите электронную почту" />
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Пароль</label>
            <input type="password" class="form-control" id="inputPassword" placeholder="Введите пароль" />
        </div>
        <button type="submit" class="btn btn-primary">
            Войдти
        </button>
    </form>
);
