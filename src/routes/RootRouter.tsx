import { FC } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <div>Empty page</div>,
  },
];

/** Root router. */
export const RootRouter: FC = () => useRoutes(routes);
