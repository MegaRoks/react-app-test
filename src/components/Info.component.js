import React from 'react';
import { Endpoints } from '../endpoints';

export const Info = ({ data }) => {
    console.log(data);
    const endpoints = new Endpoints();
    const urlOfFiles = endpoints.getUrlOfFiles();

    return (
        <div className="jumbotron">
            <div className="container">
                <h3 className="display-4">
                    {urlOfFiles}
                    {data.urlCode}
                </h3>
                <p className="lead">{data.message}</p>
            </div>
        </div>
    );
};
