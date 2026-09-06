import type { RouteRecord } from 'vite-react-ssg'
import React from 'react'

const Layout = React.lazy(() => import('./Layout'))

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: 'about/',
        Component: React.lazy(() => import('./pages/about')),
      },
      {
        index: true,
        Component: React.lazy(() => import('./pages/index')),
      },
    ]
  },
]
