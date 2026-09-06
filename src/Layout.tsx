import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar';
import FooterBar from './components/FooterBar';

export default function Layout() {
  return (
    <>
    	<NavBar />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    	<FooterBar />
    </>
  )
}
