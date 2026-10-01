import type { RouteRecord } from 'vite-react-ssg'
import React from 'react'

const Layout = React.lazy(() => import('./Layout'))

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: React.lazy(() => import('./pages/index')),
      },
      {
        path: 'about/',
        Component: React.lazy(() => import('./pages/about')),
      },
      {
        path: 'terms/',
        Component: React.lazy(() => import('./pages/terms')),
      },
    ]
  },
]
