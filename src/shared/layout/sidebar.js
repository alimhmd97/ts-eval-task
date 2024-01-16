import styles from './layout.module.css';
import { TbRoute } from "react-icons/tb";
import { IoBookOutline } from "react-icons/io5";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
    const Navigate=useNavigate()
    return (
        <div className={styles.sidebar_wrapper}>
            <TbRoute onClick={()=>{
                Navigate('/')
            }} className={styles.icon_styles} />
            <IoBookOutline onClick={()=>{
                Navigate('/second-page')
            }}
             className={styles.icon_styles}/>
            <HiOutlineSquares2X2 onClick={()=>{
                Navigate('/third-page')
            }} className={styles.icon_styles}/>
         <div onClick={()=>{
                Navigate(-1)
            }} className={styles.back_arrow_wrapper}>
         <FaArrowRight className={styles.back_arrow}/>
         </div>   
        </div>
    );
}

export { Sidebar };
