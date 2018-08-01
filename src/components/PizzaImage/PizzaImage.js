import React from 'react';

import classes from './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpeg';

import Test from '../TestComponent/Test';

const pizzaImage = (props)=>{
   return( 
       <div className={classes.mainContainer}>
           <div className={classes.PizaImage}>
               <img src={PizzaImage} className={classes.PizaImg} />
           </div>
           <Test/>
       </div>
  
)
}

export default pizzaImage;