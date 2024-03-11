import React from 'react';

import { Button } from '../button/button';
import { Text } from '../text/text';
import { ButtonType, TextType } from '../../types/common';
import { PROJECT_NAME } from '../../constants/common';

import logo from './assets/logo.svg';
import enter from './assets/enter.svg';

import s from './header.module.scss';

export function Header() {
    return (
        <header className={s.header}>
            <div className={s.company}>
                <img src={logo} />
                <Text ttype={TextType.Control} isbold>{PROJECT_NAME}</Text>
            </div>
            <div className={s.controls}>
                <Text ttype={TextType.Control} isbold isUnderlined>
                    О проекте
                </Text>
                <Text ttype={TextType.Control} isbold isUnderlined>
                    Как пользоваться
                </Text>
                <Text ttype={TextType.Control} isbold isUnderlined>
                    FAQ
                </Text>
                <Button btype={ButtonType.Transparent} onClick={() => alert("Вход")}>
                    <img src={enter} />
                    <Text ttype={TextType.Control} isbold>
                        Войти
                    </Text>
                </Button>
            </div>
        </header>
    );
}