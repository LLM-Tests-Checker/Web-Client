import React from 'react';
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';

import {Layout} from '../core/layout';
import {NotFound} from '../pages/not-found.page';
import { Main } from '../pages/main.page';
import { Auth } from '../pages/auth.page';
import { TestList } from '../pages/test-list.page';


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index path='/' element={<Main />} />
                    <Route path='/auth' element={<Auth />} />
                    <Route path='/tests' element={<TestList /> } />
                    <Route path='/test/create' element={null} />
                    <Route path='/test/:id' element={null} />
                    <Route path='/test/:id/result' element={null} />
                    <Route path='/not-found' element={<NotFound />} />
                    <Route path='*' element={<Navigate to='not-found' />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
