import React, { Suspense } from 'react';
import { useRoutes } from 'react-router';

import Loading from '@/components/layout/Loading';

import router from './router/routes';

function App() {
  return (
    <>
      {/* working component */}
      <Suspense fallback={<Loading />}>{useRoutes(router)}</Suspense>
      {/* // working component */}
    </>
  );
}

export default App;
