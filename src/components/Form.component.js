import React, { useState } from 'react';
import { Alert } from './Alert.component';
import { AlertContext } from './../context/alert.context';
import { Api } from './../api';
import { Endpoints } from '../endpoints';
import { Info } from './Info.component';

export const Form = () => {
    const [data, setData] = useState('');
    const [error, setError] = useState(false);
    const [info, setInfo] = useState(false);

    const fileUploader = async file => {
        const router = `file/add/`;
        const endpoints = new Endpoints(router);
        const url = endpoints.getUrl();
        const formData = new FormData();
        const userToken = localStorage.getItem('userToken');
        formData.append('file', file);
        const api = new Api(url, formData, userToken);
        const data = await api.upload();
        if (data.err) {
            setError(true);
        } else {
            setError(false);
            setInfo(true);
        }
        setData(data);
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
                {info === true ? <Info data={data} /> : null}

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
