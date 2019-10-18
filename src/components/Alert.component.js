import React from 'react';

export const Alert = ({ err }) => {
    return (
        <div className="alert alert-warning alert-dismissible fade show">
            <strong>Error!</strong>
            {err}.
            <button type="button" className="close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};
