import { Link } from 'react-router-dom'
import styles from './about.module.scss'

export default function () {
  return (
    <>
      <h1>About</h1>
      <p>Coming soon...</p>
      <p>Also see our <Link to="/terms/">Terms of Service & Privacy Policy</Link>.</p>
    </>
  )
}
