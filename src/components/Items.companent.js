import React, { useState, useEffect } from 'react';

export const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems();
    }, []);

    async function getItems() {
        const response = await fetch('http://localhost:8081/files/list/', {
            headers: {
                method: 'POST',
                token:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJFbWFpbCI6InRlc3RAZ21haWwuY29tIiwiZmlyc3RObWUiOiJNYXhpbSIsImxhc3ROYW1lIjoiS2FtZW5ldiIsImlhdCI6MTU3MTI5NjAyOSwiZXhwIjoxNzQ0MDk2MDI5fQ.6SD_859trfFF_T9iMAHOuI2wgHZ4cQw_0abRiKqZ6oc',
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
