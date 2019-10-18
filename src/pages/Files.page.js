import React, { Fragment } from 'react';

import { Items } from './../components/Items.companent';

export const Files = () => {
    return (
        <Fragment>
            <h3>Файлы пользователя</h3>
            <hr />
            <Items />
        </Fragment>
    );
};
