import { Link } from 'react-router-dom'
import styles from './about.module.scss'


export default function A() {
  return (
    <>
      <h1 className={styles.a}>Page A</h1>
      <Link to="/" className={styles.b}>to index</Link>
    </>
  )
}
