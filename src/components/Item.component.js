import React, { useState, useEffect, useContext } from 'react';
import { Api } from './../api';
import { Endpoints } from '../endpoints';
import { LoaderContext } from './../context/loader.context';

export const Item = ({ code }) => {
    const [item, setItem] = useState([]);
    const [urlCode, setUrlCode] = useState('');
    const [fileName, setFileName] = useState('');
    const [error, setError] = useState(false);

    const { setShowLaoder } = useContext(LoaderContext);

    useEffect(() => {
        getItem(code);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const downloadFile = async event => {
        event.preventDefault();
        const router = `file/${urlCode}/${fileName}/`;
        const endpoints = new Endpoints(router);
        const url = endpoints.getUrl();
        const api = new Api(url);
        await api.get();
    };

    async function getItem(code) {
        const router = `${code}/`;
        const endpoints = new Endpoints(router);
        const url = endpoints.getUrl();
        const api = new Api(url);
        const item = (await api.get()).json();
        item.err ? setError(true) : setItem(item);
        setUrlCode(item.url_code);
        setFileName(item.file_name);
        setShowLaoder(false);
    }

    return (
        <div className="card">
            {error === true ? (
                <div>
                    <strong className="justify-content-center">Такого файла не суцествует</strong>
                </div>
            ) : (
                <div>
                    <h5 className="card-header">
                        <span>Оригинальное имя файла:&nbsp;</span>
                        <span>{item.file_name}</span>
                    </h5>

                    <div className="card-body">
                        <h5 className="card-title">
                            <span>Время загрузки файла:&nbsp;</span>
                            <span>{item.cteate_date}</span>
                        </h5>

                        <button type="button" className="btn btn-outline-primary" onClick={downloadFile}>
                            Скачать
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
