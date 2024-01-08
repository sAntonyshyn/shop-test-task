'use client';
import React, {FC} from 'react';
import {SnackbarProvider as NotistackProvider} from 'notistack';

const SnackbarProvider: FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <NotistackProvider>
            {children}
        </NotistackProvider>
    );
};

export default SnackbarProvider;
