import React, {useEffect} from 'react' 
import {AiOutlineArrowLeft} from "react-icons/ai"; 
import styles from "./index.module.scss"; 
import categoryImg from "../../assets/img/category.png" 
import Arrow from "../../assets/icons/arrow.png"; 

function Category() { 

  return (
    <div className={styles.category}>  
    <div className={styles.category_placement}>
      <div className={styles.category_button} onClick={() => {localStorage.removeItem('check'); window.location.reload()}} ><img src={Arrow} alt="" /></div>
      <h3 className={styles.category_title}>Каталог</h3>
    </div>  

    {/* <div className={styles.scrollbar}> */}
      <ul className={styles.category_names}>  
      {
        [1,2,3,4,5,6,7,8,9,10].map((value, index) => {
          return(
            <div key={index}  ><img src={categoryImg} alt=""/><li>Пекарня</li></div>
          )
        })
      }
      </ul> 
    </div>
    // </div>
  )
}

export default Category; 