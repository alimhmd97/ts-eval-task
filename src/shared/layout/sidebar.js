import styles from './layout.module.css';
import { TbRoute } from "react-icons/tb";
import { IoBookOutline } from "react-icons/io5";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Sidebar = ({ toggleSidebar, isSidebarOpened }) => {
    const Navigate = useNavigate()


    return (<>
        <div className={` ${isSidebarOpened ? 'md:w-[15vw] md:min-w-32 ' : 'max-md:!w-0'} relative`}>
            {!isSidebarOpened && <span className='text-light md:hidden'>.</span>}
            <div onClick={() => {
                toggleSidebar()
            }} className={`${styles.back_arrow_wrapper} z-10`}>
                               <FaArrowRight className={styles.back_arrow} />
            </div>

            <div className={`${styles.sidebar_wrapper} ${isSidebarOpened ? '!w-[100%] md:min-w-32 ' : 'max-md:!w-0'} `}>
                <div className='flex  w-full px-3 items-center'>
                  
                    <TbRoute onClick={() => {
                        Navigate('/')
                    }} className={`${styles.icon_styles} ${isSidebarOpened?'md:mr-4':''}`} />
                      <span className={`${isSidebarOpened?"":"hidden"} max-md:text-xs max-md:hidden`}>Home</span>
                    </div>
                <div className='flex  w-full px-3 items-center'>
                    <IoBookOutline onClick={() => {
                        Navigate('/second-page')
                    }}
                        className={`${styles.icon_styles} ${isSidebarOpened?'md:mr-4':''}`} />
                          <span className={`${isSidebarOpened?"":"hidden"} max-md:text-xs max-md:hidden`}>Test</span>
                          </div>
                <div className='flex  w-full px-3 items-center'>
                    <HiOutlineSquares2X2 onClick={() => {
                        Navigate('/third-page')
                    }} className={`${styles.icon_styles} ${isSidebarOpened?'md:mr-4':''}`} />
                      <span className={`${isSidebarOpened?"":"hidden"} max-md:text-xs max-md:hidden`}> Booster</span>
                      </div>

            </div>
        </div>

    </>
    );
}

export { Sidebar };
