import React, {useRef} from 'react'
import Search from "../../components/search"; 
import Navbar from '../../components/navbar';  
import Category from '../../components/category'; 
import SliderC from '../../components/slider';
import Products from '../../components/products'; 
import Contact from '../../components/contact'; 
import Footer from '../../components/footer'; 
import styles from './index.module.scss'
import MainBackground1 from "../../assets/img/mainbackground1.png";
import MainBackground2 from "../../assets/img/mainbackground2.png";

const Main = () => {  

  const check = localStorage.getItem('check'); 

  let checker = false; 

  if(check === 'true') {
    checker = true; 
  } 

  const elem = useRef();   

  return (   
    <>
    {checker ? <div className={styles.fordiv}>
     <div className={styles.container}>  
      <img src={MainBackground1} alt="" className={styles.img1}/>
      <img src={MainBackground2} alt="" className={styles.img2} />
   <Navbar/>  

  <div className={styles.slider_category}> 
   <Category/>
   
   <div className={styles.slider}> 
     <SliderC elem={elem} />
   </div>
   
   </div> 
   <Products /> 
   <Contact/> 
   <Footer/> 

 </div>
 </div>   : <Search/>}
    </>
  )
}

export default Main 