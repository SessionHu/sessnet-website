import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

export default () => {
  return (
    <nav>
      <ul className={styles.navBar}>
        <li><Link to="/">SessNetwork</Link></li>
        <li><Link to="/">home</Link></li>
        <li><Link to="https://sess.dn42.li/">dn42</Link></li>
        <li><Link to="https://nsh.sess.moe/">token</Link></li>
        <li><Link to="/about/">about</Link></li>
      </ul>
      <hr />
    </nav>
  );
};
