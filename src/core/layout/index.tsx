import React from 'react';
import {Outlet} from 'react-router-dom';

import {Content} from '../components/content/content';

export const Layout = () => (
    <Content>
        <Outlet />
    </Content>
);
