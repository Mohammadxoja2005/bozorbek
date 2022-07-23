import React, {useState, useMemo} from 'react'
import styles from './index.module.scss'; 
import {GiHamburgerMenu, GiShoppingBag} from "react-icons/gi"; 
import { AiOutlineSearch } from 'react-icons/ai'; 
import bozorbekIcon from "../../assets/icons/mainicon.png";

function Navbar() { 
  const [search, setSearch] = useState([]);   
  
  return (
    <div className={styles.navbar}>
        <h2 className={styles.navbar_title}><img src={bozorbekIcon} alt="" /></h2>  
        
        <div className={styles.search_postion} > 
            
            {search.length > 0 ?  null : <AiOutlineSearch className={styles.icon_search}/>}
              
            <input className={styles.search_input}  onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Поиск'/> 
            {search.length > 0 ? <div className={styles.search_res}><AiOutlineSearch className={styles.res_icon} /></div> : null}
          
        </div> 

        <div className={styles.burger_navbar}> 
        <div className={styles.price}>
          <span className={styles.num}>2</span> 
          <GiShoppingBag className={styles.bag} />
          <p>50.000 Сум</p>  
        </div>
         <GiHamburgerMenu  className={styles.burger_menu}/>
          <ul>

          </ul>
        </div>
      </div>
  )
}

export default Navbar; 