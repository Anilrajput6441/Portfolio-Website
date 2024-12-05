import React, {useState} from 'react';
import style from './Navbar.module.css';
import { getImageUrl } from '../../util';

 export const Navbar = () => {
   
    const [menuOpen,setmenuOpen] = useState(false);
    
  return(
   <nav className={style.navbar}>
    <a className={style.title} href="/">Portfolio</a>
    <div className={style.menu}>
        <img className={style.menuBtn}
         src={menuOpen ? getImageUrl("/nav/closeIcon.png")
            :getImageUrl("/nav/menuIcon.png")
         } alt="menu-button" 
         onClick={() => setmenuOpen(!menuOpen)}/>
        <ul className={`${style.menuItem} ${menuOpen && style.menuOpen}`} 
        onClick={() => setmenuOpen(false)}>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#experience">Experience</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
   </nav>
  );
};

// export default Navbar;
