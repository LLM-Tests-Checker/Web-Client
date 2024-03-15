import React from 'react';
import { QuestionAnswer, Test, TestQuestion } from '../../../../core/types/definitions';
import { Title } from '../../../../core/components/title/title';
import { TitleType } from '../../../../core/types/common';
import { Panel } from '../../../../core/components/panel/panel';


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
    const tests: Test[] = [
        {
            name: 'test 1',
            description: 'description of test 1 for more info of the test',
            questions: [
                {
                    number: 1,
                    text: 'What is answer',
                    answers: [
                        {
                            number: 1,
                            text: 'answer 1',
                            is_correct: false,
                        },
                        {
                            number: 2,
                            text: 'answer 2 smth',
                            is_correct: false,
                        },
                        {
                            number: 3,
                            text: 'answer 3 is right',
                            is_correct: true,
                        }
                    ]
                },
                {
                    number: 1,
                    text: 'What is answer for this hey?',
                    answers: [
                        {
                            number: 1,
                            text: 'answer 1',
                            is_correct: true,
                        },
                        {
                            number: 2,
                            text: 'answer 2 smth',
                            is_correct: false,
                        },
                    ]
                }
            ],
            identifier: 'uuid1',
        },
        {
            name: 'test 2',
            description: 'description of test 2 for more info of the test long long long long long long ',
            questions: [
                {
                    number: 1,
                    text: 'What is answer',
                    answers: [
                        {
                            number: 1,
                            text: 'answer 1',
                            is_correct: true,
                        },
                        {
                            number: 2,
                            text: 'answer 2 smth',
                            is_correct: false,
                        },
                        {
                            number: 3,
                            text: 'answer 3',
                            is_correct: false,
                        },
                        {
                            number: 4,
                            text: 'answer 4',
                            is_correct: false,
                        }
                    ]
                }
            ],
            identifier: 'uuid2',
        },
    ];

    return (
        <>
            {tests.map(item => <TestComp test={item} />)}
        </>
    )
};