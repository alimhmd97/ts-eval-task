import styles from './layout.module.css';
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { RiAlarmWarningLine } from "react-icons/ri";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";


const Navbar = () => {
    return (
        <div className={styles.navbar_wrapper}>
            <div className={styles.nav_logo_wrapper}>

                <img alt='' src='https://cdn.builder.io/api/v1/image/assets/TEMP/3833ad54abbe71b5e1e165734558950c7b02e0292a0f4592d0ce6d1b5e3ee6da?apiKey=854b1295ef754afa80d463882b8719fe&'/>
            </div>
            {/*  */}
            <div className={styles.navbar_items_wrapper}>
                <div className={styles.navbar_item} style={{marginRight:'auto'}}>
                <HiOutlineDesktopComputer />
               <span className={styles.nav_text}> All courses</span>
                </div>
                <div className={styles.navbar_item}>
                <CiSearch />
                <span className={styles.nav_text}>Search</span>
                </div>
                <div className={styles.navbar_item}>
                <CgProfile />
                <span className={styles.nav_text}>My profile</span>
                </div>
                <div className={styles.navbar_item}>
                <RiAlarmWarningLine />
                <span className={styles.nav_text}> Notifications</span>
                </div>
                <div className={styles.navbar_item}>
                <MdOutlineHeadsetMic />
                <span className={styles.nav_text}> Support</span>
                </div>
                <div className={styles.navbar_item}>
                <BsQuestionCircle />
                <span className={styles.nav_text}> FAQs</span>
                </div>
                <div className={styles.navbar_item}>
                <IoSettingsOutline />
                <span className={styles.nav_text}> Settings</span>
                </div>
                <div className={styles.navbar_item}>
                <IoIosLogOut />
                <span className={styles.nav_text}> Log out</span>
                </div>
               
            </div>

        </div>
    );
}

export { Navbar };
