import React from 'react';

import closeButton from './assets/close-button.svg';

import s from './modal.module.scss';

interface Props {
    onClose: () => void;
    children: React.ReactNode;
}

export function Modal({children, onClose}: Props) {
    return (
        <>
            <div className={s.modalForegroundBlur} />
            <div className={s.modal}>
                <img className={s.close} src={closeButton} />
                {children}
            </div>
        </>
    );
}
