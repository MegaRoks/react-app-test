import React, { useContext } from 'react';
import { Context } from './../context/context';

export const Alert = () => {
    const { data, setError } = useContext(Context);

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
