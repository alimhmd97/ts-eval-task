import styles from './spinner.module.css';

const Spinner = () => {
    return (
        <div className={styles.spinner_container}>
        <div className={styles.spinner}></div>
      </div>
    );
}

export  {Spinner};
