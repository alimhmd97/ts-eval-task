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
    
const [isSidebarOpened, setIsSidebarOpened] = useState(false);

const toggleSidebar=()=>{
    setIsSidebarOpened(!isSidebarOpened)
}
        // --------------------------------------------------------------------------------------------

    return (
        <main className={styles.layout_wrapper}>

            <div className='relative w-full '>
            <Navbar renderNavbar={renderNavbar}/>
            <div className={`md:!hidden flex w-full mt-5 left-1/2 felx justify-center items-center`}
             style={{bottom:'-1.5rem'}}>
                <div className="w-10" onClick={toggleNavbar}>
                    <img alt='' src='/assets/menu.png' />
                </div>

            </div>
            </div>
            
            <Sidebar toggleSidebar={toggleSidebar} isSidebarOpened={isSidebarOpened}/>
           <div style={{width:isSidebarOpened?'calc(100% - 30vw)':'calc(100% - 5rem)'}} className={` flex-1`}>
           {children}
           </div> 
        </main>
    );
}

export { Layout };
