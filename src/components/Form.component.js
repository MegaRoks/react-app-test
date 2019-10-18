import React from 'react';

export const Form = () => {
    return (
        <form>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Загрузить</span>
                </div>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" />
                    <label className="custom-file-label">Выберите файл</label>
                </div>
            </div>
        </form>
    );
};
