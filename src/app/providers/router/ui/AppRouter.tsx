import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../routerConfig';
import { Suspense } from 'react';
import PageLoader from '@/widgets/PageLoader/PageLoader';

const AppRouter = () => {
    return (
        <Routes>
            {routeConfig.map((route) => {
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<Suspense key={route.path} fallback={<PageLoader />}>{route.element}</Suspense>}
                    />
                );
            })}
        </Routes>
    );
}

export default AppRouter;
