import React, { useState, useEffect, useContext } from 'react';
import { Api } from './../api';
import { Endpoints } from '../endpoints';
import { LoaderContext } from './../context/loader.context';

export const Items = () => {
    const [items, setItems] = useState([]);

    const { setShowLaoder } = useContext(LoaderContext);

    useEffect(() => {
        getItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getItems() {
        const router = `files/list/`;
        const endpoints = new Endpoints(router);
        const url = endpoints.getUrl();
        const api = new Api(url);
        const items = (await api.get()).json();
        setItems(items.filesList);
        setShowLaoder(false);
    }

    const deteleFile = async fileId => {
        const router = `file/delete/`;
        const body = JSON.stringify({
            fileId,
        });
        const endpoints = new Endpoints(router);
        const url = endpoints.getUrl();
        const api = new Api(url, body);
        await api.delete();
    };

    return (
        <ul className="list-group">
            {items.length === 0 ? (
                <div>
                    <strong className="justify-content-center">У вас нет загруженных файлов</strong>
                </div>
            ) : (
                items.map(item => (
                    <li className="list-group-item item" key={item.file_id}>
                        <div>
                            <strong>{item.file_name}</strong>
                            <small>{item.create_date}</small>
                        </div>
                        <button
                            type="button"
                            className="btn btn-outline-primary btn-sm"
                            onClick={() => deteleFile(item.fileId)}
                        >
                            &times;
                        </button>
                    </li>
                ))
            )}
        </ul>
    );
};
