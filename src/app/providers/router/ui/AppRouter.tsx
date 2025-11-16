import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../routerConfig';
import { Suspense } from 'react';

const AppRouter = () => {
    return (
        <Routes>
            {routeConfig.map((route) => {
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<Suspense key={route.path} fallback={<div>Loading...</div>}>{route.element}</Suspense>}
                    />
                );
            })}
        </Routes>
    );
}

export default AppRouter;
