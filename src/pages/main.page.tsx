import React from 'react';

import {Bubbles} from '../core/components/bubbles/bubbles';
import {Button} from '../core/components/button/button';
import {ButtonType} from '../core/types/common';
import { Modal } from '../core/components/modal/modal';
import { Panel } from '../core/components/panel/panel';
import { HRLine } from '../core/components/hrline/hrline';

export function Main() {
    return (
        <>
            <Bubbles />
            <Button onClick={() => console.log('1')}>Pop</Button>
            <Button onClick={() => console.log('2')}>Popopopopopopoppopopop</Button>
            <Button onClick={() => console.log('3')} btype={ButtonType.Gradient}>Check</Button>
            <HRLine />
            <Modal onClose={() => {}}>
                <Panel>
                Panel
                </Panel>
            </Modal>
        </>
    );
}
