import React, { useContext } from 'react';
import { AlertContext } from './../context/alert.context';

export const Alert = () => {
    const { data, setError } = useContext(AlertContext);

    console.log(data);

    return (
        <div className="alert alert-warning alert-dismissible fade show">
            <strong>Error!&nbsp;</strong>
            {data.err}
            <button type="button" className="close" onClick={() => setError(false)}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};
