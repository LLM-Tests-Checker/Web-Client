import React from 'react';

import s from './layout.module.scss';

interface Props {
    children: React.ReactNode;
}

export function Layout({children}: Props) {
    return (
        <main className={s.layout}>
            {children}
        </main>
    );
}
