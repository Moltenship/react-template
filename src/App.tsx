import { FC, Suspense } from 'react';
import { RootRouter } from './routes/RootRouter';

/** App component. */
export const App: FC = () => (
  <Suspense fallback={<div>loading...</div>}>
    <RootRouter />
  </Suspense>
);
