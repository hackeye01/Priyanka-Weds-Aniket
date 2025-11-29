import * as React from 'react';
import type { RouteObject } from 'react-router-dom';
import Root from './root';
import Home from './routes/home';
import Letter from './routes/letter';
import Journey from './routes/journey';
import WeddingDetails from './routes/wedding-details';
import Blessings from './routes/blessings';
import Family from './routes/family';

const routes: RouteObject[] = [
  {
    path: '/',
    element: React.createElement(Root),
    children: [
      {
        index: true,
        element: React.createElement(Home),
      },
      {
        path: 'letter',
        element: React.createElement(Letter),
      },
      {
        path: 'journey',
        element: React.createElement(Journey),
      },
      {
        path: 'story',
        element: React.createElement(Journey),
      },
      {
        path: 'wedding-details',
        element: React.createElement(WeddingDetails),
      },
      {
        path: 'details',
        element: React.createElement(WeddingDetails),
      },
      {
        path: 'blessings',
        element: React.createElement(Blessings),
      },
      {
        path: 'family',
        element: React.createElement(Family),
      },
    ],
  },
];

export default routes;