import React from 'react' 
import Slider1 from "../../assets/img/slider1.png" 
import Slider2 from "../../assets/img/slider2.png" 
import Slider3 from "../../assets/img/slider3.png" 
import styles from "./index.module.scss"; 
import Carousel from 'nuka-carousel';

function SliderC() {

    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,  
      wrapAround: true, 
      defaultControlsConfig: {
        pagingDotsClassName: styles.slider_dots,    
        nextButtonClassName: styles.slider_next_btn, 
        prevButtonClassName: styles.slider_prev_btn, 
      }, 
      speed: 500,
      fade: true, 
      rows: 1,   
    };       

    return ( 
      <>
    <Carousel {...settings} >
     <img src={Slider1} alt=""    className={styles.imgSlider}/>
     <img src={Slider2} alt=""  className={styles.imgSlider}/>
     <img src={Slider3} alt=""  className={styles.imgSlider}/>
   </Carousel>
      </>
  )
}

export default SliderC; 