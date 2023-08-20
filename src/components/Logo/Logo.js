import styles from './Logo.module.scss';

export default function Logo() {
return (
  <div className={styles.Logo}>
   <img src="/img/as-logo.png" alt="AS Logo" className={styles.LogoImage} />
  </div>
);
}

