import React from 'react';

import {Title} from '../core/components/title/title';
import {TitleType} from '../core/types/common';
import { HRLine } from '../core/components/hrline/hrline';
import { TestsListComp } from '../services/tests/components/test-list/test-list';

export function TestList() {
    return (
        <>
            <Title ttype={TitleType.H1}>
                Мои тесты
            </Title>
            <HRLine/>
            <TestsListComp />
        </>
    );
}
