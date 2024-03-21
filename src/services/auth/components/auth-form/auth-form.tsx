import { sha512 } from 'js-sha512';
import React from 'react';

import { Title } from '../../../../core/components/title/title';
import { TitleType } from '../../../../core/types/common';
import { AuthInput } from '../auth-input/auth-input';
import { LOGIN_LC_KEY, PASSWORD_LC_KEY } from '../../../../core/constants/auth';

import s from './auth-form.module.scss';
import { Button } from '../../../../core/components/button/button';
import { authAPI } from '../../api';

export function AuthForm() {
    const auth = () => {
        const login = localStorage.getItem(LOGIN_LC_KEY) as string;
        const password = localStorage.getItem(PASSWORD_LC_KEY) as string;

        authAPI.signIn({
            user_login: 'jussiar',
            user_password_hash: sha512('jussiar_hash'),
        })
    }

    return (
        <>
            <fieldset className={s.auth}>
                <legend>
                    <Title ttype={TitleType.Title}>Авторизация</Title>
                </legend>
                <AuthInput key={LOGIN_LC_KEY} name='Логин' placeholder='mylovelyusername/login' />
                <AuthInput key={PASSWORD_LC_KEY} name='Пароль' placeholder='qwerty123' itype='password' />
                <Button onClick={auth}>Войти</Button>
            </fieldset>
        </>
    );
}

