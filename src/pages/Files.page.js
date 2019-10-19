import React, { useState } from 'react';
import { Loader } from './../components/Loader.conponent';
import { LoaderContext } from './../context/loader.context';
import { Items } from './../components/Items.component';

export const Files = () => {
    const [showLoader, setShowLaoder] = useState(true);

    return (
        <LoaderContext.Provider
            value={{
                showLoader,
                setShowLaoder,
            }}
        >
            <h3>Файлы пользователя</h3>
            <hr />

            {showLoader === true ? <Loader /> : <Items />}
        </LoaderContext.Provider>
    );
};
