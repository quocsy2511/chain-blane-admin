import React from 'react';
import DefaultLayout from './DefaultLayout';

const Protected = ({ children }) => {
    return (
        <div>
            <DefaultLayout>
                {children}
            </DefaultLayout>
        </div>
    );
};

export default Protected;