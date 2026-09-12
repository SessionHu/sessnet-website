import { Link } from 'react-router-dom';
import styles from './FooterBar.module.scss';

export default () => {
  return (
    <footer className={styles.footerBar}>
      <hr />
      <p>
        (C) 2026 <Link to="/">SessNetwork</Link>.&nbsp;
        <Link to="https://creativecommons.org/licenses/by-nd/4.0/">CC BY-ND 4.0</Link>.
      </p>
    </footer>
  );
};
