import React from 'react';

import {Title} from '../core/components/title/title';
import {ButtonType, TitleType} from '../core/types/common';
import { HRLine } from '../core/components/hrline/hrline';
import { TestsListComp } from '../services/tests/components/test-list/test-list';
import { Button } from '../core/components/button/button';

export function TestList() {
    return (
        <>
            <Title ttype={TitleType.H1}>
                Мои тесты
            </Title>
            <HRLine/>
            <TestsListComp />
            <Button onClick={() => alert('add')} btype={ButtonType.Gradient}>Добавить еще!</Button>
        </>
    );
}
