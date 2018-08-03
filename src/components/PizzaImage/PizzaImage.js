import React from 'react';

import classes from './PizzaImage.css';
import PizzaImage from '../../assets/pizzas.jpg';

import Test from '../TestComponent/Test';

const pizzaImage = (props)=>{
   return( 
       <div className={classes.mainContainer}>
           <div className={classes.PizaImage}>
               <img src={PizzaImage} className={classes.PizaImg} />
           </div>
           <div>
               <Test />
           </div>
       </div>
  
)
}

export default pizzaImage;