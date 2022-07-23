import React from 'react'
import styles from "./index.module.scss"
import {FaTelegramPlane} from "react-icons/fa"; 
import ContactImg from "../../assets/img/contact.png";

function Contact() {
  return (
    <div className={styles.contact}>
       <div  className={styles.contact_description}> 

            <h2>Чат поддержки</h2>
            <p>Получите ответ от наших за несколько минут</p>
            <div className={styles.contact_number}>
                <input type="text" className={styles.contact_phone_input} />
                <div className={styles.contact_btn}><span className={styles.icon}><FaTelegramPlane /></span>Подтвердить</div>
            </div> 
       </div> 
       <img src={ContactImg} alt="" className={styles.img_adapt}/> 

    </div>
  )
}

export default Contact; 