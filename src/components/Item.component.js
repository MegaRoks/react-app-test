import React, { useContext } from 'react';
import { Endpoints } from '../endpoints';
import { ErrorContext } from '../context/error.context';
import { Link } from 'react-router-dom';

export const Item = ({ code }) => {
    const { item, error } = useContext(ErrorContext);

    const router = `file/download/${code}/`;
    const endpoints = new Endpoints(router);
    const url = endpoints.getUrl();

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
                            <span>{item.create_date}</span>
                        </h5>
                        <Link className="btn btn-outline-primary" to={{ pathname: url }} target="_blank" download>
                            Скачать
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};
