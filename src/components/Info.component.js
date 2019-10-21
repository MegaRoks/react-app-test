import React from 'react';

export const Info = ({ data }) => {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">{data.shortUrl}</h1>
                <p className="lead">{data.message}</p>
            </div>
        </div>
    );
};
