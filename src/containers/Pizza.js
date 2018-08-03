import React, {Component} from 'react';
import PizzaImage from '../components/PizzaImage/PizzaImage';
import classes from '../components/PizzaImage/PizzaImage.css';

class Pizza extends Component{
    render(){
        return(
            <div className={classes.mainContainer}>
                <h3>The Pizza</h3>
                <PizzaImage/>
            </div>

        );
    }
}
export default Pizza;