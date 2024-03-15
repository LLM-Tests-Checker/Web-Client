import React from 'react';

import { Title } from '../../../../core/components/title/title';
import { TitleType } from '../../../../core/types/common';
import { AuthInput } from '../auth-input/auth-input';
import { LOGIN_LC_KEY, PASSWORD_LC_KEY } from '../../../../core/constants/auth';

import s from './auth-form.module.scss';
import { Button } from '../../../../core/components/button/button';
import { authAPI } from '../../api';
import { sha256 } from 'js-sha256';

export function AuthForm() {
    const auth = () => {
        const login = localStorage.getItem(LOGIN_LC_KEY) as string;
        const password = localStorage.getItem(PASSWORD_LC_KEY) as string;

        console.log('x')
        authAPI.signIn({
            user_login: login,
            user_password_hash: 'f85dc028f7b761b3edfd9e3304be57bd69ec2e693900de095b6345cb248adbc14aef246ecab4d52cb35ff5c2a656761e3a8847c757224a7dee186c0d5a423a3a',
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
