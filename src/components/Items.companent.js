import React, { useState, useEffect, useContext } from 'react';
import { TokenContext } from './../context/token.context';

export const Items = () => {
    const [items, setItems] = useState([]);

    const { userToken } = useContext(TokenContext);

    useEffect(() => {
        getItems();
    }, []);

    async function getItems() {
        const response = await fetch('http://localhost:8081/files/list/', {
            headers: {
                method: 'POST',
                token: userToken,
            },
        });
        const items = await response.json();
        setItems(items.filesList);
    }

    return (
        <ul className="list-group">
            {items.map(item => (
                <li className="list-group-item item" key={item.file_id}>
                    <div>
                        <strong>{item.file_name}</strong>
                        <small>{item.create_date}</small>
                    </div>
                    <button type="button" className="btn btn-outline-primary btn-sm">
                        &times;
                    </button>
                </li>
            ))}
        </ul>
    );
};
