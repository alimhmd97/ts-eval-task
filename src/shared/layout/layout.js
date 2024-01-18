import styles from './layout.module.css';
import { Navbar } from './navbar';
import { Sidebar } from './sidebar';

const Layout = ({ children }) => {
    return (
        <main className={styles.layout_wrapper}>
            <Navbar />
            <Sidebar />
           <div style={{padding:'1rem 2rem 1rem 1rem ',maxWidth:'calc(100% - 4rem)'}} className='flex-1'>
           {children}
           </div> 
        </main>
    );
}

export { Layout };
