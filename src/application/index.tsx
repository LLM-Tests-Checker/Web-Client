import React from 'react';

import {Bubbles} from '../core/components/bubbles/bubbles';
import {Button} from '../core/components/button/button';
import {Header} from '../core/components/header/header';
import {Layout} from '../core/components/layout/layout';
import {ButtonType} from '../core/types/common';
import { Modal } from '../core/components/modal/modal';
import { Panel } from '../core/components/panel/panel';
import { HRLine } from '../core/components/hrline/hrline';

function EntryPoint() {
  return (
    <div>
      <Bubbles hasBottomBubble hasSideBubbles />
      <Header />
      <Layout>
        <Button onClick={() => console.log('1')}>Pop</Button>
        <Button onClick={() => console.log('2')}>Popopopopopopoppopopop</Button>
        <Button onClick={() => console.log('3')} btype={ButtonType.Gradient}>Check</Button>
        <HRLine />
      </Layout>
      <Modal onClose={() => {}}>
        <Panel>
          Panel
        </Panel>
      </Modal>
    </div>
  );
}

export default EntryPoint;
