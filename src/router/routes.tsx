import { RouteObject } from 'react-router-dom';
import React from 'react';

const MainLanding = React.lazy(
  () => import('@/pages/landingList/pages/MainLandingPage'),
);
const Cover = React.lazy(() => import('@/pages/cover/pages/CoverPage'));

const InquiryPage = React.lazy(
  () => import('@/pages/inquiry/pages/InquiryPage'),
);
//
const router = [
  {
    index: true,
    path: '/',
    element: <MainLanding />,
  },
  {
    path: '/index.html',
    element: <MainLanding />,
  },
  {
    path: '/cover',
    element: <Cover />,
  },
  {
    path: '/inquiry',
    element: <InquiryPage />,
  },
] as Array<RouteObject>;

export default router;
