import React, { useContext } from 'react';
import { Api } from './../api';
import { Endpoints } from '../endpoints';
import { ItemsContext } from '../context/items.context';

export const Items = () => {
    const { items, setItems } = useContext(ItemsContext);
    const endpoints = new Endpoints();
    const url = endpoints.getUrl();

    const deteleFile = async fileId => {
        const router = `file/delete/`;
        const body = JSON.stringify({
            fileId,
        });
        const endpoints = new Endpoints(router);
        const url = endpoints.getUrl();
        const token = localStorage.getItem('userToken');
        const api = new Api(url, body, token);
        await api.delete();
        setItems(
            items.filter(item => {
                return item.file_id !== fileId;
            }),
        );
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
                            <strong>
                                {url}
                                {item.url_code}
                            </strong>
                            <strong>{item.count_downloads}</strong>
                            <small>{item.create_date}</small>
                        </div>
                        <button
                            type="button"
                            className="btn btn-outline-primary btn-sm"
                            onClick={() => deteleFile(item.file_id)}
                        >
                            &times;
                        </button>
                    </li>
                ))
            )}
        </ul>
    );
};
