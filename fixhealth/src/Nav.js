import styles from './Nav.module.css';
import { useState } from 'react';
import close from './asset/close.svg';
import m from './asset/menu.svg.svg'


function Nav(){

    var [nav,setNav] = useState(false);
    var [menu,setMenu] = useState(true);

    const changebackground = ()=>{
        if(window.scrollY>=80){
            setNav(true);
        }else{
            setNav(false);
        }
    }

    window.addEventListener("scroll",changebackground);


    return <div className={nav? `${styles.nav} ${styles.active}` :`${styles.nav}` }>
        <div className={styles.image}>
            <img src='https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg' alt='logo'/>
        </div>
        <div className={styles.navitem}>
            <ul className="d-flex align-items-center">
                <li>Home</li>
                <li>Services</li>
                <li>Blog</li>
                <li>About</li>
                <li><span className={styles.book}>Book now</span></li>
            </ul>
        </div>
       {menu?<div onClick={()=>{
            setMenu(false);
        }} className={styles.menu}><img src={m} alt='menu'/></div> : <div className={styles.sidebar}>
        <div className={styles.close} onClick={()=>{
            setMenu(true);
        }}><img src={close} style={{height:"30px"}}/></div>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Blog</li>
            <li>About</li>
            <li>Book now</li>
        </ul>
    </div> }
        </div>
}

export default Nav;