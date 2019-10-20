import React, { useState, useEffect } from 'react';
import { Loader } from './../components/Loader.conponent';
import { Items } from './../components/Items.component';
import { Api } from './../api';
import { Endpoints } from '../endpoints';
import { ItemsContext } from '../context/items.context';

export const Files = () => {
    const [showLoader, setShowLaoder] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getItems() {
        const router = `files/list/`;
        const endpoints = new Endpoints(router);
        const url = endpoints.getUrl();
        const token = localStorage.getItem('userToken');
        const api = new Api(url, null, token);
        const files = await api.get();
        setItems(files.filesList);
        setShowLaoder(false);
    }

    return (
        <ItemsContext.Provider value={{ items, setItems }}>
            <h3>Файлы пользователя</h3>
            <hr />

            {showLoader === true ? <Loader /> : <Items items={items} />}
        </ItemsContext.Provider>
    );
};
