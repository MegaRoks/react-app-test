import React, { useState, useContext } from 'react';
import { Alert } from './Alert.component';
import { AlertContext } from './../context/alert.context';

export const Form = () => {
    const [file, setFile] = useState('');
    const [data, setData] = useState('');
    const [error, setError] = useState(false);

    console.log(file);

    const submitForm = async event => {
        event.preventDefault();
        console.log(file);
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
                            value={file}
                            onChange={event => setFile(event.target.value)}
                        />
                        <label className="custom-file-label">Выберите файл</label>
                    </div>
                </div>
            </form>
        </AlertContext.Provider>
    );
};
