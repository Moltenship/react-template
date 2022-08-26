import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { queryClient } from './api';
import { App } from './App';
import { assertNonNull } from './utils/assertNonNull';

const rootElement = document.getElementById('root');
assertNonNull(rootElement);

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);
