import React, { useEffect, useState } from 'react';
import { QuestionAnswer, Test, TestQuestion } from '../../../../core/types/definitions';
import { Title } from '../../../../core/components/title/title';
import { TitleType } from '../../../../core/types/common';
import { Panel } from '../../../../core/components/panel/panel';
import {testsApi} from '../../api';


function TestComp({test}: {test: Test}) {
    return (
        <Panel>
            <Title ttype={TitleType.H3}>{test.name}</Title>
            <i>{test.description}</i>
            <ol>
                {test.questions.map(({text, number, answers}: TestQuestion) => {
                    return (
                        <div key={number}>
                            <b>{text}</b>
                            <ul>
                                {answers.map(({text, is_correct, number}: QuestionAnswer) => {
                                    const x = {color: is_correct ? 'green' : 'grey'}
                                    return (
                                        <div style={x}>
                                            {text}
                                        </div>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </ol>
        </Panel>
    );
}

export function TestsListComp() {
    const [tl, stl] = useState<Test[]>([]);

    useEffect(() => {
        testsApi.getMyTests({query:{}})
            // .then(data => console.log(data))
            .then(data => stl(data?.body || []))
    }, [])


    return (
        <>
            {tl.map(item => <TestComp test={item} />)}
        </>
    )
};