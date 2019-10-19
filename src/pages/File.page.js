import React, { useState } from 'react';
import { Loader } from './../components/Loader.conponent';
import { Item } from './../components/Item.component';
import { LoaderContext } from './../context/loader.context';

export const File = props => {
    const code = props.match.params.url_code;

    const [showLoader, setShowLaoder] = useState(true);

    return (
        <LoaderContext.Provider
            value={{
                showLoader,
                setShowLaoder,
            }}
        >
            <h3>Информация о файле</h3>
            <hr />

            {showLoader === true ? <Loader /> : <Item code={code} />}
        </LoaderContext.Provider>
    );
};
