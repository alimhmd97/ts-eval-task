import styles from './layout.module.css';
import { Navbar } from './navbar';
import { Sidebar } from './sidebar';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout_wrapper}>
            <Navbar />
            <Sidebar />
           <div style={{padding:'1rem'}}>
           {children}
           </div> 
        </div>
    );
}

export { Layout };
