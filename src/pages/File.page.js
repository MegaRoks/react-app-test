import React, { useState, useEffect } from 'react';
import { Loader } from './../components/Loader.conponent';
import { Item } from './../components/Item.component';
import { Api } from './../api';
import { Endpoints } from '../endpoints';
import { ErrorContext } from '../context/error.context';

export const File = props => {
    const [showLoader, setShowLaoder] = useState(true);
    const [item, setItem] = useState([]);
    const [error, setError] = useState(false);

    const code = props.match.params.url_code;

    useEffect(() => {
        getItem(code);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getItem(code) {
        const router = `${code}/`;
        const endpoints = new Endpoints(router);
        const url = endpoints.getUrl();
        const api = new Api(url);
        const item = await api.get();
        item.err ? setError(true) : setItem(item.fileDetails);
        setShowLaoder(false);
    }

    return (
        <ErrorContext.Provider
            value={{
                item,
                error,
            }}
        >
            <h3>Информация о файле</h3>
            <hr />

            {showLoader === true ? <Loader /> : <Item code={code} />}
        </ErrorContext.Provider>
    );
};
