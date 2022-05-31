
import styles from './styles.module.scss';

export function Header () {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="Energy JR" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Blog</a>
                    <a>Cultura Energy</a>
                </nav>
            </div>
        </header>
    );
}