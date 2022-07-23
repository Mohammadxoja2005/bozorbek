import React from "react"; 
import styles from "./index.module.scss"; 
import {FaAppStoreIos, FaGooglePlay} from "react-icons/fa";  
import {BsFacebook, BsInstagram} from "react-icons/bs"; 
import telegram from "../../assets/icons/telegram.png"
import facebook from "../../assets/icons/facebook.png"
import playmarket from "../../assets/icons/playmarket.png"
import appstore from "../../assets/icons/appstore.png"
import instagram from "../../assets/icons/instagram.png"


function Footer() {
  return ( 
    <>  
      {window.innerWidth  >= 1200 ? 
        <>
              <div className={styles.footer}>
        
        <div className={styles.footer_question}> 

            <h2 className={styles.a} >Bozorbek</h2>
            <p>Пишите нам свои вопросы, комментарии и предложения</p> 

        </div>  

        <div className={styles.company} id={styles.all}> 
            <h3>О компании</h3>
            <a href="#">Собственные марки</a>
            <a href="#">Доставка</a>
            <a href="#">История</a>
        </div>  

        <div className={styles.footer_contact} id={styles.all}> 
            <h3>Контакты</h3>
            <a href="#">Круглосуточно</a> 
            <a href="#">Bozorbek@mail.ru</a>  
            <h5>+998 90 999-99-99</h5>   
            {/* <a href="#" className={styles.politics_information}>Политика Конфидитиальности</a> */}
        </div> 

        <div className={styles.footer_hot_line} id={styles.all} > 
        <h3>Горячая линия</h3>
            <p>Ежедневно с 09:00 до 19:00</p> 
            <h5>+998 90 999-99-99</h5>    
        </div>
    </div> 

    <div className={styles.footer_elements} >  
    
    <div className={styles.mobileapp}>  

<h4 className={styles.mobileappregister} >Скачивайте наше мобильное приложение</h4>
<div className={styles.footer_stores}>
<div className={styles.market_store}><img src={playmarket} alt="" /> <div className={styles.pos}>Доступно в <span className={styles.market}>Google Play</span></div></div>
  <div className={styles.market_store}><img src={appstore} alt="" /> <div className={styles.pos}>Доступно в <span className={styles.market} >App Store</span></div></div>
</div> 

</div>  

           <div className={styles.social} > 
                <h4 className={styles.findsocial}>МЫ В СОЦ.СЕТЯХ</h4> 
                <div className={styles.footer_social} >
                <img src={instagram} alt="" className={styles.footer_icon}/>
                <img src={telegram} alt="" className={styles.footer_icon} />
                <img src={facebook} alt="" className={styles.footer_icon}/>
                </div>
            </div>  
    </div> 
        </> : <div className={styles.footer}>
        
        <div className={styles.footer_question}> 

            <h2>Bozorbek</h2>
            <p>Пишите нам свои вопросы, комментарии и предложения</p> 

            <div className={styles.mobileapp}>  

<h4 className={styles.mobileappregister} >Скачивайте наше мобильное приложение</h4>
<div className={styles.footer_stores}>
<div className={styles.market_store}><img src={playmarket} alt="" /> <div className={styles.pos}>Доступно в <span className={styles.market}>Google Play</span></div></div>
    <div className={styles.market_store}><img src={appstore} alt="" /> <div className={styles.pos}>Доступно в <span className={styles.market} >App Store</span></div></div>
</div> 

</div>

        </div> 
        
        <div className={styles.company} id={styles.all}> 
            <h3>О компании</h3>
            <a href="#">Собственные марки</a>
            <a href="#">Доставка</a>
            <a href="#">История</a>
        </div> 

        <div className={styles.footer_contact} id={styles.all}> 
            <h3>Контакты</h3>
            <a href="#">Круглосуточно</a> 
            <a href="#">Bozorbek@mail.ru</a>  
            <h5>+998 90 999-99-99</h5>  

            <a href="#" className={styles.politics_information}>Политика Конфидитиальности</a>
        </div> 

        <div className={styles.footer_hot_line} id={styles.all} > 
        <h3>Горячая линия</h3>
            <p>Ежедневно с 09:00 до 19:00</p> 
            <h5>+998 90 999-99-99</h5>  
            
            <div className={styles.social} > 
                <h4 className={styles.findsocial}>МЫ В СОЦ.СЕТЯХ</h4> 
                <div className={styles.footer_social} >
                <img src={instagram} alt="" className={styles.footer_icon}/>
                <img src={telegram} alt="" className={styles.footer_icon} />
                <img src={facebook} alt="" className={styles.footer_icon}/>
                </div>
            </div> 

        </div>
       </div> }
    </>
  )
}

export default Footer;  
    
    
    
    