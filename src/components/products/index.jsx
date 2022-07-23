import React from 'react'
import {AiOutlineShopping} from "react-icons/ai";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";  
import {VscFoldDown} from "react-icons/vsc"; 
import Grape from "../../assets/img/fruit.png"; 
import Carousel from "nuka-carousel";
import market from "../../assets/icons/market.png"  
import "./index.scss" 

function Products() { 
   
   const fakeData = [
        {
          id: 1, 
          img: Grape, 
          title: "Виноград", 
          price: 10.995
        }, 
        {
          id: 2, 
          img: Grape, 
          title: "Виноград", 
          price: 10.995
        }, 
        {
          id: 3, 
          img: Grape, 
          title: "Виноград", 
          price: 10.995
        }, 
        {
          id: 4, 
          img: Grape, 
          title: "Виноград", 
          price: 10.995
        }, 
        {
          id: 5, 
          img: Grape, 
          title: "Виноград", 
          price: 10.995
        }, 
        {
          id: 5, 
          img: Grape, 
          title: "Виноград", 
          price: 10.995
        }, 
        {
          id: 5, 
          img: Grape, 
          title: "Виноград", 
          price: 10.995
        }, 
   ]  


  function slideWidth(n) {
   let k = 0; 
   
   if(n > 1200) {
     k = 5;
     return k; 
   } 

   if(n > 992 && n <= 1200) {
     k = 4; 
     return k;
   } 

   if(n > 768 && n <= 992) {
    k = 3; 
    return k; 
   } 

   if(n > 576 && n <= 768) {
    k = 2; 
    return k; 
   } 

   if(n < 576) {
    k = 1; 
    return k;
   }

   return k; 
  }  

  const slidesShow = slideWidth(window.innerWidth); 

    const settings = { 
      slidesToShow: slidesShow,
      slidesToScroll: 2,  
      wrapAround: true, 
      defaultControlsConfig: {
        pagingDotsClassName: "products_dot",  
        nextButtonText: <GrFormNext/>, 
        prevButtonText: <GrFormPrevious/>,  
        nextButtonClassName: "next_btn", 
        prevButtonClassName: "prev_btn"
      }, 
      speed: 500,
      fade: true, 
      rows: 1,  
    }    

  return (
    <div className='product_slider'> 
    <div className='product_category'>
      <h2>Фрукты</h2>
      <div className='products_slider' >   

      <Carousel {...settings}>   
      {
        fakeData.map(value => {
            return ( 
               <div className='product_description' key={value.id}> 
              <img src={value.img} alt="" />
              <p className='product_title' >{value.title}</p>
              <p className='product_price' ><span>{value.price}</span> СУМ/КГ</p>
              <div className='product_btn' ><img src={market} alt="" /></div>   
              </div> 
            )
        })
      }   
      </Carousel>  

      </div>
    </div>
    <div className='product_category'>
      <h2>Овощи</h2>
      <div className='products_slider' >  
      <Carousel {...settings}>  
      {
        fakeData.map(value => {
            return (
              <div className='product_description' key={value.id}> 
                 <img src={value.img} alt="" />
                 <p className='product_title' >{value.title}</p>
                 <p className='product_price' ><span>{value.price}</span> СУМ/КГ</p>
                 <div className='product_btn' ><img src={market} alt="" /></div>   
              </div>  
            )
        })
      }  
      </Carousel>  
      </div>
    </div>  

  <div className='showmore'>
    <div className='showmore_btn' > 
    <p>Показать больше</p>
    </div>  

    <VscFoldDown />
    </div>

  </div>
  )
}

export default Products; 