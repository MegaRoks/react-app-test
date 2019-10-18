import React, { useState, useContext } from 'react';
import { Alert } from './Alert.component';
import { AlertContext } from './../context/alert.context';
import { TokenContext } from './../context/token.context';

export const Form = () => {
    const [data, setData] = useState('');
    const [error, setError] = useState('');

    const { userToken } = useContext(TokenContext);

    const fileUploader = async file => {
        console.log(file);
        const url = 'http://localhost:8081/file/add/';
        const body = new FormData();
        body.append('file', file);
        const headers = {
            token: userToken,
        };
        const method = 'POST';
        const res = await fetch(url, {
            headers,
            method,
            body,
        });
        console.log(headers);
        const data = await res.json();
        data.err ? setError(true) : setError(false);
        setData(data);

        console.log(data);
    };

    return (
        <AlertContext.Provider
            value={{
                data,
                setError,
            }}
        >
            <form>
                <h3>Загрузка файлов</h3>
                <hr />

                {error === true ? <Alert /> : null}

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Загрузить</span>
                    </div>
                    <div className="custom-file">
                        <input
                            type="file"
                            name="file"
                            className="custom-file-input"
                            id="inputFile"
                            onChange={event => fileUploader(event.target.files[0])}
                        />
                        <label className="custom-file-label">Выберите файл</label>
                    </div>
                </div>
            </form>
        </AlertContext.Provider>
    );
};
