import { useState } from 'react';
import styles from './layout.module.css';
import { Navbar } from './navbar';
import { Sidebar } from './sidebar';

const Layout = ({ children }) => {
        // --------------------------------------------------------------------------------------------
        const [renderNavbar, setRenderNavbar] = useState(true);
        // --------------------------------------------------------------------------------------------
        const toggleNavbar = () => {
            setRenderNavbar(!renderNavbar)
        }
        // --------------------------------------------------------------------------------------------
    
    return (
        <main className={styles.layout_wrapper}>

            <div className='relative w-full'>
            <Navbar renderNavbar={renderNavbar}/>
            <div className={`md:!hidden ${renderNavbar?"absolute":"absolute"}  mt-5 left-1/2
             transform -translate-x-1/2 translate-y-1/2`}
             style={{bottom:'-1.5rem'}}>
                <div className="w-10" onClick={toggleNavbar}>
                    <img alt='' src='/assets/menu.png' />
                </div>

            </div>
            </div>
            
            <Sidebar />
           <div style={{maxWidth:'calc(100% - 4rem)'}} className='flex-1 '>
           {children}
           </div> 
        </main>
    );
}

export { Layout };
