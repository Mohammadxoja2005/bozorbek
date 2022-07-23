import React, {useEffect, useState} from 'react'
import styles from "./index.module.scss" 
import { AiOutlineSearch, AiOutlineArrowDown } from 'react-icons/ai';
import SearchImg from "../../assets/img/search1.png"
import Background1 from "../../assets/img/background1.png"
import Background2 from "../../assets/img/background2.png"
import Background3 from "../../assets/img/background3.png" 
import bozorbekIcon from "../../assets/icons/searchmain.png"; 

  const Search = () => {
    const [search, setSearch] = useState([]);  

    const fakeData = [
      {
        img: "", 
        name: "apple", 
      }, 
      {
        img: "", 
        name: "apple", 
      }, 
      {
        img: "", 
        name: "ananas", 
      }
    ];  

    const check = (s, checker) =>  {    

      let count = 0, first = 0, last;
      
      if(s[0] === undefined) {
          return "thre is no matching"; 
      } 

      if(s[0]) { 

        for(let i = 0; i < s[0].name.length; ++i) {
          
          if(s[0].name[i] == checker[i]) {
            count++; 
          } 

        } 
        first = 0; 
        last = count - 1;   
      }


    return {first, last}; 
  }
    const searchResult = () => {
        
        let data = fakeData.filter(value => {        
          return value.name.includes(search);  
        })    
        
        let light = check(data, search); 

        return {data, light};   
    };  

    let show = searchResult(); 

    const colorize = () => {
        let p = document.querySelectorAll(".colorize"); 

        let first = show.light.first; 
        let last = show.light.last;  
        
        if(p[0] === undefined) {
          return; 
        }  

        console.log(first, last); 

        // p[0].innerHTML = '<mark>' + p[0].innerText.slice(first, last) + '<mark/>'
    }  

    colorize();  

    return (
        <div className={styles['container']}>  

<img src={Background1} alt="" className={styles.rightup}/>
{/* <img src={Background2} alt="" className={styles.rightdown}/>  */}
<img src={Background3} alt="" className={styles.leftup}/> 

 <div className={styles['main_search']}> 
   <h2 className='main_text'><img src={bozorbekIcon} alt="" /></h2>  
   
   <div className={styles['search_postion']}> 
   
     {search.length > 0 ?  null : <AiOutlineSearch className={styles['icon_search']}/>}
       
     <input className={styles['search_input']} onChange={(e) => {setSearch(e.target.value)}} type="text" placeholder='Поиск'/> 
     {search.length > 0 ? <div className={styles['search_res']}><AiOutlineSearch className={styles['res_icon']}/></div> : null}
   
   </div>   
   {search.length > 0 ? 
   <div className={styles['product_result']}> 
     {
       show.data.map((value, key) => {
         return(
         <div className={styles['product_show']} key={key}>
           <div className={styles['line']}></div>
           <img src={SearchImg} alt="" /> 
           
           <p className={styles['colorize']}>{value.name}</p>
         
         </div> 
         )
       })
     }
   
   </div> : null 
   }
   {search.length > 0 ? null : <p className={styles['search_sugg']}>Введите в поиск название нужных вам продуктов.</p> }
   
   <div className={styles['icon']} onClick={() => {localStorage.setItem('check', 'true');window.location.reload()}} ><AiOutlineArrowDown className={styles['icon_item']}/></div>
 
 </div> 
        </div>
    )
  }

  export default Search; 