import styles from './loader.module.css';

const Loader = () => {
    return (
        <div className={styles.loader_position}>
        <div className={`${styles.opposites}`}>
            <div className={`${styles.opposites + ' ' + styles.bl}`}></div>
            <div className={`${styles.opposites + ' ' + styles.tr}`}></div>
            <div className={`${styles.opposites + ' ' + styles.br}`}></div>
            <div className={`${styles.opposites + ' ' + styles.tl}`}></div>
        </div>
        </div>
    );
}

export { Loader };
