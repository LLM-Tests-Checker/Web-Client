import React from 'react';

import {Bubbles} from '../core/components/bubbles/bubbles';
import {Button} from '../core/components/button/button';
import {ButtonType, TextType, TitleType} from '../core/types/common';
import { Modal } from '../core/components/modal/modal';
import { Panel } from '../core/components/panel/panel';
import { HRLine } from '../core/components/hrline/hrline';
import { Title } from '../core/components/title/title';
import { AuthForm } from '../services/auth/components/auth-form/auth-form';
import { Link } from 'react-router-dom';

export function Main() {



    return (
        <>
            <Title ttype={TitleType.H1}>Главная</Title>
            <Bubbles hasBottomBubble />
            {/* <Button onClick={() => console.log('1')}>Pop</Button>
            <Button onClick={() => console.log('2')}>Popopopopopopoppopopop</Button>
            <Button onClick={() => console.log('3')} btype={ButtonType.Gradient}>Check</Button> */}
            <HRLine />
            <Link to='/tests' style={{'zIndex': 100}}>
                <Title ttype={TitleType.Title}>Мои тесты</Title>
            </Link>
        </>
    );
}
