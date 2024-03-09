import React from 'react';

import {Bubbles} from '../core/components/bubbles/bubbles';
import {Button} from '../core/components/button/button';
import {ButtonType} from '../core/types/common';

function EntryPoint() {
  return (
    <div>
      <Bubbles hasBottomBubble />
      <Button onClick={() => console.log('1')}>Pop</Button>
      <Button onClick={() => console.log('2')}>Popopopopopopoppopopop</Button>
      <Button onClick={() => console.log('3')} btype={ButtonType.Gradient}>Check</Button>
    </div>
  );
}

export default EntryPoint;
