import React, { Suspense } from 'react';
import {  Route, Routes } from 'react-router-dom';
import { Loader } from '../loader/loader';

const Navigation = () => {
    const FirstPage = React.lazy(() => import('../first-page/first-page'))
    const SecondPage = React.lazy(() => import('../second-page/second-page'))
    const ThirdPage = React.lazy(() => import('../third-page/third-page'))

    return (
        <Routes>
        <Route path={'/'} element={<Suspense fallback={<Loader />}> <FirstPage /></Suspense>} />
        <Route path={'/second-page'} element={<Suspense fallback={<Loader />}> <SecondPage /></Suspense>} />
        <Route path={'/third-page'} element={<Suspense fallback={<Loader />}> <ThirdPage /></Suspense>} />
        </Routes>
    );
}

export default Navigation;
